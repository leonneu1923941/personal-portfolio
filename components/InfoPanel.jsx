/* ============================================================
   INFO PANEL  (default / home)
   profile + bio + skills · client logos · featured work · testimonials
   ============================================================ */
const TONE_BG_INFO = {
  moody: "#161616", earthy: "#A9774B", portrait: "#6E7B83", architectural: "#D7DBDC",
};

const infoStyles = {
  topTile: { padding: "28px" },
  head: { display: "flex", gap: "24px", alignItems: "flex-start" },
  headRight: {
    flex: 1, minWidth: 0, display: "flex", justifyContent: "space-between",
    alignItems: "flex-start", paddingTop: "4px",
  },
  skills: { display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "28px" },
  sectionHead: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "8px 4px 0" },
  sectionHeadL: { display: "flex", alignItems: "center", gap: "10px" },
  statusRow: { display: "flex", alignItems: "center", gap: "9px", marginTop: "26px", paddingTop: "22px", borderTop: "1px solid var(--line)" },
  seeAll: { color: "var(--accent)", fontWeight: 600, textDecoration: "none", border: "none", background: "transparent", cursor: "pointer", font: "600 var(--t-small)/1 var(--font-sans)" },
  featCard: { display: "flex", gap: "16px", padding: "10px", alignItems: "stretch" },
  featThumb: { flexShrink: 0, width: "104px", alignSelf: "stretch", minHeight: "104px", borderRadius: "var(--r-inner)", overflow: "hidden" },
  featBody: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "6px 12px 6px 2px" },
  quoteTile: { padding: "24px 26px", display: "flex", flexDirection: "column", gap: "16px" },
  quoteMark: { font: "700 40px/0.6 var(--font-sans)", color: "var(--accent)", height: "20px" },
  attrib: { display: "flex", flexDirection: "column", gap: "2px", marginTop: "4px" },
};

function PhotoSlot() {
  return (
    <div style={{ width: "150px", height: "150px", flexShrink: 0, background: "var(--surface-2)", borderRadius: "16px", overflow: "hidden", padding: "6px", boxSizing: "border-box" }}>
      <image-slot
        id="leon-portrait"
        shape="rounded"
        radius="12"
        fit="contain"
        position="50% 0%"
        placeholder="Drop B&W portrait"
        style={{ width: "100%", height: "100%", display: "block" }}
      ></image-slot>
    </div>
  );
}

function FeaturedCard({ data, lang }) {
  return (
    <a href={`cases/case.html?id=${encodeURIComponent(data.id)}`} style={{ textDecoration: "none", display: "block" }}>
      <Tile style={infoStyles.featCard}>
        <div style={{ ...infoStyles.featThumb, background: TONE_BG_INFO[data.tone] || "var(--surface-2)" }}>
          <image-slot
            id={`feat-${data.id}`} shape="rounded" radius="16" fit="cover"
            placeholder={data.title}
            style={{ width: "100%", height: "100%", minHeight: "104px", display: "block" }}
          ></image-slot>
        </div>
        <div style={infoStyles.featBody}>
          <span className="t-h2" style={{ fontSize: "var(--t-body)" }}>{data.title}</span>
          <span className="t-micro" style={{ marginTop: "4px" }}>{data.tags.join(" · ")}</span>
          <span className="t-small" style={{ color: "var(--accent)", marginTop: "10px", fontWeight: 600 }}>
            {CONTENT.ui.viewCase[lang]} →
          </span>
        </div>
      </Tile>
    </a>
  );
}

function Testimonial({ data, lang }) {
  return (
    <Tile hoverEdge={false} style={infoStyles.quoteTile}>
      <span style={infoStyles.quoteMark}>&ldquo;</span>
      <p className="t-body" style={{ margin: 0, color: "var(--ink)" }}>{data.quote[lang]}</p>
      <div style={infoStyles.attrib}>
        <span className="t-small">{data.name}</span>
        <span className="t-micro">{data.role}</span>
      </div>
    </Tile>
  );
}

function InfoPanel({ lang, setLang, setTab }) {
  const I = CONTENT.info;
  const U = CONTENT.ui;
  const byId = (id) => CONTENT.work.cases.find((c) => c.id === id);
  const featured = I.featured.map(byId).filter(Boolean);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--gap)" }}>
      <Tile style={infoStyles.topTile} hoverEdge={false}>
        <div style={infoStyles.head}>
          <PhotoSlot />
          <div style={infoStyles.headRight}>
            <LangToggle lang={lang} setLang={setLang} />
            <Clock />
          </div>
        </div>

        <p className="t-display" style={{ marginTop: "32px", maxWidth: "30ch", textWrap: "pretty" }}>
          {I.bio[lang]}
        </p>

        <div style={infoStyles.skills}>
          {I.skills.map((s) => <span className="tag" key={s}>{s}</span>)}
        </div>

        <div style={infoStyles.statusRow}>
          <Glyph name="spark" size={13} color="var(--ink-3)" />
          <MonoTag>Available for projects · 2026</MonoTag>
        </div>
      </Tile>

      <LogoStrip />

      {/* featured work */}
      <div style={infoStyles.sectionHead}>
        <div style={infoStyles.sectionHeadL}>
          <Glyph name="waypoint" size={15} color="var(--ink-3)" />
          <span className="t-h2">{U.selectedWork[lang]}</span>
        </div>
        <button style={infoStyles.seeAll} onClick={() => setTab("work")}>{U.seeAll[lang]} →</button>
      </div>
      {featured.map((c) => <FeaturedCard key={c.id} data={c} lang={lang} />)}

      {/* testimonials */}
      <div style={infoStyles.sectionHead}>
        <div style={infoStyles.sectionHeadL}>
          <Glyph name="node" size={15} color="var(--ink-3)" />
          <span className="t-h2">{U.kindWords[lang]}</span>
        </div>
        <MonoTag>{String(I.testimonials.length).padStart(2, "0")}</MonoTag>
      </div>
      {I.testimonials.map((t, i) => <Testimonial key={i} data={t} lang={lang} />)}
    </div>
  );
}

Object.assign(window, { InfoPanel, PhotoSlot, FeaturedCard, Testimonial });
