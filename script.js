/* ============================
   ATELIER MORI — script.js
   ============================ */

'use strict';

/* ----------------------------------------------------------------
   DATA
   ---------------------------------------------------------------- */
const PROJECTS = [
  {
    id: '01', slug: 'casa-sul-lago',
    title: 'Casa sul Lago',
    subtitle: 'Residenza privata immersa nel paesaggio lacustre',
    location: 'Lago di Como, Italia',
    year: 2023, area: '480 m²',
    category: 'Residential',
    coverImage: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1400',
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
    description: `Una residenza che dialoga silenziosamente con il lago. Il progetto nasce dalla volontà di creare un'architettura che si dissolva nel paesaggio, dove la distinzione tra interno ed esterno si fa sfumata e contemplativa.\n\nI grandi volumi orizzontali in cemento a vista si radicano nel terreno mentre le ampie vetrate catturano il riflesso dell'acqua in ogni ora del giorno. La pianta libera permette alla luce di attraversare gli spazi in diagonale, creando sequenze visive sempre mutevoli.`,
    approach: `Il progetto si confronta con la topografia del sito attraverso una sequenza di terrazze digradanti verso il lago. Ogni spazio è pensato come un punto di osservazione privilegiato sul paesaggio lacustre.`,
    materials: ['Cemento a vista', 'Rovere naturale', 'Vetro strutturale', 'Pietra locale', 'Acciaio cor-ten'],
    credits: [
      { role: 'Progetto architettonico', name: 'Atelier Mori' },
      { role: 'Ingegneria strutturale', name: 'Studio Ferretti Ingegneri' },
      { role: 'Fotografia', name: 'Marco Introini' },
    ],
    featured: true,
  },
  {
    id: '02', slug: 'atelier-nomade',
    title: 'Atelier Nomade',
    subtitle: 'Studio creativo in un edificio industriale riconvertito',
    location: 'Milano, Italia',
    year: 2023, area: '220 m²',
    category: 'Interior',
    coverImage: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1400',
    images: [
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
    description: `Un loft milanese trasformato in uno spazio di lavoro creativo che preserva la memoria industriale del luogo. Le strutture originali in ghisa e i soffitti con capriate in legno convivono con inserti contemporanei in acciaio satinato e marmo Calacatta.\n\nLa stratificazione temporale è il tema principale: passato e presente si sovrappongono senza mai confondersi, creando un dialogo ricco di tensione poetica.`,
    approach: `La riconversione ha preservato ogni traccia della storia dell'edificio. Le aggiunte contemporanee sono riconoscibili e reversibili, nel rispetto della filosofia del minimo intervento.`,
    materials: ['Ghisa originale', 'Cemento levigato', 'Acciaio satinato', 'Marmo Calacatta', 'Vetro retro-illuminato'],
    credits: [
      { role: 'Progetto architettonico', name: 'Atelier Mori' },
      { role: 'Design del mobilio', name: 'Formafantasma' },
      { role: 'Fotografia', name: 'Federico Cedrone' },
    ],
    featured: true,
  },
  {
    id: '03', slug: 'padiglione-della-luce',
    title: 'Padiglione della Luce',
    subtitle: 'Spazio espositivo per la Biennale di Venezia',
    location: 'Venezia, Italia',
    year: 2022, area: '340 m²',
    category: 'Cultural',
    coverImage: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1400',
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
    description: `Un padiglione temporaneo progettato per esplorare il rapporto tra architettura e luce naturale. La struttura in acciaio corten ospita una sequenza di filtri luminosi che modificano la percezione dello spazio nel corso della giornata.\n\nIl progetto è pensato come un'installazione permanente nella durata temporanea, capace di lasciare una traccia nella memoria di chi lo attraversa.`,
    approach: `La luce è il materiale principale del progetto. Ogni apertura è calcolata per catturare specifiche qualità luminose nelle diverse ore del giorno, creando un percorso esperienziale immersivo.`,
    materials: ['Acciaio corten', 'Vetro satinato', 'Cemento bianco', 'Rete metallica traforata'],
    credits: [
      { role: 'Progetto architettonico', name: 'Atelier Mori' },
      { role: 'Light design', name: 'Davide Groppi' },
      { role: 'Fotografia', name: 'Simone Bossi' },
    ],
    featured: true,
  },
  {
    id: '04', slug: 'villa-pietra',
    title: 'Villa Pietra',
    subtitle: 'Ristrutturazione di una cascina del Settecento',
    location: 'Monferrato, Italia',
    year: 2022, area: '680 m²',
    category: 'Renovation',
    coverImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1400',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
    description: `Una cascina settecentesca nel cuore del Monferrato restituita a nuova vita con un intervento contemporaneo discreto e rispettoso. Le murature in pietra locale sono state consolidate e valorizzate, mentre i nuovi inserti in acciaio e vetro creano un contrasto generoso con la materia storica.\n\nIl paesaggio viticolo entra nelle stanze attraverso grandi vetrate incassate nelle mura antiche, fondendo interno ed esterno in una prospettiva continua.`,
    approach: `Il progetto ha adottato un approccio conservativo rigoroso, intervenendo solo dove necessario e lasciando parlare le stratificazioni storiche dell'edificio.`,
    materials: ['Pietra locale', 'Laterizio antico', 'Acciaio inox', 'Vetro float', 'Calce naturale'],
    credits: [
      { role: 'Progetto architettonico', name: 'Atelier Mori' },
      { role: 'Restauro', name: 'Arch. Lucia Ferretti' },
      { role: 'Fotografia', name: 'Filippo Bamberghi' },
    ],
    featured: false,
  },
  {
    id: '05', slug: 'casa-bosco',
    title: 'Casa Bosco',
    subtitle: 'Residenza immersa nel bosco appenninico',
    location: 'Appennino Tosco-Emiliano',
    year: 2021, area: '310 m²',
    category: 'Residential',
    coverImage: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1400',
    images: [
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
    description: `Una piccola casa che scompare nel bosco. Il progetto esplora il tema del riparo primordiale attraverso materiali naturali — legno, pietra, vetro — e una forma essenziale che non compete con il paesaggio circostante.\n\nL'organizzazione degli spazi privilegia la relazione con la natura: ogni ambiente ha almeno una vista diretta sul bosco, creando un'esperienza di immersione totale nel verde.`,
    approach: `Costruita con materiali locali e tecniche tradizionali reinterpretate in chiave contemporanea, la casa ha un impatto ambientale minimo e si integra pienamente nel paesaggio naturale.`,
    materials: ['Legno di castagno', 'Pietra appenninica', 'Vetro termico', 'Acciaio patinato', 'Terra cruda'],
    credits: [
      { role: 'Progetto architettonico', name: 'Atelier Mori' },
      { role: 'Landscape design', name: 'Antonio Perazzi' },
      { role: 'Fotografia', name: 'Hélène Binet' },
    ],
    featured: false,
  },
  {
    id: '06', slug: 'spazio-quaranta',
    title: 'Spazio Quaranta',
    subtitle: 'Appartamento minimalista nel centro storico',
    location: 'Firenze, Italia',
    year: 2021, area: '95 m²',
    category: 'Interior',
    coverImage: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1400',
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
    description: `Un appartamento del Cinquecento nel centro di Firenze trasformato in uno spazio contemporaneo essenziale. I soffitti affrescati originali dialogano con pavimenti in resina grigio perla e pareti in intonaco calce, creando una tensione temporale ricca di fascino.\n\nLa scelta di eliminare ogni elemento superfluo amplifica la percezione degli spazi e restituisce dignità alle proporzioni originali dell'appartamento.`,
    approach: `L'intervento ha privilegiato la sottrazione: rimuovere le aggiunte recenti ha riportato alla luce la bellezza architettonica originale, valorizzata da un arredo contemporaneo rarefatto.`,
    materials: ['Intonaco calce', 'Resina grigio perla', 'Marmo Bardiglio', 'Ottone spazzolato', 'Lino naturale'],
    credits: [
      { role: 'Progetto architettonico', name: 'Atelier Mori' },
      { role: 'Interior styling', name: 'Studio Pepe' },
      { role: 'Fotografia', name: 'Riccardo De Vecchi' },
    ],
    featured: false,
  },
];

const CAT_LABELS = {
  All: 'Tutti',
  Residential: 'Residenziale',
  Interior: 'Interior',
  Cultural: 'Culturale',
  Renovation: 'Ristrutturazione',
};

/* ----------------------------------------------------------------
   SVG ICONS (inline, no dependency)
   ---------------------------------------------------------------- */
const ICONS = {
  arrowRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="arrow-r"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowLeft: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="arrow-l"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  arrowDown: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`,
  menu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  mapPin: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mail: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  phone: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 5.27 5.27l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  send: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
};

/* ----------------------------------------------------------------
   ROUTING (hash-based)
   ---------------------------------------------------------------- */
function parseHash(hash) {
  const h = hash.replace('#', '') || '/';
  if (h === '/' || h === '') return { page: 'home' };
  if (h === '/projects') return { page: 'projects' };
  if (h.startsWith('/projects/')) return { page: 'project', slug: h.replace('/projects/', '') };
  if (h === '/studio') return { page: 'studio' };
  if (h === '/process') return { page: 'process' };
  if (h === '/contact') return { page: 'contact' };
  return { page: 'home' };
}

function navigate(path) {
  window.location.hash = path;
}

/* ----------------------------------------------------------------
   SCROLL REVEAL (IntersectionObserver)
   ---------------------------------------------------------------- */
let fadeObserver;
function initFadeObserver() {
  if (fadeObserver) fadeObserver.disconnect();
  fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); fadeObserver.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));
}

/* ----------------------------------------------------------------
   NAVBAR
   ---------------------------------------------------------------- */
function renderNavbar(currentPage) {
  const isHome = currentPage === 'home';
  const links = [
    { label: 'Progetti', path: '/projects', page: 'projects' },
    { label: 'Studio', path: '/studio', page: 'studio' },
    { label: 'Processo', path: '/process', page: 'process' },
    { label: 'Contatti', path: '/contact', page: 'contact' },
  ];

  document.getElementById('navbar').innerHTML = `
    <div class="max-w px nav-inner">
      <button id="nav-logo" onclick="navigate('/')">Atelier Mori</button>
      <nav class="nav-desktop">
        ${links.map(l => {
    const active = currentPage === l.page || (currentPage === 'project' && l.page === 'projects');
    return `<button class="nav-ul${active ? ' active' : ''}" onclick="navigate('${l.path}')">${l.label}</button>`;
  }).join('')}
      </nav>
      <button id="hamburger" aria-label="Menu">${ICONS.menu}</button>
    </div>
  `;

  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  let menuOpen = false;
  let scrolled = false;

  function updateNav() {
    const transparent = isHome && !scrolled && !menuOpen;
    navbar.classList.toggle('transparent', transparent);
    navbar.classList.toggle('scrolled', scrolled && !menuOpen);
    navbar.classList.toggle('menu-open', menuOpen);
  }
  updateNav();

  window.addEventListener('scroll', () => {
    scrolled = window.scrollY > 40;
    updateNav();
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    hamburger.innerHTML = menuOpen ? ICONS.close : ICONS.menu;
    mobileMenu.classList.toggle('open', menuOpen);
    updateNav();
  });
}

function renderMobileMenu() {
  document.getElementById('mobile-menu').innerHTML = `
    <nav>
      <button onclick="navigate('/')">Home</button>
      <button onclick="navigate('/projects')">Progetti</button>
      <button onclick="navigate('/studio')">Studio</button>
      <button onclick="navigate('/process')">Processo</button>
      <button onclick="navigate('/contact')">Contatti</button>
    </nav>
    <p class="menu-copy">Atelier Mori © 2024</p>
  `;
}

/* ----------------------------------------------------------------
   FOOTER
   ---------------------------------------------------------------- */
function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <div class="max-w" style="max-width:1280px;margin:0 auto;">
      <div class="footer-grid">
        <div>
          <button class="footer-brand-name" onclick="navigate('/')">Atelier Mori</button>
          <p class="footer-brand-desc">Architettura contemporanea essenziale. Progettiamo spazi pensati per durare nel tempo.</p>
        </div>
        <div>
          <p class="footer-col-label">Navigazione</p>
          <nav class="footer-nav">
            <button class="footer-nav-btn" onclick="navigate('/projects')">Progetti</button>
            <button class="footer-nav-btn" onclick="navigate('/studio')">Studio</button>
            <button class="footer-nav-btn" onclick="navigate('/process')">Processo</button>
            <button class="footer-nav-btn" onclick="navigate('/contact')">Contatti</button>
          </nav>
        </div>
        <div>
          <p class="footer-col-label">Contatti</p>
          <div class="footer-contact">
            <span>Via della Spiga 14, Milano</span>
            <a href="mailto:studio@ateliermori.it">studio@ateliermori.it</a>
            <a href="tel:+390223456789">+39 02 2345 6789</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© 2024 Atelier Mori. Tutti i diritti riservati.</p>
        <p class="footer-copy">Sito realizzato come progetto portfolio — design fittizio</p>
      </div>
    </div>
  `;
}

/* ----------------------------------------------------------------
   HOME PAGE
   ---------------------------------------------------------------- */
function renderHome() {
  const featured = PROJECTS.filter(p => p.featured);

  const featuredCards = featured.map((p, i) => `
    <button class="proj-card-btn" onclick="navigate('/projects/${p.slug}')">
      <div class="img-hover proj-card-img">
        <img src="${p.coverImage}" alt="${p.title}" loading="lazy">
      </div>
      <div class="proj-card-body">
        <div class="proj-card-header">
          <div>
            <p class="proj-card-meta">${CAT_LABELS[p.category]} — ${p.year}</p>
            <h3 class="proj-card-title font-serif">${p.title}</h3>
            <p class="proj-card-loc">${p.location}</p>
          </div>
          <span class="proj-card-num font-serif">${String(i + 1).padStart(2, '0')}</span>
        </div>
      </div>
    </button>
  `).join('');

  document.getElementById('main').innerHTML = `
    <div class="page-wrap">
      <!-- HERO -->
      <div class="hero">
        <div class="hero-bg" id="hero-bg">
          <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Architettura contemporanea">
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-content max-w px" style="max-width:1280px">
          <div style="margin-bottom:2rem">
            <p class="hero-eyebrow">Milano — 2024</p>
            <h1 class="hero-title font-serif">Atelier Mori</h1>
            <p class="hero-sub">Architettura contemporanea essenziale.</p>
          </div>
          <div class="hero-actions">
            <button class="btn-ghost" onclick="navigate('/projects')">Esplora i progetti ${ICONS.arrowRight}</button>
            <button class="btn-ghost secondary" onclick="navigate('/studio')">Lo studio</button>
          </div>
        </div>
        <div class="scroll-ind">
          <div class="scroll-ind-line"></div>
          ${ICONS.arrowDown}
        </div>
      </div>

      <!-- INTRO -->
      <section class="fade-up section-py px max-w" style="max-width:1280px;margin:0 auto;">
        <div class="intro-grid">
          <div>
            <p class="eyebrow light">Studio</p>
            <h2 class="section-title font-serif" style="color:#1a1917;margin-bottom:2rem;">
              Progettiamo spazi essenziali pensati per durare nel tempo.
            </h2>
            <p style="font-size:.875rem;font-weight:300;color:rgba(58,56,53,.7);line-height:1.9;margin-bottom:2rem;max-width:42ch;">
              Dove luce, materia e proporzione diventano esperienza. Ogni progetto nasce da un ascolto profondo del luogo e delle persone che lo abiteranno.
            </p>
            <button class="link-arrow bronze" onclick="navigate('/studio')">Chi siamo ${ICONS.arrowRight}</button>
          </div>
          <div class="img-hover intro-img">
            <img src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Interno architettonico" loading="lazy">
          </div>
        </div>
      </section>

      <!-- FEATURED PROJECTS -->
      <section style="padding:5rem 0;" class="px">
        <div class="max-w px" style="max-width:1280px;margin:0 auto;">
            <div class="featured-header">
            <div>
              <p class="eyebrow light">Selezione</p>
              <h2 class="section-title font-serif" style="color:#1a1917;">Progetti in evidenza</h2>
            </div>
            <button class="link-arrow charcoal" onclick="navigate('/projects')" style="display:none" id="all-proj-desktop">
              Tutti i progetti ${ICONS.arrowRight}
            </button>
          </div>
          <div class="proj-grid-featured">${featuredCards}</div>
          <div style="margin-top:2rem;">
            <button class="link-arrow charcoal" onclick="navigate('/projects')">Tutti i progetti ${ICONS.arrowRight}</button>
          </div>
        </div>
      </section>

      <!-- APPROACH split -->
      <div class="fade-up split-grid" style="overflow:hidden;">
        <div class="img-hover split-img">
          <img src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Materiali" loading="lazy">
        </div>
        <div class="split-text">
          <p class="eyebrow dark">Approccio</p>
          <h2 class="section-title font-serif" style="color:#f5f2ed;margin-bottom:2rem;">
            Ogni progetto è un atto<br>di ascolto profondo.
          </h2>
          <p class="split-body">
            Lavoriamo con materiali veri — cemento, pietra, legno, vetro — e con la luce naturale come elemento compositivo principale. La sostenibilità non è un obiettivo, è una conseguenza naturale del rispetto per il luogo.
          </p>
          <p class="split-body">
            Ogni committenza è unica. Ogni progetto nasce da un dialogo continuo, da un processo di co-creazione che porta a risultati autentici e duraturi.
          </p>
          <button class="link-arrow cream" onclick="navigate('/process')">Il nostro processo ${ICONS.arrowRight}</button>
        </div>
      </div>

      <!-- STATS -->
      <div class="fade-up border-y section-py px">
        <div class="stats-grid max-w" style="max-width:1280px;margin:0 auto;">
          ${[['14', 'Anni di attività'], ['48', 'Progetti realizzati'], ['6', 'Premi nazionali'], ['3', 'Paesi europei']]
      .map(([v, l]) => `<div style="text-align:center;"><p class="stat-val font-serif">${v}</p><p class="stat-lbl">${l}</p></div>`).join('')}
        </div>
      </div>

      <!-- CTA BANNER -->
      <div class="cta-banner">
        <img src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Architettura" loading="lazy">
        <div class="cta-overlay">
          <p class="eyebrow" style="color:rgba(255,255,255,.4);">Iniziamo a collaborare</p>
          <h2 class="cta-title font-serif">Hai un progetto in mente?</h2>
          <button class="btn-border" onclick="navigate('/contact')">Contattaci</button>
        </div>
      </div>
    </div>
  `;

  // Parallax hero
  const heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    function onScroll() {
      heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    // Store ref for cleanup
    heroBg._scrollHandler = onScroll;
  }

  // Show desktop "tutti i progetti" link on md+
  const allDesktop = document.getElementById('all-proj-desktop');
  if (allDesktop && window.innerWidth >= 768) allDesktop.style.display = 'inline-flex';
}

/* ----------------------------------------------------------------
   PROJECTS PAGE
   ---------------------------------------------------------------- */
function renderProjects(activeCategory) {
  const cats = ['All', 'Residential', 'Interior', 'Cultural', 'Renovation'];
  const cat = activeCategory || 'All';
  const filtered = cat === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === cat);

  const cards = filtered.map((p, i) => `
    <article class="fade-up" style="transition-delay:${(i % 3) * 80}ms">
      <button class="proj-card w100" onclick="navigate('/projects/${p.slug}')">
        <div class="img-hover proj-card-img2">
          <img src="${p.coverImage}" alt="${p.title}" loading="lazy">
        </div>
        <div class="proj-card-footer">
          <div style="flex:1">
            <p class="proj-card-meta">${CAT_LABELS[p.category]} — ${p.year}</p>
            <h3 class="proj-card-title2 font-serif">${p.title}</h3>
            <p class="proj-card-loc">${p.location}</p>
          </div>
          <span class="proj-card-arrow">${ICONS.arrowRight}</span>
        </div>
      </button>
    </article>
  `).join('');

  document.getElementById('main').innerHTML = `
    <div class="page-wrap">
      <div class="projects-header px">
        <div class="max-w projects-header-inner" style="max-width:1280px;margin:0 auto;">
          <div>
            <p class="eyebrow light">Archivio</p>
            <h1 class="section-title font-serif" style="color:#1a1917;font-size:clamp(3rem,6vw,4rem);">Progetti</h1>
          </div>
          <p style="font-size:.875rem;font-weight:300;color:#9a9590;max-width:28rem;line-height:1.8;">
            Una selezione di progetti realizzati dal 2010 ad oggi, in Italia e in Europa.
          </p>
        </div>
        <div class="max-w filters" style="max-width:1280px;margin:0 auto;">
          ${cats.map(c => `<button class="filter-btn${c === cat ? ' active' : ''}" data-cat="${c}">${CAT_LABELS[c]}</button>`).join('')}
        </div>
      </div>

      <div class="max-w px" style="max-width:1280px;margin:0 auto;">
        <div class="projects-grid" id="proj-grid">
          ${filtered.length ? cards : `<div class="empty-state" style="grid-column:1/-1;"><p class="font-serif">Nessun progetto trovato</p></div>`}
        </div>
        <div class="projects-count px" style="padding-left:0;padding-right:0;">
          ${filtered.length} ${filtered.length === 1 ? 'progetto' : 'progetti'} visualizzati
        </div>
      </div>
    </div>
  `;

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      renderProjects(btn.dataset.cat);
      initFadeObserver();
    });
  });
}

/* ----------------------------------------------------------------
   PROJECT DETAIL PAGE
   ---------------------------------------------------------------- */
function renderProjectDetail(slug) {
  const project = PROJECTS.find(p => p.slug === slug);
  if (!project) {
    document.getElementById('main').innerHTML = `
      <div class="page-wrap" style="min-height:80vh;display:flex;align-items:center;justify-content:center;">
        <div style="text-align:center;">
          <p class="font-serif" style="font-size:2rem;font-weight:300;color:#9a9590;margin-bottom:1.5rem;">Progetto non trovato</p>
          <button class="link-arrow charcoal" onclick="navigate('/projects')">← Tutti i progetti</button>
        </div>
      </div>`;
    return;
  }

  const idx = PROJECTS.indexOf(project);
  const prev = PROJECTS[idx - 1];
  const next = PROJECTS[idx + 1];
  let activeImg = 0;

  const thumbs = project.images.length > 1
    ? `<div class="detail-thumbs">${project.images.map((_, i) => `<button class="thumb-btn${i === 0 ? ' active' : ''}" data-i="${i}"></button>`).join('')}</div>`
    : '';

  const galleryImgs = project.images.slice(1).map((img, i) => `
    <div class="fade-up img-hover detail-gallery-item" style="transition-delay:${i * 100}ms">
      <img src="${img}" alt="${project.title} — vista ${i + 2}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">
    </div>
  `).join('');

  const wideSection = project.images.length >= 2 ? `
    <div class="max-w px detail-wide" style="max-width:1280px;margin:0 auto;">
      <div class="img-hover detail-wide-img">
        <img src="${project.images[1]}" alt="${project.title}" loading="lazy">
      </div>
      <p class="detail-wide-caption">${project.title} — ${project.location}, ${project.year}</p>
    </div>
  ` : '';

  const prevBtn = prev ? `
    <button class="proj-nav-btn" onclick="navigate('/projects/${prev.slug}')">
      <span class="proj-nav-label">${ICONS.arrowLeft.replace('arrow-l', 'nav-arrow-l')} Precedente</span>
      <span class="proj-nav-title font-serif">${prev.title}</span>
    </button>
  ` : '<div></div>';

  const nextBtn = next ? `
    <button class="proj-nav-btn right" onclick="navigate('/projects/${next.slug}')">
      <span class="proj-nav-label">Successivo ${ICONS.arrowRight.replace('arrow-r', 'nav-arrow-r')}</span>
      <span class="proj-nav-title font-serif">${next.title}</span>
    </button>
  ` : '<div></div>';

  document.getElementById('main').innerHTML = `
    <div class="page-wrap">
      <!-- HERO -->
      <div class="detail-hero">
        <img id="detail-hero-img" class="detail-hero-img" src="${project.images[0]}" alt="${project.title}">
        <div class="detail-hero-grad"></div>
        <button class="detail-back" onclick="navigate('/projects')">${ICONS.arrowLeft} Progetti</button>
        <div class="detail-hero-info max-w" style="max-width:1280px;">
          <p class="detail-cat">${CAT_LABELS[project.category]} — ${project.location}</p>
          <h1 class="detail-title font-serif">${project.title}</h1>
        </div>
        ${thumbs}
      </div>

      <!-- META -->
      <div class="detail-meta px">
        <div class="max-w detail-meta-grid" style="max-width:1280px;margin:0 auto;">
          ${[['Anno', String(project.year)], ['Superficie', project.area], ['Categoria', CAT_LABELS[project.category]], ['Luogo', project.location]]
      .map(([l, v]) => `<div><p class="meta-label">${l}</p><p class="meta-val font-serif">${v}</p></div>`).join('')}
        </div>
      </div>

      <!-- DESCRIPTION -->
      <div class="fade-up detail-desc px">
        <div class="max-w detail-desc-grid" style="max-width:1280px;margin:0 auto;">
          <div>
            <p class="detail-section-label">Descrizione</p>
            ${project.description.split('\n\n').map(para => `<p class="detail-para">${para}</p>`).join('')}
          </div>
          <div>
            <p class="detail-section-label">Approccio</p>
            <p class="detail-para" style="margin-bottom:2.5rem;">${project.approach}</p>
            <p class="detail-section-label">Materiali</p>
            <ul class="materials-list">
              ${project.materials.map(m => `<li class="material-item"><span class="material-dash"></span>${m}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      <!-- GALLERY -->
      ${project.images.length > 1 ? `
      <div class="max-w px detail-gallery" style="max-width:1280px;margin:0 auto;">
        ${galleryImgs}
      </div>` : ''}

      ${wideSection}

      <!-- CREDITS -->
      <div class="fade-up detail-credits px">
        <div class="max-w" style="max-width:1280px;margin:0 auto;">
          <p class="detail-section-label">Credits</p>
          <div class="credits-grid">
            ${project.credits.map(c => `<div><p class="credit-role">${c.role}</p><p class="credit-name">${c.name}</p></div>`).join('')}
          </div>
        </div>
      </div>

      <!-- PROJECT NAVIGATION -->
      <div class="proj-nav">
        <div class="max-w proj-nav-grid" style="max-width:1280px;margin:0 auto;">
          ${prevBtn}
          ${nextBtn}
        </div>
      </div>
    </div>
  `;

  // Thumbnails
  if (project.images.length > 1) {
    document.querySelectorAll('.thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeImg = parseInt(btn.dataset.i);
        document.getElementById('detail-hero-img').src = project.images[activeImg];
        document.querySelectorAll('.thumb-btn').forEach((b, i) => b.classList.toggle('active', i === activeImg));
      });
    });
  }
}

/* ----------------------------------------------------------------
   STUDIO PAGE
   ---------------------------------------------------------------- */
function renderStudio() {
  const team = [
    {
      name: 'Luca Mori', role: 'Fondatore & Direttore Creativo',
      bio: 'Laureato al Politecnico di Milano, ha collaborato con Herzog & de Meuron a Basilea prima di fondare Atelier Mori nel 2010. La sua ricerca si concentra sul rapporto tra architettura e paesaggio naturale.',
      image: 'https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Elena Ricci', role: 'Architetta Senior',
      bio: "Specializzata in interior architecture e design degli spazi culturali. Ha guidato i progetti più complessi dello studio negli ultimi cinque anni, con una particolare sensibilità per i materiali naturali.",
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Marco Chen', role: 'Project Architect',
      bio: "Diplomato all'AA School of Architecture di Londra, porta nello studio una sensibilità internazionale e una profonda competenza nei sistemi costruttivi contemporanei.",
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const values = [
    { title: 'Essenzialità', text: 'Ogni elemento deve avere una ragione precisa. Ciò che non è necessario viene rimosso fino a raggiungere la forma più pura del progetto.' },
    { title: 'Materia', text: 'Usiamo materiali veri, con memoria e carattere. Cemento, pietra, legno, metallo: materiali che migliorano con il tempo.' },
    { title: 'Durabilità', text: "Progettiamo per durare decenni, non stagioni. La qualità dell'esecuzione e la scelta dei materiali sono la migliore forma di sostenibilità." },
  ];

  document.getElementById('main').innerHTML = `
    <div class="page-wrap">
      <!-- HERO -->
      <div class="page-hero">
        <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Lo studio">
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content max-w px" style="max-width:1280px;">
          <p class="page-hero-eyebrow">Chi siamo</p>
          <h1 class="page-hero-title font-serif">Lo Studio</h1>
        </div>
      </div>

      <!-- PHILOSOPHY -->
      <div class="fade-up section-py px">
        <div class="max-w phil-grid" style="max-width:1280px;margin:0 auto;">
          <div>
            <p class="eyebrow light">Filosofia</p>
            <h2 class="section-title font-serif" style="color:#1a1917;margin-bottom:2rem;">
              Progettiamo spazi essenziali pensati per durare nel tempo, dove luce, materia e proporzione diventano esperienza.
            </h2>
            <p class="phil-body">Atelier Mori nasce nel 2010 dalla visione di un'architettura essenziale, capace di rispettare il luogo e le persone che lo abitano. Crediamo che la bellezza non risieda nell'aggiunta, ma nella sottrazione — nel gesto preciso, nel materiale onesto, nella proporzione studiata.</p>
            <p class="phil-body">Il nostro approccio è artigianale e profondamente collaborativo. Ogni progetto nasce da un ascolto attento del committente e da uno studio rigoroso del contesto: la topografia, la luce, le preesistenze, il paesaggio circostante.</p>
            <p class="phil-body">Lavoriamo principalmente su residenze private, ristrutturazioni di pregio, spazi culturali e interni contemporanei. La scala è sempre quella umana: spazi vissuti, non fotografati.</p>
          </div>
          <div class="img-hover phil-img">
            <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Studio" loading="lazy">
          </div>
        </div>
      </div>

      <!-- VALUES -->
      <div class="border-y" style="padding:4rem 0;">
        <div class="max-w px" style="max-width:1280px;margin:0 auto;">
          <p class="eyebrow light fade-up">Valori</p>
          <div class="values-grid">
            ${values.map((v, i) => `
              <div class="fade-up" style="transition-delay:${i * 100}ms">
                <p class="value-title font-serif">${v.title}</p>
                <p class="value-text">${v.text}</p>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- TEAM -->
      <div class="section-py px">
        <div class="max-w" style="max-width:1280px;margin:0 auto;">
          <p class="eyebrow light fade-up">Il Team</p>
          <div class="team-grid">
            ${team.map((m, i) => `
              <div class="fade-up" style="transition-delay:${i * 120}ms">
                <div class="img-hover team-img">
                  <img src="${m.image}" alt="${m.name}" loading="lazy" style="object-position:top">
                </div>
                <p class="team-name font-serif">${m.name}</p>
                <p class="team-role">${m.role}</p>
                <p class="team-bio">${m.bio}</p>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- STUDIO SPACE -->
      <div class="fade-up px" style="padding-bottom:5rem;">
        <div class="max-w" style="max-width:1280px;margin:0 auto;">
          <div class="studio-imgs">
            <div class="img-hover studio-img-item"><img src="https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Workspace" loading="lazy"></div>
            <div class="img-hover studio-img-item"><img src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Materiali" loading="lazy"></div>
          </div>
          <div class="studio-cta">
            <div>
              <p class="font-serif" style="font-size:1.5rem;font-weight:300;color:#1a1917;margin-bottom:.5rem;">Vuoi lavorare con noi?</p>
              <p style="font-size:.875rem;font-weight:300;color:#9a9590;">Il nostro studio è aperto a nuove collaborazioni.</p>
            </div>
            <button class="link-arrow bronze" onclick="navigate('/contact')">Contattaci ${ICONS.arrowRight}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ----------------------------------------------------------------
   PROCESS PAGE
   ---------------------------------------------------------------- */
function renderProcess() {
  const steps = [
    {
      number: '01', title: 'Ascolto & Ricerca', duration: '2 – 4 settimane',
      description: "Ogni progetto inizia con un ascolto profondo. Incontriamo il committente più volte, visitiamo il sito in momenti diversi della giornata, studiamo la storia del luogo e le sue preesistenze. In questa fase raccogliamo tutto ciò che serve per comprendere davvero cosa vogliamo costruire.",
      details: ['Brief approfondito', 'Sopralluoghi multipli', 'Analisi del contesto', 'Studio delle normative'],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      number: '02', title: 'Concept', duration: '3 – 6 settimane',
      description: "Il concept è il cuore del progetto. Non partiamo dalla forma, ma da un'idea narrativa: un tema, una relazione, una tensione. Da questa idea nasce il layout, la distribuzione degli spazi, il rapporto con la luce naturale. I primi schizzi sono liberi e sperimentali.",
      details: ['Schizzi esplorativi', 'Modelli di studio', 'Definizione del tema', 'Prima presentazione'],
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      number: '03', title: 'Materiali', duration: '2 – 4 settimane',
      description: "La scelta dei materiali avviene in parallelo allo sviluppo del progetto, non come decorazione finale. Ogni materiale deve avere un senso strutturale, spaziale ed emozionale. Creiamo campionature fisiche, sperimentiamo abbinamenti, visitiamo fornitori e artigiani.",
      details: ['Campionature fisiche', 'Visita fornitori', 'Tavola materica', 'Test di durabilità'],
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      number: '04', title: 'Sviluppo', duration: '8 – 16 settimane',
      description: "La fase di sviluppo è la più tecnica e dettagliata. Ogni giunzione, ogni spessore, ogni finitura viene studiata con precisione millimetrica. Lavoriamo a stretto contatto con ingegneri strutturali, impiantisti e artigiani specializzati per garantire la realizzabilità di ogni elemento.",
      details: ['Progetto esecutivo', 'Coordinamento strutturale', 'Capitolato materiali', 'Modello BIM'],
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      number: '05', title: 'Realizzazione', duration: 'Variabile',
      description: "Seguiamo ogni progetto durante la fase costruttiva con sopralluoghi settimanali e un coordinamento costante con il cantiere. La direzione lavori è parte integrante del nostro servizio: garantiamo che ogni dettaglio venga realizzato esattamente come progettato.",
      details: ['Direzione lavori', 'Sopralluoghi settimanali', 'Gestione artigiani', 'Collaudo finale'],
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
  ];

  const stepsHTML = steps.map((s, i) => {
    const reversed = i % 2 === 1;
    return `
      <div class="fade-up process-step">
        <div class="process-step-grid" style="${reversed ? 'direction:rtl' : ''}">
          <div style="${reversed ? 'direction:ltr' : ''}">
            <div class="step-header">
              <span class="step-num font-serif">${s.number}</span>
              <div>
                <p class="step-duration">${s.duration}</p>
                <h2 class="step-title font-serif">${s.title}</h2>
              </div>
            </div>
            <p class="step-desc">${s.description}</p>
            <ul class="step-details">
              ${s.details.map(d => `<li class="step-detail"><span class="step-detail-dash"></span>${d}</li>`).join('')}
            </ul>
          </div>
          <div class="img-hover process-step-img" style="${reversed ? 'direction:ltr' : ''}">
            <img src="${s.image}" alt="${s.title}" loading="lazy">
          </div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('main').innerHTML = `
    <div class="page-wrap">
      <div class="process-header px">
        <div class="max-w process-header-grid" style="max-width:1280px;margin:0 auto;">
          <h1 class="section-title font-serif" style="color:#1a1917;font-size:clamp(3rem,6vw,4rem);">Il Processo</h1>
          <p style="font-size:.875rem;font-weight:300;color:rgba(58,56,53,.7);line-height:1.8;align-self:flex-end;max-width:28rem;">
            Ogni progetto è un viaggio. Dalla prima conversazione alla consegna finale, ogni fase è guidata da un metodo rigoroso e da una costante attenzione al dettaglio.
          </p>
        </div>
      </div>

      <div class="max-w px" style="max-width:1280px;margin:0 auto;">
        ${stepsHTML}
      </div>

      <div class="process-cta fade-up">
        <p class="eyebrow dark">Inizia ora</p>
        <h2 class="process-cta-title font-serif">Pronto ad iniziare<br>il tuo progetto?</h2>
        <button class="btn-border-cream" onclick="navigate('/contact')">
          Parliamo ${ICONS.arrowRight}
        </button>
      </div>
    </div>
  `;
}

/* ----------------------------------------------------------------
   CONTACT PAGE
   ---------------------------------------------------------------- */
function renderContact() {
  document.getElementById('main').innerHTML = `
    <div class="page-wrap">
      <div class="contact-header px">
        <div class="max-w" style="max-width:1280px;margin:0 auto;">
          <p class="eyebrow light">Mettiamoci in contatto</p>
          <h1 class="section-title font-serif" style="color:#1a1917;font-size:clamp(3rem,6vw,4rem);">Contatti</h1>
        </div>
      </div>

      <div class="px" style="padding-bottom:2rem;">
        <div class="max-w contact-grid" style="max-width:1280px;margin:0 auto;">
          <!-- Info -->
          <div class="fade-up">
            <p class="contact-intro font-serif">Siamo sempre aperti a nuove conversazioni, collaborazioni e progetti stimolanti.</p>
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">${ICONS.mapPin}</div>
                <div>
                  <p class="contact-label">Indirizzo</p>
                  <p class="contact-val">Via della Spiga 14<br>20121 Milano, Italia</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">${ICONS.mail}</div>
                <div>
                  <p class="contact-label">Email</p>
                  <p class="contact-val"><a href="mailto:studio@ateliermori.it">studio@ateliermori.it</a></p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">${ICONS.phone}</div>
                <div>
                  <p class="contact-label">Telefono</p>
                  <p class="contact-val"><a href="tel:+390223456789">+39 02 2345 6789</a></p>
                </div>
              </div>
            </div>
            <div class="contact-hours">
              <p class="contact-label" style="margin-bottom:1rem;">Orari</p>
              <div class="hours-row"><span>Lunedì – Venerdì</span><span>9:00 – 18:00</span></div>
              <div class="hours-row"><span>Sabato</span><span>Su appuntamento</span></div>
            </div>
          </div>

          <!-- Form -->
          <div class="fade-up" style="transition-delay:150ms;" id="form-container">
            <div class="form-2col" style="margin-bottom:1.5rem;">
              <div class="form-group" style="margin:0">
                <label class="form-label">Nome *</label>
                <input type="text" id="f-name" class="form-input" placeholder="Il tuo nome" required>
              </div>
              <div class="form-group" style="margin:0">
                <label class="form-label">Email *</label>
                <input type="email" id="f-email" class="form-input" placeholder="email@esempio.com" required>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Tipo di progetto</label>
              <select id="f-type" class="form-select">
                <option value="">Seleziona una tipologia</option>
                <option>Residenza privata</option>
                <option>Ristrutturazione</option>
                <option>Interior design</option>
                <option>Spazio culturale</option>
                <option>Altro</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Messaggio *</label>
              <textarea id="f-msg" class="form-textarea" rows="5" placeholder="Raccontaci del tuo progetto..."></textarea>
            </div>
            <div class="form-footer">
              <p class="form-required">* Campi obbligatori</p>
              <button id="btn-submit" class="btn-submit">
                Invia messaggio ${ICONS.send}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Map -->
      <div class="fade-up px" style="padding-bottom:5rem;">
        <div class="max-w map-area" style="max-width:1280px;margin:0 auto;">
          <img src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Sede" loading="lazy">
          <div class="map-label">
            <div class="map-label-inner">
              <p class="map-label-eyebrow">Studio</p>
              <p class="map-label-text font-serif">Via della Spiga 14, Milano</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Form submit
  document.getElementById('btn-submit').addEventListener('click', () => {
    const name = document.getElementById('f-name').value.trim();
    const email = document.getElementById('f-email').value.trim();
    const msg = document.getElementById('f-msg').value.trim();
    if (!name || !email || !msg) {
      document.getElementById('f-name').style.borderBottomColor = name ? '' : '#c0392b';
      document.getElementById('f-email').style.borderBottomColor = email ? '' : '#c0392b';
      document.getElementById('f-msg').style.borderBottomColor = msg ? '' : '#c0392b';
      return;
    }
    const btn = document.getElementById('btn-submit');
    btn.disabled = true;
    btn.innerHTML = `Invio... <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="spin"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`;
    setTimeout(() => {
      document.getElementById('form-container').innerHTML = `
        <div class="form-success">
          <div class="success-line"></div>
          <p class="success-title font-serif">Messaggio inviato.</p>
          <p class="success-body">Grazie per averci contattato. Risponderemo entro 24 ore lavorative.</p>
        </div>`;
    }, 1200);
  });
}

/* ----------------------------------------------------------------
   ROUTER — main render function
   ---------------------------------------------------------------- */
function render() {
  const route = parseHash(window.location.hash);

  // Close mobile menu on navigation
  document.getElementById('mobile-menu').classList.remove('open');

  window.scrollTo({ top: 0, behavior: 'instant' });

  renderNavbar(route.page);
  renderMobileMenu();

  switch (route.page) {
    case 'home': renderHome(); break;
    case 'projects': renderProjects(); break;
    case 'project': renderProjectDetail(route.slug); break;
    case 'studio': renderStudio(); break;
    case 'process': renderProcess(); break;
    case 'contact': renderContact(); break;
    default: renderHome();
  }

  renderFooter();

  // Re-init observers after render
  requestAnimationFrame(() => initFadeObserver());
}

/* ----------------------------------------------------------------
   BOOT
   ---------------------------------------------------------------- */
window.addEventListener('hashchange', render);
document.addEventListener('DOMContentLoaded', render);
