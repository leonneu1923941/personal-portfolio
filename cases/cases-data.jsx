/* ============================================================
   CASE STUDIES — loaded from CMS storage (localStorage),
   falls back to hardcoded defaults.
   ============================================================ */
(function () {
  const CASES_KEY = window.CMS_CASES_KEY || 'leon_portfolio_cases';

  const DEFAULT_CASES = {
    oakstone: {
      id: "oakstone", title: "Oakstone Hills",
      tagline: "Movement for body & mind — a retreat website experience.",
      year: "2025", client: "Oakstone Hills", tone: "moody",
      tags: ["Brand Identity", "Web Design"],
      services: ["Visual Art Direction", "Concept & Strategy", "Web Design", "Webflow Development", "Project Management"],
      background: "Oakstone Hills is an exclusive retreat destination in the hills of Portugal — a space for yoga, functional training and conscious regeneration, embedded in a nature immersion. The goal was to translate the essence of the place into a digital experience: warm, grounded and nature-driven, and at the same time premium, minimal and modern.",
      challenge: {
        intro: "The key challenge was capturing the emotional core of Oakstone Hills and turning it into a high-converting digital environment:",
        items: ["Translating the founder's vision into an authentic brand tone", "Creating a powerful storytelling and visual flow", "Choosing and implementing the ideal booking platform", "Aligning multiple creative disciplines — copy, photography, brand design", "Designing a smooth, intuitive booking process"],
      },
      approach: [
        { group: "Brand & positioning strategy", items: ["Market & trend research", "Competitor audit & benchmarking", "Customer personas & journey mapping"] },
        { group: "Content & structure strategy", items: ["Sitemap & conversion-focused wireframes", "Messaging guidance & brand tone refinement", "Clear and intuitive content flow", "Call-to-action placement & booking orientation"] },
        { group: "Visual art direction", items: ["Warm, nature-inspired palette", "Photography direction: bright, authentic, human-centered", "Organic shapes, calm spacing, refined typography", "Visual storytelling grounded in nature and movement"] },
        { group: "Web design & development", items: ["Custom Webflow build", "Smooth animations & micro-interactions", "Fully responsive mobile experience", "Accessible navigation & clear conversion paths"] },
        { group: "Booking system implementation", items: ["Evaluation & testing of multiple platforms", "Final integration of Bookinglayer", "UX planning for the booking flow", "Technical configuration & launch support"] },
      ],
      result: {
        intro: "A calm yet compelling digital brand experience that evokes trust, inspires action, and brings guests into the world of Oakstone Hills.",
        outcomes: ["A strong, cohesive brand identity", "High-quality visual presence aligned with the retreat experience", "Intuitive navigation and booking journey", "Increased visitor engagement & booking confidence", "Positive client & guest feedback post-launch"],
        closing: "The website connects nature, movement and stillness with a modern, premium digital touch — making retreat booking seamless, inviting and emotionally resonant.",
      },
    },
    maitiri: {
      id: "maitiri", title: "Maitiri Kakao",
      tagline: "Ceremonial cacao, shared with the world — a two-month social story.",
      year: "2024", client: "Maitiri Kakao", tone: "earthy",
      tags: ["Social Media", "Graphic Design"],
      services: ["Social Media Strategy", "Content Creation", "Brand Graphics", "Art Direction", "Community Management"],
      background: "Maitiri Kakao is a ceremonial cacao brand rooted in ritual, warmth and intention. They make a product people drink slowly — but their social presence felt rushed and inconsistent. They wanted a feed that carried the same calm, grounded warmth as the cacao itself, and a system they could keep running after I stepped away.",
      challenge: {
        intro: "The brief was less about a single launch and more about building a living, breathing voice on social — in just two months:",
        items: ["Finding a visual rhythm that felt ceremonial, not commercial", "Producing enough content to stay consistent without burning out", "Translating a slow, sensory product into scroll-stopping graphics", "Handing over a system the team could maintain themselves"],
      },
      approach: [
        { group: "Strategy & rhythm", items: ["Content pillars rooted in ritual, sourcing and community", "Posting cadence & weekly themes", "Tone of voice tuned to warmth over hype"] },
        { group: "Content creation", items: ["Recurring graphic templates for quotes and rituals", "Product and lifestyle art direction", "Short-form motion and carousels", "Caption writing in the brand voice"] },
        { group: "Brand graphics", items: ["Earthy palette and textured backgrounds", "Custom type treatments and marks", "A reusable asset kit for the team"] },
        { group: "Handover", items: ["Editable templates and usage notes", "A simple monthly content plan", "Light coaching on keeping the look consistent"] },
      ],
      result: {
        intro: "A social presence that finally looked the way the cacao tastes — warm, slow and intentional — and a system the team could run on their own.",
        outcomes: ["A consistent, recognisable visual language", "Higher engagement and saves across posts", "A reusable template kit handed to the team", "A calmer, more confident posting routine"],
        closing: "Two months of focused, hands-on work left Maitiri with more than nice graphics — it left them with a way of showing up that feels true to the ritual at the heart of the brand.",
      },
    },
    joetrenk: {
      id: "joetrenk", title: "Joe Trenk / Leben Lehrt",
      tagline: "A life coach's voice, online — built twice, loved both times.",
      year: "2023", client: "Joe Trenk · Leben Lehrt", tone: "portrait",
      tags: ["Web Design", "Brand"],
      services: ["Web Design", "Webflow Development", "Brand Refinement", "Copy Direction"],
      background: "Joe Trenk is a German life coach whose work is deeply personal — it lives in conversation, presence and trust. His website needed to carry that warmth before a single word was read, and to make booking a session feel like an easy, human next step rather than a transaction.",
      challenge: {
        intro: "Coaching is intimate, and a website can easily feel cold. The challenge was to keep it personal at every turn:",
        items: ["Putting Joe's personality and presence front and centre", "Making the offer clear without sounding like a sales page", "Guiding visitors gently toward booking a first conversation", "Building something flexible enough to grow with his practice"],
      },
      approach: [
        { group: "Brand refinement", items: ["Sharpening the positioning and voice", "A warmer, more human visual direction", "Photography direction centred on Joe"] },
        { group: "Structure & copy", items: ["A story-led page flow", "Copy direction that sounds like Joe, not a brochure", "Clear, low-pressure calls to action"] },
        { group: "Design & build", items: ["Custom Webflow build", "Responsive, calm layouts", "Subtle motion that supports the story"] },
        { group: "The second build", items: ["A full rework as the practice evolved", "Refined structure and updated visuals", "Carried over everything that worked the first time"] },
      ],
      result: {
        intro: "A website that feels like Joe — warm, grounded and direct — and turns quiet interest into booked conversations.",
        outcomes: ["A personal, trustworthy first impression", "A clear path from visitor to booked session", "A site we built twice, better each time", "A platform that grows with the practice"],
        closing: "Built twice, loved both times — the second version kept the soul of the first and gave Joe a home online that genuinely sounds like him.",
      },
    },
    neuweiss: {
      id: "neuweiss", title: "neuweiss",
      tagline: "A modern identity for interiors & real estate.",
      year: "2024", client: "neuweiss", tone: "architectural",
      tags: ["Brand Identity"],
      services: ["Brand Identity", "Logo & Wordmark", "Visual System", "Brand Guidelines"],
      background: "neuweiss is a modern interior and real estate brand built on clean lines, light and considered space. They needed an identity as composed as the rooms they create — quiet, confident and unmistakably modern, with enough flexibility to work across signage, print and screen.",
      challenge: {
        intro: "Real estate branding tends to look the same. The challenge was to feel distinctly modern without chasing trends:",
        items: ["Designing a wordmark that feels architectural, not decorative", "Building a system restrained enough to stay timeless", "Working across print, signage and digital from day one", "Giving the team clear rules to keep it consistent"],
      },
      approach: [
        { group: "Discovery", items: ["Positioning and audience workshops", "Mood and reference direction", "Competitive landscape review"] },
        { group: "Identity design", items: ["Wordmark and monogram exploration", "A precise, modern type system", "A restrained, light-led palette"] },
        { group: "Visual system", items: ["Layout grids and spacing rules", "Photography and art-direction guidance", "Application across key touchpoints"] },
        { group: "Guidelines", items: ["A clear, usable brand book", "Logo, colour and type rules", "Do's and don'ts for the team"] },
      ],
      result: {
        intro: "A calm, architectural identity that gives neuweiss a confident, modern presence across every surface it lives on.",
        outcomes: ["A distinctive, timeless wordmark", "A flexible system spanning print and digital", "Clear guidelines for consistent use", "An identity as composed as the spaces it represents"],
        closing: "The result is quiet on purpose — a brand that lets the architecture speak, while staying instantly recognisable as neuweiss.",
      },
    },
  };

  function loadCases() {
    // If CONTENT has embedded cases (from CMS full-save), use those
    if (window.CONTENT && window.CONTENT.cases && typeof window.CONTENT.cases === 'object' && !Array.isArray(window.CONTENT.cases)) {
      return window.CONTENT.cases;
    }
    // Otherwise check dedicated cases localStorage key
    try {
      const raw = localStorage.getItem(CASES_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return DEFAULT_CASES;
  }

  window.CASES = loadCases();
  window.CASES_DEFAULTS = DEFAULT_CASES;
  window.PORTFOLIO_HREF = "../index.html";
})();
