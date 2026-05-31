/* ============================================================
   CASE STUDY — long-form detail page renderer.
   Reads window.CASES[window.CASE_ID]. Bento-tile aesthetic,
   matching the portfolio SPA.
   ============================================================ */
const TONE_BG_CS = {
  moody: "#161616", earthy: "#A9774B", portrait: "#6E7B83", architectural: "#D7DBDC",
};

const csStyles = {
  shell: {
    width: "100%", maxWidth: "720px", margin: "0 auto",
    padding: "16px 16px 64px", display: "flex", flexDirection: "column", gap: "var(--gap)",
  },
  navBar: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    background: "var(--surface)", borderRadius: "var(--r-pill)", padding: "10px 18px 10px 16px",
  },
  back: {
    display: "inline-flex", alignItems: "center", gap: "8px",
    border: "none", background: "transparent", cursor: "pointer", padding: 0,
    font: "600 var(--t-small)/1 var(--font-sans)", color: "var(--ink)",
    textDecoration: "none",
  },
  hero: { padding: "28px 28px 12px" },
  tags: { display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" },
  tagline: { color: "var(--ink-2)", marginTop: "14px", maxWidth: "34ch" },
  coverWrap: {
    marginTop: "24px", borderRadius: "var(--r-inner)", overflow: "hidden",
  },
  metaGrid: {
    padding: "24px 28px", display: "grid",
    gridTemplateColumns: "1fr 1fr", gap: "20px 24px",
  },
  metaLabel: { color: "var(--ink-3)", marginBottom: "8px", display: "block" },
  serviceList: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "6px" },
  section: { padding: "28px" },
  eyebrow: { display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "16px" },
  eyebrowNum: { color: "var(--accent)", font: "700 var(--t-small)/1 var(--font-sans)", fontVariantNumeric: "tabular-nums" },
  para: { color: "var(--ink-2)", margin: 0, maxWidth: "60ch" },
  bullets: { listStyle: "none", margin: "0", padding: 0, display: "flex", flexDirection: "column", gap: "12px" },
  bulletRow: { display: "flex", gap: "14px", alignItems: "flex-start" },
  dash: { flexShrink: 0, width: "16px", height: "2px", background: "var(--ink-3)", marginTop: "11px", borderRadius: "2px" },
  approachGroup: { paddingTop: "22px", marginTop: "22px", borderTop: "1px solid var(--line)" },
  galleryGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--gap)" },
  cta: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    gap: "20px", padding: "26px 28px", flexWrap: "wrap",
  },
  footer: { padding: "16px 24px", display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" },
};

function BackArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="6" y2="12" />
      <polyline points="12 6 6 12 12 18" />
    </svg>
  );
}

function Eyebrow({ num, label, glyph = "waypoint" }) {
  return (
    <div style={csStyles.eyebrow}>
      <Glyph name={glyph} size={14} color="var(--ink-3)" />
      <span style={csStyles.eyebrowNum}>{num}</span>
      <span className="t-h2">{label}</span>
    </div>
  );
}

function Bullets({ items }) {
  return (
    <ul style={csStyles.bullets}>
      {items.map((it, i) => (
        <li style={csStyles.bulletRow} key={i}>
          <span style={csStyles.dash}></span>
          <span className="t-body" style={{ color: "var(--ink-2)" }}>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function caseHref(id) {
  return `case.html?id=${encodeURIComponent(id)}`;
}

function CaseStudy({ c }) {
  // Set page <title> dynamically
  React.useEffect(() => {
    document.title = `${c.title} — Leon Neuhäuser`;
  }, [c.title]);

  const cover = TONE_BG_CS[c.tone] || "var(--surface-2)";
  const ids = Object.keys(CASES);
  const idx = ids.indexOf(c.id);
  const next = CASES[ids[(idx + 1) % ids.length]];
  const no = String(idx + 1).padStart(3, "0");

  return (
    <div style={csStyles.shell}>
      {/* nav */}
      <nav style={csStyles.navBar}>
        <a style={csStyles.back} href={window.PORTFOLIO_HREF}>
          <BackArrow /> <span>Work</span>
        </a>
        <a style={{ ...csStyles.back }} href={window.PORTFOLIO_HREF}>
          <BrandMark size={22} />
        </a>
      </nav>

      {/* hero */}
      <Tile hoverEdge={false} style={csStyles.hero}>
        <div style={csStyles.tags}>
          {c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
        <h1 className="t-display" style={{ margin: 0, fontSize: "40px", lineHeight: 1.1, maxWidth: "18ch" }}>{c.title}</h1>
        <p className="t-body" style={csStyles.tagline}>{c.tagline}</p>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "20px" }}>
          <Glyph name="spark" size={13} color="var(--ink-3)" />
          <MonoTag>{`Project file · No.${no} — ${c.year}`}</MonoTag>
          <RulerTicks width={110} style={{ marginLeft: "auto" }} />
        </div>
        <div style={{ ...csStyles.coverWrap, background: cover }}>
          <image-slot
            id={`${c.id}-cover`} shape="rounded" radius="16" fit="cover"
            placeholder={`Drop ${c.title} hero image`}
            style={{ width: "100%", aspectRatio: c.coverRatio || "16 / 9", height: "auto", display: "block" }}
          ></image-slot>
        </div>
      </Tile>

      {/* meta */}
      <Tile hoverEdge={false} style={csStyles.metaGrid}>
        <div>
          <span className="t-micro" style={csStyles.metaLabel}>Client</span>
          <span className="t-small">{c.client}</span>
        </div>
        <div>
          <span className="t-micro" style={csStyles.metaLabel}>Year</span>
          <span className="t-small">{c.year}</span>
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <span className="t-micro" style={csStyles.metaLabel}>Services</span>
          <ul style={csStyles.serviceList}>
            {c.services.map((s) => <li className="t-small" key={s} style={{ fontWeight: 500 }}>{s}</li>)}
          </ul>
        </div>
      </Tile>

      {/* background */}
      <Tile hoverEdge={false} style={csStyles.section}>
        <Eyebrow num="01" label="Background" />
        <p className="t-body" style={csStyles.para}>{c.background}</p>
      </Tile>

      {/* challenge */}
      <Tile hoverEdge={false} style={csStyles.section}>
        <Eyebrow num="02" label="Challenge" />
        <p className="t-body" style={{ ...csStyles.para, marginBottom: "22px" }}>{c.challenge.intro}</p>
        <Bullets items={c.challenge.items} />
      </Tile>

      {/* approach */}
      <Tile hoverEdge={false} style={csStyles.section}>
        <Eyebrow num="03" label="Approach & process" />
        {c.approach.map((g, i) => (
          <div key={i} style={i === 0 ? null : csStyles.approachGroup}>
            <p className="t-small" style={{ margin: "0 0 14px" }}>{g.group}</p>
            <Bullets items={g.items} />
          </div>
        ))}
      </Tile>

      {/* gallery */}
      <div style={csStyles.galleryGrid}>
        {[1, 2].map((n) => (
          <Tile hoverEdge={false} key={n} style={{ overflow: "hidden", padding: "10px" }}>
            <div style={{ background: cover, borderRadius: "var(--r-inner)", overflow: "hidden" }}>
              <image-slot
                id={`${c.id}-gallery-${n}`} shape="rounded" radius="16" fit="cover"
                placeholder={`Drop image ${n}`}
                style={{ width: "100%", aspectRatio: c.galleryRatio || "4 / 5", height: "auto", display: "block" }}
              ></image-slot>
            </div>
          </Tile>
        ))}
      </div>

      {/* result */}
      <Tile hoverEdge={false} style={csStyles.section}>
        <Eyebrow num="04" label="Result" />
        <p className="t-body" style={{ ...csStyles.para, marginBottom: "24px" }}>{c.result.intro}</p>
        <p className="t-micro" style={{ color: "var(--ink-3)", margin: "0 0 16px" }}>Key outcomes</p>
        <Bullets items={c.result.outcomes} />
        <p className="t-body" style={{ ...csStyles.para, marginTop: "24px", color: "var(--ink)" }}>{c.result.closing}</p>
      </Tile>

      {/* next + cta */}
      <Tile style={csStyles.cta}>
        <div>
          <span className="t-micro" style={{ color: "var(--ink-3)" }}>Next project</span>
          <a href={caseHref(next.id)} className="t-h2" style={{ display: "block", color: "var(--ink)", textDecoration: "none", marginTop: "6px" }}>
            {next.title} →
          </a>
        </div>
        <CTAButton href={CONTENT.contact.booking.href}>Book a Call</CTAButton>
      </Tile>

      <Footer back={window.PORTFOLIO_HREF} />
    </div>
  );
}

const _case = CASES[window.CASE_ID];
ReactDOM.createRoot(document.getElementById("root")).render(
  _case ? <CaseStudy c={_case} /> : <div style={{ padding: 40 }}>Case not found.</div>
);
