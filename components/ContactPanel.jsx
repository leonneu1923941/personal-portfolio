/* ============================================================
   CONTACT PANEL  — headline + prominent embedded cal.com booking
   ============================================================ */
const contactStyles = {
  head: { padding: "28px" },
  kicker: { color: "var(--ink-3)" },
  bookHead: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", marginBottom: "18px" },
  calShell: {
    position: "relative",
    width: "100%",
    minHeight: "620px",
    borderRadius: "var(--r-inner)",
    overflow: "hidden",
    background: "var(--surface-2)",
  },
  calMount: { width: "100%", height: "620px", overflow: "auto" },
  loader: {
    position: "absolute", inset: 0,
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    gap: "18px",
    background: "var(--surface-2)",
    transition: "opacity 420ms var(--ease)",
    pointerEvents: "none",
  },
};

/* Inline cal.com embed — namespaced "30min" booking, with a loading state. */
function CalEmbed() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal; let ar = arguments;
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1]; api.q = api.q || [];
          if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); }
          else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "30min", { origin: "https://app.cal.com" });

    window.Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "amezen.artworks/30min",
    });

    window.Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });

    // Reveal once the embed iframe has mounted into our container.
    const mount = document.getElementById("my-cal-inline-30min");
    let done = false;
    const finish = () => { if (!done) { done = true; setReady(true); } };
    const obs = new MutationObserver(() => { if (mount && mount.querySelector("iframe")) finish(); });
    if (mount) obs.observe(mount, { childList: true, subtree: true });
    const fallback = setTimeout(finish, 6000); // never strand the loader
    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, []);

  return (
    <div style={contactStyles.calShell}>
      <div id="my-cal-inline-30min" style={contactStyles.calMount}></div>
      <div style={{ ...contactStyles.loader, opacity: ready ? 0 : 1 }} aria-hidden="true">
        <span className="cal-spinner"></span>
        <span className="t-micro" style={{ color: "var(--ink-3)", letterSpacing: "0.08em" }}>
          Loading calendar…
        </span>
      </div>
    </div>
  );
}

function ContactPanel({ lang }) {
  const C = CONTENT.contact;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--gap)" }}>
      <Tile hoverEdge={false} style={contactStyles.head}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
          <Glyph name="burst" size={14} color="var(--ink-3)" />
          <MonoTag>Contact · Bali ↔ worldwide · 2026</MonoTag>
        </div>
        <h1 className="t-display" style={{ margin: 0, maxWidth: "18ch" }}>{C.headline[lang]}</h1>
        <p className="t-body" style={{ marginTop: "14px", maxWidth: "42ch" }}>{C.sub[lang]}</p>
      </Tile>

      {/* Prominent booking tile with embedded cal.com scheduler */}
      <Tile hoverEdge={false} style={contactStyles.head}>
        <div style={contactStyles.bookHead}>
          <div>
            <span className="t-micro" style={contactStyles.kicker}>Booking</span>
            <h2 className="t-h1" style={{ margin: "6px 0 0" }}>{C.booking.label[lang]}</h2>
          </div>
          <CTAButton href={C.booking.href}>
            {lang === "DE" ? "In neuem Tab öffnen" : "Open in new tab"}
          </CTAButton>
        </div>
        <CalEmbed />
      </Tile>
    </div>
  );
}

Object.assign(window, { ContactPanel, CalEmbed });
