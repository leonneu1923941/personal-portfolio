/* ============================================================
   FOOTER — global, appears under every panel + on case pages.
   Instagram + email, micro-graphic cluster, auto-updating year.
   ============================================================ */
const footerStyles = {
  tile: { padding: "28px" },
  head: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" },
  glyphCluster: { display: "flex", alignItems: "center", gap: "12px", color: "var(--ink-3)" },
  links: { display: "flex", flexWrap: "wrap", gap: "12px 56px", margin: "26px 0 4px" },
  linkBlock: { display: "flex", flexDirection: "column", gap: "8px" },
  bottom: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    gap: "16px", flexWrap: "wrap", marginTop: "22px",
  },
  bottomR: { display: "flex", alignItems: "center", gap: "9px" },
};

function FooterLink({ href, children }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
       style={{
         font: "600 var(--t-h2)/1.1 var(--font-sans)",
         letterSpacing: "-0.01em",
         color: h ? "var(--ink)" : "var(--ink-2)",
         textDecoration: h ? "underline" : "none",
         textDecorationColor: "var(--accent)",
         textDecorationThickness: "2px", textUnderlineOffset: "4px",
         transition: "color var(--dur) var(--ease)", wordBreak: "break-word",
       }}>{children}</a>
  );
}

function Footer({ lang = "EN", back }) {
  const F = CONTENT.footer;
  const year = new Date().getFullYear();
  return (
    <Tile hoverEdge={false} style={footerStyles.tile} as="footer">
      <div style={footerStyles.head}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Glyph name="spark" size={13} color="var(--ink-3)" />
          <MonoTag>{F.tagline[lang]}</MonoTag>
        </div>
        <div style={footerStyles.glyphCluster} aria-hidden="true">
          <Glyph name="node" size={16} />
          <Glyph name="waypoint" size={16} />
          <Glyph name="orbit" size={16} />
          <Glyph name="burst" size={16} />
        </div>
      </div>

      <div style={footerStyles.links}>
        <div style={footerStyles.linkBlock}>
          <MonoTag>{F.instagram.label}</MonoTag>
          <FooterLink href={F.instagram.href}>{F.instagram.handle}</FooterLink>
        </div>
        <div style={footerStyles.linkBlock}>
          <MonoTag>{F.email.label}</MonoTag>
          <FooterLink href={`mailto:${F.email.value}`}>{F.email.value}</FooterLink>
        </div>
      </div>

      <div style={{
        height: "12px", marginTop: "24px",
        backgroundImage: "repeating-linear-gradient(90deg, var(--line) 0 1.4px, transparent 1.4px 14px)",
        WebkitMaskImage: "linear-gradient(90deg, #000 0 92%, transparent)",
        maskImage: "linear-gradient(90deg, #000 0 92%, transparent)",
      }} aria-hidden="true"></div>

      <div style={footerStyles.bottom}>
        <MonoTag style={{ textTransform: "none", letterSpacing: "0.06em", textAlign: "center", width: "100%" }}>
          © {year} {F.brand} · {F.rights[lang]}
        </MonoTag>
        {back &&
          <a href={back} className="t-micro" style={{ ...footerStyles.bottomR, justifyContent: "center", width: "100%", color: "var(--ink-3)", textDecoration: "none" }}>
            <Glyph name="plus" size={11} color="var(--ink-3)" /> Back to portfolio
          </a>}
      </div>
    </Tile>
  );
}

Object.assign(window, { Footer, FooterLink });
