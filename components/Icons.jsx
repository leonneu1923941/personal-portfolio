/* ============================================================
   ICONS & BRAND MARK
   Thin-stroke functional glyphs + the Amezen geometric mark.
   ============================================================ */

// Amezen mark — two opposing arcs forming a soft bowtie.
function BrandMark({ size = 26, color = "var(--ink)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-label="Amezen Artworks">
      <path d="M16 16 C 9 6, 3 6, 3 16 C 3 26, 9 26, 16 16 Z" fill={color} />
      <path d="M16 16 C 23 6, 29 6, 29 16 C 29 26, 23 26, 16 16 Z" fill={color} />
    </svg>
  );
}

// ⊕ / ⊖ nav glyphs — thin circle + sign.
function SignIcon({ open = false, size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <line x1="7.5" y1="12" x2="16.5" y2="12" />
      {!open && <line x1="12" y1="7.5" x2="12" y2="16.5" />}
    </svg>
  );
}

function ArrowRight({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="18" y2="12" />
      <polyline points="12 6 18 12 12 18" />
    </svg>
  );
}

Object.assign(window, { BrandMark, SignIcon, ArrowRight });
