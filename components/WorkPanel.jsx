/* ============================================================
   WORK PANEL  — case-study cards (horizontal: thumb left, copy right)
   + NDA note tile with the one neon-blue CTA
   ============================================================ */
const TONE_BG = {
  moody: "#161616",
  earthy: "#A9774B",
  portrait: "#6E7B83",
  architectural: "#D7DBDC",
};

const workStyles = {
  card: { display: "flex", gap: "18px", padding: "12px", alignItems: "stretch" },
  thumbWrap: {
    flexShrink: 0,
    width: "clamp(112px, 32%, 188px)",
    alignSelf: "stretch",
    borderRadius: "var(--r-inner)",
    overflow: "hidden",
  },
  body: {
    flex: 1, minWidth: 0,
    display: "flex", flexDirection: "column",
    padding: "10px 16px 10px 2px",
  },
  viewLink: { color: "var(--accent)", marginTop: "12px", fontWeight: 600 },
  titleRow: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" },
  tags: { display: "flex", flexWrap: "wrap", gap: "6px", margin: "10px 0 12px" },
  desc: { color: "var(--ink-2)", margin: 0 },
  noteTile: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    gap: "20px", padding: "22px 24px", flexWrap: "wrap",
  },
};

function CaseCard({ data, lang, no }) {
  return (
    <a href={`cases/case.html?id=${encodeURIComponent(data.id)}`} style={{ textDecoration: "none", display: "block" }}>
      <Tile style={workStyles.card}>
        <div style={{ ...workStyles.thumbWrap, background: TONE_BG[data.tone] || "var(--surface-2)" }}>
          <image-slot
            id={`work-${data.id}`}
            shape="rounded"
            radius="16"
            fit="cover"
            placeholder={`Drop ${data.title} cover`}
            src={CONTENT.images && CONTENT.images[`work-${data.id}`] || ""}
            style={{ width: "100%", height: "100%", minHeight: "150px", display: "block" }}
          ></image-slot>
        </div>
        <div style={workStyles.body}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <Glyph name="waypoint" size={12} color="var(--ink-3)" />
            <MonoTag>Project no.{no}</MonoTag>
          </div>
          <div style={workStyles.titleRow}>
            <span className="t-h2">{data.title}</span>
            <span className="t-micro" style={{ flexShrink: 0 }}>{data.year}</span>
          </div>
          <div style={workStyles.tags}>
            {data.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
          <p className="t-body" style={workStyles.desc}>{data.desc[lang]}</p>
          <span className="t-small" style={workStyles.viewLink}>{CONTENT.ui.viewCase[lang]} →</span>
        </div>
      </Tile>
    </a>
  );
}

function WorkPanel({ lang, setTab }) {
  const W = CONTENT.work;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--gap)" }}>
      {W.cases.map((c, i) => <CaseCard key={c.id} data={c} lang={lang} no={String(i + 1).padStart(3, "0")} />)}

      <Tile hoverEdge={false} style={workStyles.noteTile}>
        <p className="t-body" style={{ color: "var(--ink-2)", maxWidth: "46ch", margin: 0 }}>
          {W.note[lang]}
        </p>
        <CTAButton href={CONTENT.contact.booking.href}>{W.cta[lang]}</CTAButton>
      </Tile>
    </div>
  );
}

Object.assign(window, { WorkPanel, CaseCard });
