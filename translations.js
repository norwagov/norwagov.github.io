// ============================================================
//  translations.js — Language definitions for the portfolio
//  Supported languages: pl (Polish), en (English)
//  To add a new language: copy one lang block and translate.
//  To add a new key: add it to ALL languages to avoid missing text.
// ============================================================

const TRANSLATIONS = {

  // ── POLISH ────────────────────────────────────────────────
  pl: {

    // NAV
    nav_logo:        "Piotr Gawron Portfolio",
    nav_logo_opyleo: "Cofnij",
    nav_about:       "O mnie",
    nav_skills:      "Umiejętności",    
    nav_experience:  "Doświadczenie",
    nav_projects:    "Projekty",
    nav_contact:     "Kontakt",
    nav_back:        "Wróć do projektów",

    nav_logo_gesly: "Cofnij",
    gesly_desc: "<br>Gesly miał być komunikatorem P2P, dzięki któremu użytkownicy mogliby się porozumiewać bez potrzeby połączenia do serwera. Projekt został porzucony, ale <a href='https://github.com/NanosoftTeam/gesly/tree/main/utils'>kod</a> dalej można przeglądać.",

    // HERO
    hero_label:    "CV - Portfolio",
    hero_name:     "Piotr<br>Gawron",
    hero_role:     "Programista | Pasjonat języków obcych",
    hero_tagline:  "Od zawsze interesuję się tym, jak działa komputer. Lubię grzebać<br> w disassemblerach i analizować kod napisany przez profesjonalistów. Hobbystycznie zajmuję sie również tworzeniem stron internetowych<br>i ich projektowaniem. W wolnym czasie uczę się języka chińskiego.",
    hero_btn_contact:  "✉ Skontaktuj się",
    hero_btn_projects: "📁 Zobacz projekty",

    // Przykład dla języka polskiego:
    skills_hard_subtitle: "Umiejętności twarde",
    skills_soft_subtitle: "Umiejętności miękkie",
    skill_comm_name: "Komunikacja i współpraca",
    skill_comm_desc: "Efektywna praca w zespołach cross-funkcjonalnych i jasne przekazywanie wiedzy technicznej.",

    // SKILLS SECTION
    skills_label: "Kompetencje",
    skills_title: "Umiejętności i pasje",
    skill_linux_name:   "Linux",
    skill_linux_desc:   "Umiem zarządzać systemem Linux, obsługiwać terminal z wysoką skutecznością w rozwiązywaniu problemów z systemem.",
    skill_webdev_name:  "Programowanie webowe",
    skill_webdev_desc:  "Miałem styczność z frameworkami takimi jak Astro, Laravel, Flask. <br>Zdecydowanie lepiej jednak idzie mi wdrażanie wyglądu strony niż backend.",
    skill_webproj_name:    "Figma <i>(Projektowanie stron)</i>",
    skill_webproj_desc:    "Umiem obsługiwać Figmę i tworzyć projekty graficzne stron internetowych.",
    skill_reveng_name:        "Podstawy Reverse Engineeringu",
    skill_reveng_desc:        "Traktuję to bardziej, jako pasję. Interesuję się tym, jak działają programy i ciekawi mnie działanie procesora i rejestrów. Potrafię w podstawowym stopniu obsługiwać <b>Ghidrę</b> i <b>IDĘ Free</b> w celu analizy kodu napisanego w <b>C/Objective-C/C++</b>.",
    skill_git_name:        "Git i Github",
    skill_git_desc:        "Swobodnie poruszam się w tym środowisku i używam go praktycznie codziennie.",
    skill_program_name:       "Programowanie",
    skill_program_desc:       "Sprawnie posługuję się językami <b>Python</b> i <b>C++</b>.<br>W ramach ćwiczeń, staram się rozwiązywać problemy na <a href='https://leetcode.com/u/norwagov/'>LeetCode</a>.",
    skill_gbde_desc:       "Umiem posługiwać się <b>językiem angielskim</b> w stopniu zaawansowanym. <br><b>Język niemiecki</b> umiem zdcydowanie słabiej, ale nie powinno być u mnie problemu ze zrozumieniem tekstu dotyczącego moich zainteresowań, albo branży. Rozumiem również wiele instrukcji, czy dokumentacji napisanych po niemiecku.",
    skill_cnfi_desc:       "<b>Języka fińskiego</b> uczę się od <i>czerwca 2025</i> roku i umiem go na tyle, aby porozumieć się w nieco wyższym stopniu niż podstawowym. Długa droga nauki przede mną, ale szybko progresuję i mam doświadczenie w uczeniu się jezyków.",  

    skill_projS_name: "Zarzadzanie projektem",
    skill_projS_desc: "Umiejętności zarządzania projektami, w tym planowanie i wydzielanie ról. Mając wizję sądzę, że potrafię przekazać ją współpracownikom i przekonać ich do niej.",

    opyleo_desc: "<br>Jest to (niestety już nieistniejąca) strona internetowa, na której ludzie mogli kupować książki. Moim zadaniem było przeprojektowanie jej wyglądu. Aby zobaczyć efekt naszej pracy (backendem zajmowali się współpracownicy), wystarczy wejść na <a href='https://grzes-business.github.io/Opyleo-Landing-Page/'>tę stronę</a>, zbadać element i zmniejszyć rozmiar okna przeglądarki mniej więcej do rozmiaru smartfona, jako że strona była projektowana na urządzenia mobilne.",

    skill_asertS_name: "Asertywność",
    skill_asertS_desc: "Umiem powiedzieć <b>'nie'</b> i nie mam problemu z wyrażaniem swojego zdania, nawet jeśli jest ono zupełnie inne niz zdanie innych.<br>Warto jednak pamietać, że podczas pracy nad czymś, czego nie do końca znamy, lepiej jest posłuchać osób bardziej wykwalifikowanych.",

    skill_learnmore: "<b>Dowiedz się więcej!</b>",
    skill_learnmore_HSK: "<b>Dowiedz się więcej o HSK!</b>",

    // EXPERIENCE SECTION
    exp_label: "Historia zawodowa i edukacyjna",
    exp_title: "Doświadczenie i szkoły",
    exp1_period:  "2026 — obecnie",
    exp1_role:    "Politechnika Wrocławska - Wydział Informatyki i Telekomunikacji",
    exp1_company: "Informatyka Stosowana",
    exp1_desc:    "",
    exp2_period:  "2022 — 2026",
    exp2_role:    "Akademickie Liceum Ogólnokształcące Politechniki Wrocławskiej",
    exp2_company: "Uczeń na kierunku matematyczno-fizyczno-informatycznym.",
    exp2_desc:    "",
    // PROJECTS SECTION
    proj_label: "Realizacje",
    proj_title: "Projekty",
    proj1_title: "Opyleo - Przeprojektowanie wyglądu strony internetowej",
    proj1_desc:  "<i>gru 2024–kwi 2025</i>",
    proj2_title: "Gesly - Komunikator P2P",
    proj2_desc:  "<i>Porzucony</i>",

    // CONTACT SECTION
    contact_label:    "Napisz do mnie",
    contact_title:    "Kontakt",
    contact_subtitle: "Otwarty na nowe wyzwania i ciekawe projekty.",

    // FOOTER
    footer: "Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w tym dokumencie na potrzeby obecnych i przyszłych procesów rekrutacyjnych, zgodnie z rozporządzeniem (UE) 2016/679 (RODO).",

// I hereby give consent for my personal data included in this document to be processed for the purposes of current and future recruitment processes, in accordance with Regulation (EU) 2016/679 (GDPR).

    // ── SUBPAGE (projekt-shopflow.html) ──────────────────────
    sub_breadcrumb_portfolio: "Portfolio",
    sub_breadcrumb_projects:  "Projekty",

    sub_label:    "Projekt — E-commerce",
    sub_title:    "ShopFlow<br>Platforma e-commerce",
    sub_subtitle: "Pełne rozwiązanie sklepowe dla średnich i dużych przedsiębiorstw — od koszyka po panel logistyczny i analitykę w czasie rzeczywistym.",

    sub_meta_date:   "📅 2023 — 2024",
    sub_meta_role:   "👤 Rola: Lead Developer",
    sub_meta_client: "🏢 Klient: RetailGroup S.A.",

    sub_stat1_num:   "50k",
    sub_stat1_label: "zamówień<br>miesięcznie",
    sub_stat2_num:   "−40%",
    sub_stat2_label: "czasu ładowania<br>strony",
    sub_stat3_num:   "99.8%",
    sub_stat3_label: "dostępność<br>systemu",

    sub_desc_label: "Opis projektu",
    sub_desc_p1:    "ShopFlow to kompletna platforma sprzedażowa stworzona od podstaw dla RetailGroup S.A. — sieci 120 sklepów stacjonarnych, która chciała zbudować silny kanał online.",
    sub_desc_p2:    "Projekt obejmował front-end sklepu, panel administracyjny dla menedżerów kategorii, moduł magazynowy, integrację z systemem płatności Stripe oraz wbudowaną analitykę z dashboardem real-time dla zarządu.",
    sub_desc_p3:    "Całość wdrożona na infrastrukturze AWS z automatycznym skalowaniem — system bez zakłóceń obsłużył Black Friday z 8-krotnym pikiem ruchu.",

    sub_challenges_label: "Wyzwania i rozwiązania",
    sub_ch1_title: "Wydajność przy dużym ruchu",
    sub_ch1_desc:  "Wdrożenie Redis jako warstwy cache'ującej katalog produktów skróciło czas odpowiedzi API o 70%.",
    sub_ch2_title: "Bezpieczeństwo płatności",
    sub_ch2_desc:  "Tokenizacja kart przez Stripe Elements, audyt OWASP Top 10, testy penetracyjne przed launchem.",
    sub_ch3_title: "Synchronizacja stanów magazynowych",
    sub_ch3_desc:  "Kolejki RabbitMQ zapewniające spójność między ERP klienta a sklepem bez opóźnień.",
    sub_ch4_title: "Mobile-first UX",
    sub_ch4_desc:  "68% ruchu z urządzeń mobilnych wymagało przemodelowania całej ścieżki zakupowej i optymalizacji LCP.",

    sub_details_label:    "Szczegóły techniczne",
    sub_detail_frontend:  "Front-end",
    sub_detail_backend:   "Back-end",
    sub_detail_db:        "Baza danych",
    sub_detail_cache:     "Cache",
    sub_detail_payments:  "Płatności",
    sub_detail_hosting:   "Hosting",
    sub_detail_cicd:      "CI/CD",

    sub_role_label:       "Moja rola",
    sub_role_position:    "Stanowisko",
    sub_role_team:        "Zespół",
    sub_role_duration:    "Czas trwania",
    sub_role_method:      "Metodologia",
    sub_role_team_val:    "5 osób",
    sub_role_duration_val:"14 miesięcy",

    sub_cta_title:    "Zainteresowany podobnym projektem?",
    sub_cta_subtitle: "Chętnie porozmawiam o Twoich potrzebach.",
    sub_cta_github:   "🐙 GitHub",
    sub_cta_contact:  "✉ Napisz do mnie",

    kurs_title: "Kursy i certyfikaty",
    kurs1_title: "Tu pojawią się kursy",
    kurs1_desc: "i cerytfikaty.",
  },

  // ── ENGLISH ───────────────────────────────────────────────
//   en: {

//     // NAV
//     nav_logo:        "JK Portfolio",
//     nav_about:       "About",
//     nav_skills:      "Skills",
//     nav_experience:  "Experience",
//     nav_projects:    "Projects",
//     nav_contact:     "Contact",
//     nav_back:        "Back to projects",

//     // HERO
//     hero_label:    "Portfolio & CV",
//     hero_name:     "Jan<br>Kowalski",
//     hero_role:     "Full-Stack Developer & UI Designer",
//     hero_tagline:  "I build intuitive web applications with the user in mind, combining solid back-end engineering with polished interfaces.",
//     hero_btn_contact:  "✉ Get in touch",
//     hero_btn_projects: "📁 See projects",

//     // Przykład dla języka angielskiego lub innego (np. fińskiego):
//     skills_hard_subtitle: "Hard Skills",
//     skills_soft_subtitle: "Soft Skills",
//     skill_comm_name: "Communication & Teamwork",
//     skill_comm_desc: "Effective collaboration across cross-functional teams and clear knowledge sharing.",

//     // SKILLS SECTION
//     skills_label: "Competencies",
//     skills_title: "Skills and hobbies",
//     skill_backend_name:   "Back-end",
//     skill_backend_desc:   "Node.js, Python (Django/FastAPI), REST API, PostgreSQL, Redis",
//     skill_frontend_name:  "Front-end",
//     skill_frontend_desc:  "React, TypeScript, CSS, Tailwind, SVG & Canvas animations",
//     skill_devops_name:    "DevOps & Cloud",
//     skill_devops_desc:    "Docker, Kubernetes, CI/CD, AWS (EC2, S3, Lambda), Terraform",
//     skill_ux_name:        "UX/UI Design",
//     skill_ux_desc:        "Figma, usability research, prototyping, design systems",
//     skill_db_name:        "Databases",
//     skill_db_desc:        "PostgreSQL, MongoDB, Elasticsearch, data modelling",
//     skill_sec_name:       "Security",
//     skill_sec_desc:       "OAuth 2.0, OWASP, security audits, encryption",

//     skill_learnmore: "<b>Learn more!</b>",
//     skill_learnmore_HSK: "<b>Learn more about HSK!</b>",
        
//     // EXPERIENCE SECTION
//     exp_label: "Work history",
//     exp_title: "Experience",
//     exp1_period:  "2022 — present",
//     exp1_role:    "Senior Full-Stack Developer",
//     exp1_company: "TechCorp Ltd. — Warsaw",
//     exp1_desc:    "Leading development of a SaaS platform serving 200,000 active users. Responsible for microservice architecture, performance optimisation and mentoring a team of 4.",
//     exp2_period:  "2019 — 2022",
//     exp2_role:    "Front-end Developer",
//     exp2_company: "DigitalAgency — Kraków",
//     exp2_desc:    "Built interfaces for e-commerce and fintech clients. Delivered a React-based design system that cut development time by 40%.",
//     exp3_period:  "2017 — 2019",
//     exp3_role:    "Junior Developer",
//     exp3_company: "StartupHub — Wrocław",
//     exp3_desc:    "First steps in a production environment — WordPress, PHP, jQuery, gradually moving to React and Node.js.",

//     // PROJECTS SECTION
//     proj_label: "Work",
//     proj_title: "Selected projects",
//     proj1_title: "ShopFlow — e-commerce platform",
//     proj1_desc:  "Full shopping solution with admin panel, payment system and real-time analytics. 50,000 orders per month.",
//     proj2_title: "DataViz Dashboard",
//     proj2_desc:  "Interactive analytics dashboard with real-time data visualisation for a financial sector client.",
//     proj3_title: "ChatBot CRM",
//     proj3_desc:  "AI assistant integrated with a CRM system — automates customer query handling and generates sales reports.",
//     proj_see:    "View project",

//     // CONTACT SECTION
//     contact_label:    "Get in touch",
//     contact_title:    "Contact",
//     contact_subtitle: "Open to new challenges and interesting projects.",

//     // FOOTER
//     footer: "© 2025 Jan Kowalski — Portfolio. All rights reserved.",

//     // ── SUBPAGE (projekt-shopflow.html) ──────────────────────
//     sub_breadcrumb_portfolio: "Portfolio",
//     sub_breadcrumb_projects:  "Projects",

//     sub_label:    "Project — E-commerce",
//     sub_title:    "ShopFlow<br>E-commerce Platform",
//     sub_subtitle: "A complete retail solution for mid-to-large businesses — from cart to logistics panel and real-time analytics.",

//     sub_meta_date:   "📅 2023 — 2024",
//     sub_meta_role:   "👤 Role: Lead Developer",
//     sub_meta_client: "🏢 Client: RetailGroup S.A.",

//     sub_stat1_num:   "50k",
//     sub_stat1_label: "orders<br>per month",
//     sub_stat2_num:   "−40%",
//     sub_stat2_label: "page load<br>time",
//     sub_stat3_num:   "99.8%",
//     sub_stat3_label: "system<br>uptime",

//     sub_desc_label: "Project description",
//     sub_desc_p1:    "ShopFlow is a full-featured e-commerce platform built from scratch for RetailGroup S.A. — a chain of 120 brick-and-mortar stores looking to establish a strong online channel.",
//     sub_desc_p2:    "The project covered the storefront, an admin panel for category managers, a warehouse module, Stripe payment integration, and built-in analytics with a real-time executive dashboard.",
//     sub_desc_p3:    "The entire system is deployed on AWS with auto-scaling — it handled Black Friday traffic spikes 8× without disruption.",

//     sub_challenges_label: "Challenges & solutions",
//     sub_ch1_title: "High-traffic performance",
//     sub_ch1_desc:  "Introducing Redis as a caching layer for the product catalogue reduced API response time by 70%.",
//     sub_ch2_title: "Payment security",
//     sub_ch2_desc:  "Card tokenisation via Stripe Elements, OWASP Top 10 audit, and penetration testing before launch.",
//     sub_ch3_title: "Inventory synchronisation",
//     sub_ch3_desc:  "RabbitMQ queues ensuring consistency between the client's ERP and the storefront with no delays.",
//     sub_ch4_title: "Mobile-first UX",
//     sub_ch4_desc:  "With 68% of traffic from mobile devices, the entire purchase flow was redesigned and LCP optimised.",

//     sub_details_label:    "Technical details",
//     sub_detail_frontend:  "Front-end",
//     sub_detail_backend:   "Back-end",
//     sub_detail_db:        "Database",
//     sub_detail_cache:     "Cache",
//     sub_detail_payments:  "Payments",
//     sub_detail_hosting:   "Hosting",
//     sub_detail_cicd:      "CI/CD",

//     sub_role_label:       "My role",
//     sub_role_position:    "Position",
//     sub_role_team:        "Team",
//     sub_role_duration:    "Duration",
//     sub_role_method:      "Methodology",
//     sub_role_team_val:    "5 people",
//     sub_role_duration_val:"14 months",

//     sub_cta_title:    "Interested in a similar project?",
//     sub_cta_subtitle: "I'd love to talk about your needs.",
//     sub_cta_github:   "🐙 GitHub",
//     sub_cta_contact:  "✉ Contact me",
//   },

};

// ============================================================
//  ENGINE — do not edit below unless you know what you're doing
// ============================================================

(function () {
  const STORAGE_KEY = "portfolio_lang";
  const SUPPORTED   = Object.keys(TRANSLATIONS);
  const DEFAULT     = "pl";

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || "").slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : DEFAULT;
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    // Translate every element that has data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
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
