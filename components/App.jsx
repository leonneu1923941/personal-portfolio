/* ============================================================
   APP — state, nav, panel swap, Tweaks
   ============================================================ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#2D6BFF",
  "corners": "rounded",
  "marqueeSpeed": 26
}/*EDITMODE-END*/;

// corner presets → [tile, inner, chip]
const CORNER_PRESETS = {
  rounded: ["24px", "16px", "12px"],
  soft:    ["14px", "10px", "8px"],
  sharp:   ["4px", "3px", "3px"],
};

function App() {
  const [tab, setTab] = React.useState(() => localStorage.getItem("aa_tab") || "info");
  const [lang, setLang] = React.useState(() => localStorage.getItem("aa_lang") || "EN");
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { localStorage.setItem("aa_tab", tab); }, [tab]);
  React.useEffect(() => { localStorage.setItem("aa_lang", lang); }, [lang]);

  // apply visual tweaks to the document tokens
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", t.accent);
    const [tile, inner, chip] = CORNER_PRESETS[t.corners] || CORNER_PRESETS.rounded;
    root.style.setProperty("--r-tile", tile);
    root.style.setProperty("--r-inner", inner);
    root.style.setProperty("--r-chip", chip);
    root.style.setProperty("--marquee-dur", t.marqueeSpeed + "s");
  }, [t.accent, t.corners, t.marqueeSpeed]);

  let panel;
  if (tab === "info") panel = <InfoPanel lang={lang} setLang={setLang} setTab={setTab} />;
  else if (tab === "work") panel = <WorkPanel lang={lang} setTab={setTab} />;
  else panel = <ContactPanel lang={lang} />;

  return (
    <div className="shell">
      <Nav tab={tab} setTab={setTab} lang={lang} />
      <main key={tab} className="panel-swap">
        {panel}
      </main>

      <Footer lang={lang} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent" />
        <TweakColor
          label="Hot accent"
          value={t.accent}
          options={["#2D6BFF", "#FF2D9B", "#19A36B", "#7A5AE0", "#FF6A2C"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label="Form" />
        <TweakRadio
          label="Corners"
          value={t.corners}
          options={["rounded", "soft", "sharp"]}
          onChange={(v) => setTweak("corners", v)}
        />
        <TweakSection label="Motion" />
        <TweakSlider
          label="Logo strip"
          value={t.marqueeSpeed}
          min={10} max={60} step={1} unit="s"
          onChange={(v) => setTweak("marqueeSpeed", v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
