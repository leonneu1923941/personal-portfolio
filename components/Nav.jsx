/* ============================================================
   NAV — top bento pill bar
   Brand mark (left) + three nav pills. Active = neon-blue fill + ⊖,
   inactive = ghost + ⊕. 200ms fill on activation.
   ============================================================ */
const navStyles = {
  bar: {
    display: "flex", alignItems: "center", gap: "var(--s-3)",
    background: "var(--surface)", borderRadius: "var(--r-pill)",
    padding: "10px 12px 10px 18px",
  },
  markBtn: {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: 34, height: 34, border: "none", background: "transparent",
    cursor: "pointer", padding: 0, flexShrink: 0,
  },
  pills: { display: "flex", alignItems: "center", gap: "var(--s-2)", marginLeft: "auto" },
};

function NavPill({ id, label, active, onClick, compact }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: compact ? "5px" : "8px",
    border: "none", cursor: "pointer", borderRadius: "var(--r-pill)",
    padding: compact ? "8px 10px" : "10px 16px",
    font: `600 ${compact ? "12px" : "var(--t-small)"}/1 var(--font-sans)`,
    transition: "background-color var(--dur) var(--ease), color var(--dur) var(--ease)",
    WebkitTapHighlightColor: "transparent",
    whiteSpace: "nowrap",
  };
  const skin = active
    ? { backgroundColor: "var(--accent)", color: "var(--accent-ink)" }
    : { backgroundColor: "var(--surface-2)", color: "var(--ink)" };
  return (
    <button style={{ ...base, ...skin }} onClick={onClick} aria-pressed={active}>
      <span>{label}</span>
      <SignIcon open={active} size={compact ? 14 : 18} color="currentColor" />
    </button>
  );
}

function Nav({ tab, setTab, lang }) {
  const isMobile = useIsMobile();
  const L = CONTENT.nav[lang];
  const items = [
    { id: "info", label: L.info },
    { id: "work", label: L.work },
    { id: "contact", label: L.contact },
  ];
  return (
    <nav style={{ ...navStyles.bar, padding: isMobile ? "8px 8px 8px 12px" : "10px 12px 10px 18px" }}>
      <button style={navStyles.markBtn} onClick={() => setTab("info")} aria-label="Home">
        <BrandMark size={24} />
      </button>
      <div style={{ ...navStyles.pills, gap: isMobile ? "4px" : "var(--s-2)" }}>
        {items.map((it) => (
          <NavPill key={it.id} id={it.id} label={it.label} compact={isMobile}
                   active={tab === it.id} onClick={() => setTab(it.id)} />
        ))}
      </div>
    </nav>
  );
}

Object.assign(window, { Nav, NavPill });
