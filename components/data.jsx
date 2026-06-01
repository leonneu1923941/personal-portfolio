/* ============================================================
   DATA — single source of truth, loaded from CMS storage.
   Priority: localStorage (CMS edits) → content.json → hardcoded defaults
   ============================================================ */

(function () {
  const STORAGE_KEY = 'leon_portfolio_content';
  const CASES_KEY   = 'leon_portfolio_cases';

  /* ---------- hardcoded fallback (mirrors content.json) ---------- */
  const DEFAULT_CONTENT = {
    brand: { handle: "@leon", domain: "amezen-artworks.com" },
    nav: {
      EN: { info: "Info", work: "Work", contact: "Contact" },
      DE: { info: "Info", work: "Arbeit", contact: "Kontakt" },
    },
    info: {
      bio: {
        EN: "A Berlin-born, world-roaming Senior Art Director & Brand Designer with 9+ years of experience. I craft strategic identities, editorial visuals and digital experiences for brands that want to feel as good as they look.",
        DE: "Ein in Berlin geborener, weltreisender Senior Art Director & Brand Designer mit über 9 Jahren Erfahrung. Ich gestalte strategische Identitäten, editoriale Visuals und digitale Erlebnisse für Marken, die sich so gut anfühlen wollen, wie sie aussehen.",
      },
      skills: ["Brand Identity", "Web Design", "Art Direction", "Brand Strategy", "Coaching", "Webflow", "Adobe CC"],
      clients: ["Ottokar", "Maitiri Kakao", "Joe Trenk", "Caretable", "neuweiss", "Oakstone Hills"],
      clientLogos: [
        { name: "Maitiri Kakao", src: "https://cdn.prod.website-files.com/6907c8b3016fe09d35b2c028/69204b4a338d8b59f4724296_Maitiri.svg" },
        { name: "Ottokar",       src: "https://cdn.prod.website-files.com/6907c8b3016fe09d35b2c028/690fcc5580636dddc01f62c2_Ottokar_Logo.svg" },
        { name: "Coco",          src: "https://cdn.prod.website-files.com/6907c8b3016fe09d35b2c028/690fcc55464ab03718fc55b5_Coco_Logo.svg" },
        { name: "Joe Trenk",     src: "https://cdn.prod.website-files.com/6907c8b3016fe09d35b2c028/691258c468928df48c5617c8_Joe-Trenk-fullname_vector.svg" },
        { name: "Caretable",     src: "https://cdn.prod.website-files.com/6907c8b3016fe09d35b2c028/690fcd715e4ecda9ee76fb6e_Caretable_Logo.svg" },
        { name: "neuweiss",      src: "https://cdn.prod.website-files.com/6907c8b3016fe09d35b2c028/691f810fc31be0cf8f322949_neuweiss.svg" },
      ],
      featured: ["oakstone", "maitiri"],
      testimonials: [
        {
          name: "Clara Mendes", role: "Founder, Oakstone Hills",
          quote: {
            EN: "Leon understood our brand before we could explain it. The site feels exactly like the place does in person.",
            DE: "Leon hat unsere Marke verstanden, bevor wir sie erklären konnten. Die Seite fühlt sich genau so an wie der Ort selbst.",
          },
        },
        {
          name: "Anika Roth", role: "Maitiri Kakao",
          quote: {
            EN: "Calm, clear and genuinely fun to work with. Our feed finally looks the way the cacao tastes.",
            DE: "Ruhig, klar und wirklich schön in der Zusammenarbeit. Unser Feed sieht endlich so aus, wie der Kakao schmeckt.",
          },
        },
        {
          name: "Joe Trenk", role: "Leben Lehrt",
          quote: {
            EN: "He built my website twice without ever making me feel like a problem. Rare, and very Leon.",
            DE: "Er hat meine Website zweimal gebaut, ohne mir je das Gefühl zu geben, ein Problem zu sein. Selten, und sehr Leon.",
          },
        },
      ],
    },
    work: {
      cases: [
        { id: "oakstone", title: "Oakstone Hills", year: "2025", tags: ["Brand Identity", "Web Design"], desc: { EN: "Complete brand system and Webflow site for a premium real estate developer.", DE: "Komplettes Markensystem und Webflow-Website für einen Premium-Immobilienentwickler." }, tone: "moody" },
        { id: "maitiri",  title: "Maitiri Kakao",  year: "2024", tags: ["Social Media", "Graphic Design"], desc: { EN: "Two months of social media management, content creation and brand graphics for a ceremonial cacao brand.", DE: "Zwei Monate Social-Media-Management, Content-Produktion und Markengrafik für eine zeremonielle Kakao-Marke." }, tone: "earthy" },
        { id: "joetrenk", title: "Joe Trenk / Leben Lehrt", year: "2023", tags: ["Web Design", "Brand"], desc: { EN: "Website design and development for a German life coach — built twice, loved both times.", DE: "Webdesign und Entwicklung für einen deutschen Life-Coach — zweimal gebaut, beide Male geliebt." }, tone: "portrait" },
        { id: "neuweiss", title: "neuweiss", year: "2024", tags: ["Brand Identity"], desc: { EN: "Visual identity system for a modern interior and real estate brand.", DE: "Visuelles Identitätssystem für eine moderne Interior- und Immobilienmarke." }, tone: "architectural" },
      ],
      note: { EN: "Most of my work is under NDA. If you'd like to see more — let's talk.", DE: "Der Großteil meiner Arbeit unterliegt einer NDA. Wenn du mehr sehen möchtest — lass uns reden." },
      cta:  { EN: "Book a Call", DE: "Termin buchen" },
    },
    contact: {
      headline: { EN: "Let's create something real.", DE: "Lass uns etwas Echtes erschaffen." },
      sub: { EN: "Whether it's a brand, a website or a conversation — I'm just a message away.", DE: "Ob Marke, Website oder Gespräch — ich bin nur eine Nachricht entfernt." },
      email: "amezen.artworks@gmail.com",
      booking: { label: { EN: "Book a free call", DE: "Kostenloses Gespräch buchen" }, href: "https://cal.com/amezen.artworks", display: "cal.com/amezen.artworks" },
      location: { EN: "Currently based in Bali, Indonesia — working globally", DE: "Derzeit auf Bali, Indonesien — weltweit tätig" },
      socials: [
        { label: "Instagram", handle: "@leonslifelearnings", href: "https://instagram.com/leonslifelearnings" },
        { label: "LinkedIn",  handle: "Leon", href: "#" },
      ],
    },
    ui: {
      selectedWork: { EN: "Selected work", DE: "Ausgewählte Arbeiten" },
      seeAll:       { EN: "See all work",   DE: "Alle Arbeiten" },
      kindWords:    { EN: "Kind words",     DE: "Schöne Worte" },
      viewCase:     { EN: "View case study", DE: "Case Study ansehen" },
    },
    footer: {
      tagline:   { EN: "Let's keep in touch", DE: "Bleiben wir in Kontakt" },
      instagram: { label: "Instagram", handle: "@leonslifelearnings", href: "https://instagram.com/leonslifelearnings" },
      email:     { label: "Email", value: "amezen.artworks@gmail.com" },
      rights:    { EN: "All rights reserved", DE: "Alle Rechte vorbehalten" },
      brand:     "Âmezen Artworks",
    },
    images: {},
  };

  /* ---------- load from localStorage → content.json → hardcoded defaults ---------- */

  function fetchContentJson() {
    try {
      // Relative path so it works under any host subdirectory (e.g. GitHub Pages /personal-portfolio/)
      const inCases = location.pathname.includes('/cases/');
      const jsonPath = inCases ? '../content.json' : 'content.json';
      const xhr = new XMLHttpRequest();
      xhr.open('GET', jsonPath, false); // synchronous
      xhr.send();
      if (xhr.status === 200) return JSON.parse(xhr.responseText);
    } catch (e) {}
    return null;
  }

  function loadContent() {
    const serverData = fetchContentJson();

    // localStorage has priority for text content (CMS edits)
    let result = DEFAULT_CONTENT;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) result = JSON.parse(raw);
      else if (serverData) result = serverData;
    } catch (e) {
      if (serverData) result = serverData;
    }

    // Always use images from content.json — localStorage never stores these.
    // Prefix with '../' on /cases/ pages so relative paths resolve back to the
    // project root regardless of host subdirectory (e.g. GitHub Pages).
    if (serverData && serverData.images && Object.keys(serverData.images).length > 0) {
      const inCases = location.pathname.includes('/cases/');
      if (inCases) {
        const prefixed = {};
        for (const [k, v] of Object.entries(serverData.images)) {
          prefixed[k] = (typeof v === 'string' && !v.startsWith('http') && !v.startsWith('/') && !v.startsWith('../'))
            ? '../' + v : v;
        }
        result.images = prefixed;
      } else {
        result.images = serverData.images;
      }
    }

    return result;
  }

  const CONTENT = loadContent();
  window.CONTENT = CONTENT;
  window.CONTENT_DEFAULTS = DEFAULT_CONTENT;
  window.CMS_STORAGE_KEY  = STORAGE_KEY;
  window.CMS_CASES_KEY    = CASES_KEY;
})();
