// ============================================================
//  translations.js — Language definitions for the portfolio
//  Supported languages: pl (Polish), en (English)
//  Polish text is also written directly in the HTML files, so the
//  page works without JavaScript. After editing a Polish string here,
//  run `node scripts/sync-pl-html.js` to copy it into the HTML.
//  To add a new key: add it to ALL languages to avoid missing text.
// ============================================================

const TRANSLATIONS = {

  // ── POLISH ────────────────────────────────────────────────
  pl: {

    // PAGE TITLES
    title_index:  "Piotr Gawron — Portfolio i CV",
    title_opyleo: "Opyleo — Piotr Gawron",
    title_gesly:  "Gesly — Piotr Gawron",

    // NAV
    nav_logo:        "Piotr Gawron Portfolio",
    nav_logo_opyleo: "Cofnij",
    nav_about:       "O mnie",
    nav_skills:      "Umiejętności",
    nav_experience:  "Edukacja",
    nav_projects:    "Projekty",
    nav_contact:     "Kontakt",
    nav_print:       "🖨️ Drukuj CV",

    nav_logo_gesly: "Cofnij",
    gesly_desc: "<br>Gesly miał być komunikatorem P2P, dzięki któremu użytkownicy mogliby się porozumiewać bez potrzeby połączenia do serwera. Pracując nad nim, nauczyłem się komunikacji z API. Projekt został porzucony, ale <a href='https://github.com/NanosoftTeam/gesly/tree/main/utils' target='_blank' rel='noopener noreferrer'>kod</a> dalej można przeglądać.",

    // HERO
    hero_label:    "CV - Portfolio",
    hero_name:     "Piotr<br>Gawron",
    hero_role:     "Student Informatyki Stosowanej na Politechnice Wrocławskiej",
    hero_tagline:  "Od zawsze interesuję się tym, jak działa komputer. Lubię grzebać w disassemblerach i analizować kod napisany przez profesjonalistów. Hobbystycznie zajmuję się również tworzeniem stron internetowych i ich projektowaniem. W wolnym czasie uczę się języków obcych.",
    hero_btn_contact:  "✉ Skontaktuj się",
    hero_btn_projects: "📁 Zobacz projekty",

    // SKILLS SECTION
    skills_label: "Kompetencje",
    skills_title: "Umiejętności i pasje",
    skill_linux_name:   "Linux",
    skill_linux_desc:   "Umiem zarządzać systemem Linux, obsługiwać terminal z wysoką skutecznością w rozwiązywaniu problemów z systemem.",
    skill_linux_tag1:   "Terminal",
    skill_webdev_name:  "Programowanie webowe",
    skill_webdev_desc:  "Miałem styczność z frameworkami takimi jak Astro, Laravel, Flask. <br>Zdecydowanie lepiej jednak idzie mi wdrażanie wyglądu strony niż backend.",
    skill_webdev_tag2:  "Frameworki webowe",
    skill_webproj_name:    "Figma <i>(Projektowanie stron)</i>",
    skill_webproj_desc:    "Umiem obsługiwać Figmę i tworzyć projekty graficzne stron internetowych.",
    skill_webproj_tag1:    "UX design",
    skill_reveng_name:        "Podstawy Reverse Engineeringu",
    skill_reveng_desc:        "Traktuję to bardziej, jako pasję. Interesuję się tym, jak działają programy i ciekawi mnie działanie procesora i rejestrów. Potrafię w podstawowym stopniu obsługiwać <b>Ghidrę</b> i <b>IDA Free</b> w celu analizy kodu napisanego w <b>C/Objective-C/C++</b>.",
    skill_git_name:        "Git i GitHub",
    skill_git_desc:        "Swobodnie poruszam się w tym środowisku i używam go praktycznie codziennie.",
    skill_git_course:      "🎓 Ukończony kurs: Learn Git Branching",
    skill_program_name:       "Programowanie",
    skill_program_desc:       "Sprawnie posługuję się językami <b>Python</b> i <b>C++</b>.<br>W ramach ćwiczeń, staram się rozwiązywać problemy na <a href='https://leetcode.com/u/norwagov/' target='_blank' rel='noopener noreferrer'>LeetCode</a>.",
    skill_program_tag1:    "Programowanie obiektowe (OOP)",
    skill_gbde_name:       "Angielski i niemiecki",
    skill_gbde_desc:       "Umiem posługiwać się <b>językiem angielskim</b> w stopniu zaawansowanym. <br><b>Język niemiecki</b> umiem zdecydowanie słabiej, ale nie powinno być u mnie problemu ze zrozumieniem tekstu dotyczącego moich zainteresowań, albo branży. Rozumiem również wiele instrukcji, czy dokumentacji napisanych po niemiecku.",
    skill_gbde_tag1:       "Angielski B2/C1 (brak certyfikatu)",
    skill_gbde_tag2:       "Niemiecki B1 (brak certyfikatu)",
    skill_fi_name:         "Fiński",
    skill_fi_desc:         "<b>Języka fińskiego</b> uczę się od <i>czerwca 2025</i> roku i umiem go na tyle, aby porozumieć się w nieco wyższym stopniu niż podstawowym. Długa droga nauki przede mną, ale szybko progresuję i mam doświadczenie w uczeniu się języków.",
    skill_fi_tag1:         "Fiński A2",

    opyleo_desc: "<br>Jest to (niestety już nieistniejąca) strona internetowa, na której ludzie mogli kupować książki. Moim zadaniem było przeprojektowanie jej wyglądu. Aby zobaczyć efekt naszej pracy (backendem zajmowali się współpracownicy), wystarczy wejść na <a href='https://grzes-business.github.io/Opyleo-Landing-Page/' target='_blank' rel='noopener noreferrer'>tę stronę</a>, zbadać element i zmniejszyć rozmiar okna przeglądarki mniej więcej do rozmiaru smartfona, jako że strona była projektowana na urządzenia mobilne.",

    // EDUCATION SECTION
    exp_label: "Studia i szkoła",
    exp_title: "Edukacja",
    exp1_period:  "2026 — obecnie",
    exp1_role:    "Informatyka Stosowana",
    exp1_company: "Politechnika Wrocławska — Wydział Informatyki i Telekomunikacji",
    exp1_desc:    "",
    exp2_period:  "2022 — 2026",
    exp2_role:    "Klasa matematyczno-fizyczno-informatyczna",
    exp2_company: "Akademickie Liceum Ogólnokształcące Politechniki Wrocławskiej",
    exp2_desc:    "",

    // PROJECTS SECTION
    proj_label: "Realizacje",
    proj_title: "Projekty",
    proj1_title: "Opyleo - Przeprojektowanie wyglądu strony internetowej",
    proj1_desc:  "<i>gru 2024–kwi 2025</i>",
    proj2_title: "Gesly - Komunikator P2P",
    proj2_desc:  "<i>Porzucony</i><br>Przy tym projekcie nauczyłem się komunikacji z API.",
    proj3_title: "Metal Planner - Planowanie podróży komunikacją miejską",
    proj3_desc:  "<i>2026 — obecnie</i><p>Zespołowa aplikacja do planowania podróży komunikacją miejską, tworzona metodą vibe codingu — kod powstaje we współpracy z asystentami AI, a my odpowiadamy za pomysły, integrację i testowanie. Pracujemy na gałęziach i pull requestach. Mój wkład:</p><ul><li><b>Lokalizacja autobusów na żywo</b> — pozycje pojazdów pobierane z otwartych danych miejskich (API) i pokazywane w aplikacji.</li><li><b>Zapisane miejsca</b> — możliwość zapisania lokalizacji jako „Dom”, „Szkoła” itp., aby szybko zaplanować do niej podróż.</li></ul>",
    proj_see:    "Zobacz projekt",
    tag_messaging: "Komunikacja",
    tag_trip:      "Planowanie podróży",
    tag_opendata:  "Otwarte dane",

    // CONTACT SECTION
    contact_label:    "Napisz do mnie",
    contact_title:    "Kontakt",
    contact_subtitle: "Otwarty na nowe wyzwania i ciekawe projekty.",

    // FOOTER
    footer: "Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w tym dokumencie na potrzeby obecnych i przyszłych procesów rekrutacyjnych, zgodnie z rozporządzeniem (UE) 2016/679 (RODO).",
  },

  // ── ENGLISH ───────────────────────────────────────────────
  en: {

    // PAGE TITLES
    title_index:  "Piotr Gawron — Portfolio & CV",
    title_opyleo: "Opyleo — Piotr Gawron",
    title_gesly:  "Gesly — Piotr Gawron",

    // NAV
    nav_logo:        "Piotr Gawron Portfolio",
    nav_logo_opyleo: "Back",
    nav_about:       "About me",
    nav_skills:      "Skills",
    nav_experience:  "Education",
    nav_projects:    "Projects",
    nav_contact:     "Contact",
    nav_print:       "🖨️ Print CV",

    nav_logo_gesly: "Back",
    gesly_desc: "<br>Gesly was meant to be a P2P messenger that would let users communicate without needing a connection to a server. While working on it, I learned how to communicate with APIs. The project was abandoned, but the <a href='https://github.com/NanosoftTeam/gesly/tree/main/utils' target='_blank' rel='noopener noreferrer'>code</a> can still be browsed.",

    // HERO
    hero_label:    "CV - Portfolio",
    hero_name:     "Piotr<br>Gawron",
    hero_role:     "Applied Computer Science student at Wrocław University of Science and Technology",
    hero_tagline:  "I've always been interested in how computers work. I enjoy digging through disassemblers and analyzing code written by professionals. As a hobby, I also build and design websites. In my free time I learn foreign languages.",
    hero_btn_contact:  "✉ Get in touch",
    hero_btn_projects: "📁 View projects",

    // SKILLS SECTION
    skills_label: "Competencies",
    skills_title: "Skills and passions",
    skill_linux_name:   "Linux",
    skill_linux_desc:   "I can administer a Linux system and use the terminal effectively to troubleshoot system problems.",
    skill_linux_tag1:   "Terminal",
    skill_webdev_name:  "Web development",
    skill_webdev_desc:  "I've worked with frameworks such as Astro, Laravel and Flask. <br>That said, I'm definitely better at implementing a site's look than at back-end work.",
    skill_webdev_tag2:  "Web frameworks",
    skill_webproj_name:    "Figma <i>(Website design)</i>",
    skill_webproj_desc:    "I can use Figma to create graphic designs for websites.",
    skill_webproj_tag1:    "UX design",
    skill_reveng_name:        "Reverse engineering basics",
    skill_reveng_desc:        "I treat this more as a passion. I'm interested in how programs work and curious about how the processor and registers operate. I can use <b>Ghidra</b> and <b>IDA Free</b> at a basic level to analyze code written in <b>C/Objective-C/C++</b>.",
    skill_git_name:        "Git and GitHub",
    skill_git_desc:        "I'm comfortable in this environment and use it practically every day.",
    skill_git_course:      "🎓 Completed course: Learn Git Branching",
    skill_program_name:       "Programming",
    skill_program_desc:       "I'm proficient in <b>Python</b> and <b>C++</b>.<br>As practice, I try to solve problems on <a href='https://leetcode.com/u/norwagov/' target='_blank' rel='noopener noreferrer'>LeetCode</a>.",
    skill_program_tag1:    "Object-oriented programming (OOP)",
    skill_gbde_name:       "English & German",
    skill_gbde_desc:       "I can use <b>English</b> at an advanced level. <br>My <b>German</b> is definitely weaker, but I shouldn't have trouble understanding text related to my interests or field. I also understand a lot of instructions and documentation written in German.",
    skill_gbde_tag1:       "English B2/C1 (no certificate)",
    skill_gbde_tag2:       "German B1 (no certificate)",
    skill_fi_name:         "Finnish",
    skill_fi_desc:         "I've been learning <b>Finnish</b> since <i>June 2025</i> and know it well enough to communicate at a slightly above basic level. I still have a long way to go, but I'm progressing quickly and have experience learning languages.",
    skill_fi_tag1:         "Finnish A2",

    opyleo_desc: "<br>This is a (sadly now defunct) website where people could buy books. My task was to redesign its look. To see the result of our work (the back end was handled by collaborators), just visit <a href='https://grzes-business.github.io/Opyleo-Landing-Page/' target='_blank' rel='noopener noreferrer'>this page</a>, inspect the element and shrink the browser window down to roughly smartphone size, since the site was designed for mobile devices.",

    // EDUCATION SECTION
    exp_label: "University and school",
    exp_title: "Education",
    exp1_period:  "2026 — present",
    exp1_role:    "Applied Computer Science",
    exp1_company: "Wrocław University of Science and Technology — Faculty of Computer Science and Telecommunications",
    exp1_desc:    "",
    exp2_period:  "2022 — 2026",
    exp2_role:    "Mathematics, physics and computer science class",
    exp2_company: "Academic High School of Wrocław University of Science and Technology",
    exp2_desc:    "",

    // PROJECTS SECTION
    proj_label: "Portfolio",
    proj_title: "Projects",
    proj1_title: "Opyleo - Website redesign",
    proj1_desc:  "<i>Dec 2024–Apr 2025</i>",
    proj2_title: "Gesly - P2P messenger",
    proj2_desc:  "<i>Abandoned</i><br>Working on this project, I learned how to communicate with APIs.",
    proj3_title: "Metal Planner - Public transport trip planning",
    proj3_desc:  "<i>2026 — present</i><p>A team-built app for planning public transport journeys, developed through vibe coding — the code is written together with AI assistants, while we are responsible for the ideas, integration and testing. We work with branches and pull requests. My contributions:</p><ul><li><b>Live bus locations</b> — vehicle positions fetched from the city's open data (API) and shown in the app.</li><li><b>Saved places</b> — users can save a location as “Home”, “School”, etc. to quickly plan a trip there.</li></ul>",
    proj_see:    "View project",
    tag_messaging: "Messaging",
    tag_trip:      "Trip planning",
    tag_opendata:  "Open data",

    // CONTACT SECTION
    contact_label:    "Get in touch",
    contact_title:    "Contact",
    contact_subtitle: "Open to new challenges and interesting projects.",

    // FOOTER
    footer: "I hereby give consent for my personal data included in this document to be processed for the purposes of current and future recruitment processes, in accordance with Regulation (EU) 2016/679 (GDPR).",
  },

};

// ============================================================
//  ENGINE — do not edit below unless you know what you're doing
// ============================================================

(function () {
  const STORAGE_KEY = "portfolio_lang";
  const SUPPORTED   = Object.keys(TRANSLATIONS);
  const DEFAULT     = "pl";

  // localStorage can throw in private mode or with blocked site data
  function readStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function writeStored(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function getLang() {
    const stored = readStored();
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || "").slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : DEFAULT;
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    writeStored(lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    // Translate every element that has data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key] === undefined) return;
      if (el.tagName === "TITLE") {
        document.title = t[key];
      } else {
        // Use innerHTML to support <br> in names etc.
        el.innerHTML = t[key];
      }
    });

    // Update active state on switcher buttons
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("lang-btn--active", btn.dataset.lang === lang);
    });

    // Update <html lang="...">
    document.documentElement.lang = lang;
  }

  // Build the switcher widget and inject it into .nav-inner
  function buildSwitcher() {
    const nav = document.querySelector(".nav-inner");
    if (!nav) return;

    const wrap = document.createElement("div");
    wrap.className = "lang-switcher";
    wrap.setAttribute("aria-label", "Language switcher");

    SUPPORTED.forEach(lang => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className  = "lang-btn";
      btn.dataset.lang = lang;
      btn.textContent  = lang.toUpperCase();
      btn.addEventListener("click", () => setLang(lang));
      wrap.appendChild(btn);
    });

    nav.appendChild(wrap);
  }

  // Inject switcher styles (scoped, won't bleed into page CSS)
  function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
      .lang-switcher {
        display: flex;
        gap: 4px;
        position: relative;
        z-index: 3;
      }
      .lang-btn {
        padding: 5px 14px;
        border-radius: 20px;
        border: 1.5px solid rgba(160,210,255,0.35);
        background: rgba(255,255,255,0.08);
        color: #c8e4ff;
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        cursor: pointer;
        transition: background 0.18s, color 0.18s, border-color 0.18s;
        font-family: inherit;
        position: relative;
        overflow: hidden;
      }
      .lang-btn::after {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; height: 50%;
        background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%);
        border-radius: 20px 20px 0 0;
        pointer-events: none;
      }
      .lang-btn:hover {
        background: rgba(255,255,255,0.18);
        color: #fff;
        border-color: rgba(200,235,255,0.6);
      }
      .lang-btn--active {
        background: linear-gradient(180deg, #5ab0e8 0%, #1a6fbf 50%, #1260aa 100%);
        color: #fff;
        border-color: rgba(40,100,200,0.6);
        box-shadow: 0 2px 10px rgba(20,90,190,0.4);
      }
    `;
    document.head.appendChild(style);
  }

  // Init on DOM ready
  function init() {
    injectStyles();
    buildSwitcher();
    applyLang(getLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
