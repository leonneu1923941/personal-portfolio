/* ============================================================
   MICRO-GRAPHICS — thin-stroke technical marks.
   Monochrome, currentColor, hand-placed sparingly. Subjects are
   abstract/technical (spark, node, orbit, ruler) to echo the
   "experimental lab" reference without breaking the gallery calm.
   ============================================================ */
function Glyph({ name, size = 16, stroke = 1.3, color = "currentColor", style }) {
  const sv = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: color, strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round",
    style, "aria-hidden": true,
  };
  switch (name) {
    case "spark": // 4-ray asterisk
      return (
        <svg {...sv}>
          <line x1="12" y1="2.5" x2="12" y2="21.5" />
          <line x1="2.5" y1="12" x2="21.5" y2="12" />
          <line x1="5.4" y1="5.4" x2="18.6" y2="18.6" />
          <line x1="18.6" y1="5.4" x2="5.4" y2="18.6" />
        </svg>
      );
    case "node": // ring + center dot
      return (
        <svg {...sv}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="1.4" fill={color} stroke="none" />
        </svg>
      );
    case "orbit": // ring with a dot riding the edge
      return (
        <svg {...sv}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="20" cy="12" r="1.8" fill={color} stroke="none" />
        </svg>
      );
    case "burst": // asymmetric radial rays
      return (
        <svg {...sv}>
          <line x1="12" y1="12" x2="12" y2="2.5" />
          <line x1="12" y1="12" x2="21" y2="9" />
          <line x1="12" y1="12" x2="20" y2="17" />
          <line x1="12" y1="12" x2="13" y2="21.5" />
          <line x1="12" y1="12" x2="3.5" y2="16" />
          <line x1="12" y1="12" x2="4" y2="8" />
        </svg>
      );
    case "waypoint": // diamond + center
      return (
        <svg {...sv}>
          <path d="M12 2.5 L21.5 12 L12 21.5 L2.5 12 Z" />
          <circle cx="12" cy="12" r="1.3" fill={color} stroke="none" />
        </svg>
      );
    case "ring2": // two concentric
      return (
        <svg {...sv}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case "plus":
      return (
        <svg {...sv}>
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="4" y1="12" x2="20" y2="12" />
        </svg>
      );
    default:
      return null;
  }
}

/* A short horizontal "ruler" of ticks — a quiet divider mark. */
function RulerTicks({ ticks = 13, width = 120, color = "var(--ink-3)", style }) {
  const w = 240, step = w / (ticks - 1);
  return (
    <svg width={width} height="10" viewBox={`0 0 ${w} 20`} fill="none"
         stroke={color} strokeWidth="1.4" strokeLinecap="round" aria-hidden="true" style={style}>
      {Array.from({ length: ticks }).map((_, i) => {
        const x = i * step;
        const tall = i % 4 === 0;
        return <line key={i} x1={x} y1={tall ? 2 : 8} x2={x} y2="18" />;
      })}
    </svg>
  );
}

/* Mono technical micro-label, e.g. PROJECT FILE · NO.001 — 2025 */
function MonoTag({ children, style }) {
  return (
    <span style={{
      font: "600 11px/1.3 var(--font-mono)",
      letterSpacing: "0.14em", textTransform: "uppercase",
      fontVariantNumeric: "tabular-nums", color: "var(--ink-3)",
      ...style,
    }}>{children}</span>
  );
}

Object.assign(window, { Glyph, RulerTicks, MonoTag });
