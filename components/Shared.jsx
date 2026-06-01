/* ============================================================
   SHARED PRIMITIVES — Tile, Clock, LangToggle, LogoStrip
   ============================================================ */

// --- Bento tile: flat white, hard 1px-black border on hover ----
function Tile({ children, style, hoverEdge = true, onClick, as = "div" }) {
  const [hover, setHover] = React.useState(false);
  const El = as;
  const base = {
    background: "var(--surface)",
    borderRadius: "var(--r-tile)",
    border: "1px solid transparent",          // reserve space → no layout shift
    transition: "border-color var(--dur-fast) var(--ease)",
    boxSizing: "border-box",
    ...(onClick ? { cursor: "pointer" } : {}),
    ...style,
  };
  const skin = hover && hoverEdge ? { borderColor: "var(--ink)" } : null;
  return (
    <El style={{ ...base, ...skin }} onClick={onClick}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
    </El>
  );
}

// --- Live clock HH:MM:SS, tabular figures ----------------------
function Clock() {
  const [t, setT] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const p = (n) => String(n).padStart(2, "0");
  return (
    <span className="t-clock">
      {p(t.getHours())}:{p(t.getMinutes())}:{p(t.getSeconds())}
    </span>
  );
}

// --- EN / DE language toggle -----------------------------------
function LangToggle({ lang, setLang }) {
  const item = (code) => ({
    border: "none", background: "transparent", cursor: "pointer", padding: 0,
    font: "600 var(--t-small)/1 var(--font-sans)",
    color: lang === code ? "var(--ink)" : "var(--ink-3)",
    textDecoration: lang === code ? "underline" : "none",
    textUnderlineOffset: "3px", textDecorationThickness: "1.5px",
  });
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button style={item("EN")} onClick={() => setLang("EN")}>EN</button>
      <button style={item("DE")} onClick={() => setLang("DE")}>DE</button>
    </div>
  );
}

// --- Client logo strip: seamless horizontal marquee ------------
function LogoStrip() {
  const logos = CONTENT.info.clientLogos;
  const row = [...logos, ...logos]; // duplicate for seamless loop
  return (
    <Tile hoverEdge={false} style={{ overflow: "hidden", padding: "0" }}>
      <div className="logo-marquee">
        <div className="logo-track">
          {row.map((logo, i) => (
            <span className="logo-cell" key={i}>
              <img className="logo-img" src={logo.src} alt={logo.name}
                   loading="lazy" draggable="false" />
            </span>
          ))}
        </div>
      </div>
    </Tile>
  );
}

// --- Mobile breakpoint hook ------------------------------------
function useIsMobile(breakpoint = 540) {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < breakpoint);
  React.useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, [breakpoint]);
  return isMobile;
}

Object.assign(window, { Tile, Clock, LangToggle, LogoStrip, useIsMobile });
