/* ============================================================
   CTA BUTTON — the one neon-blue micro-interaction
   Hover: darken. Press: subtle shrink.
   ============================================================ */
function CTAButton({ children, href = "#", onClick }) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const style = {
    display: "inline-flex", alignItems: "center", gap: "8px",
    padding: "13px 20px", borderRadius: "var(--r-pill)",
    background: h ? "#1A52E0" : "var(--accent)",
    color: "var(--accent-ink)", textDecoration: "none", border: "none",
    cursor: "pointer", font: "600 var(--t-small)/1 var(--font-sans)",
    transform: p ? "scale(0.97)" : "scale(1)",
    transition: "background var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease)",
    WebkitTapHighlightColor: "transparent",
  };
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
       rel="noreferrer" style={style} onClick={onClick}
       onMouseEnter={() => setH(true)} onMouseLeave={() => { setH(false); setP(false); }}
       onMouseDown={() => setP(true)} onMouseUp={() => setP(false)}>
      <span>{children}</span>
      <ArrowRight size={16} color="currentColor" />
    </a>
  );
}

Object.assign(window, { CTAButton });
