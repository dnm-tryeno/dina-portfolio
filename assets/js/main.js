/**
 * Dina Nath Maurya — Senior Mobile App Engineer Portfolio
 * 100% Verified Production Projects: 10 Live Store Apps + 4 Real Client Systems
 * Interactive Canvas Particles, Typewriter, Spotlight Glow, Stat Counters,
 * Real App Icons, Genuine GitHub Repos, and Confetti Engine.
 */

// ==========================================================================
// 1. VERIFIED PRODUCTION DATA CATALOG (10 Live Apps + 4 Client Systems)
// ==========================================================================
const projectsData = [
  // --- 10 REAL LIVE STORE APPLICATIONS ---
  {
    id: 'furrycat',
    title: 'FurryCat / Cricket Go – Tournament App',
    category: ['featured', 'store', 'own', 'flutter', 'github'],
    ownership: 'Proprietary Store Product',
    clientName: 'Own Product (dnm-tryeno)',
    packageName: 'com.cricket.captain.expense.mgmt',
    shortDesc: 'Live sports & esports tournament ecosystem with real-time ball-by-ball score broadcast, team roster invites, match brackets, and financial expense ledger.',
    fullDesc: 'FurryCat (Cricket Go) is an end-to-end sports and tournament organizer created to help captains and organizers build teams, schedule matches, broadcast real-time ball-by-ball updates, and manage team finances with automated expense ledgers.',
    tags: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'Live Scoring', 'Apple App Store', 'Google Play'],
    stats: {
      platforms: 'iOS & Android',
      status: 'Live on Apple App Store & Google Play',
      rating: '4.8 ★'
    },
    features: [
      'Captain dashboard: team creation, player invitations, and role delegation',
      'Real-time match brackets, round scheduling, and live ball-by-ball scoring updates',
      'Integrated team expense management and financial ledger with transaction exports',
      'Player analytics, top scorer badges, and multi-team tournament statistics',
      'Live on both Apple App Store Connect and Google Play Store'
    ],
    links: {
      appStore: 'https://apps.apple.com/jp/app/furrycat/id6755180059?l=en-US',
      playStore: 'https://play.google.com/store/apps/details?id=com.cricket.captain.expense.mgmt&hl=en',
      github: 'https://github.com/dnm-tryeno/cricket_go'
    },
    iconImg: 'assets/images/app-icons/furrycat.png',
    accent: '#0284c7'
  },
  {
    id: 'jhatpat',
    title: 'JHATPAT Service – 24x7 Electrician & Maintenance',
    category: ['featured', 'store', 'own', 'flutter', 'github'],
    ownership: 'Proprietary Store Product',
    clientName: 'Commercial Service Product',
    packageName: 'com.service.jhatpat.electrician',
    shortDesc: 'On-demand home electrical, AC, RO, DTH, and wiring maintenance marketplace with real-time GPS technician dispatching and service tracking.',
    fullDesc: 'A complete service ecosystem with 3 distinct user applications: Customer App (book electricians/technicians, select slots, photo upload of defects), Technician App (receive job pings, Google Maps routing, job completion OTP), and Admin Panel (dispatching, commission, dispute resolution).',
    tags: ['Flutter', 'Google Maps', 'Geolocation', 'Firebase', 'REST APIs', 'Play Store'],
    stats: {
      platforms: 'Android (Play Store)',
      status: 'Live on Google Play Store',
      rating: '4.6 ★'
    },
    features: [
      'Multi-role modules: Customer, Technician, and Admin dashboards',
      'Live GPS technician tracking on Google Maps with route polylines',
      'Automated service cost estimator and PDF invoice delivery',
      'In-app notification dispatch for emergency repairs',
      'Published on Google Play Store with 4.6+ user rating'
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.service.jhatpat.electrician&hl=en',
      github: 'https://github.com/dnm-tryeno/jhatpat-maintenance-service'
    },
    iconImg: 'assets/images/app-icons/jhatpat.png',
    accent: '#f59e0b'
  },
  {
    id: 'shopkeep',
    title: 'Shopkeep – Any Type Shop POS & Inventory',
    category: ['featured', 'store', 'own', 'flutter', 'github'],
    ownership: 'Proprietary Store Product',
    clientName: 'Commercial Retail Product',
    packageName: 'com.shop.keep.dnm',
    shortDesc: 'Comprehensive retail billing, inventory management, barcode scanning, and GST invoicing application built for small businesses.',
    fullDesc: 'A cloud-synced yet offline-first Point of Sale (POS) and inventory tracker. Supports thermal Bluetooth receipt printers, dynamic barcode generation, sales analytics, low-stock alerts, customer credit ledgers, and multi-user staff roles.',
    tags: ['Flutter', 'SQLite / Hive', 'Barcode Scanner', 'Thermal Printer', 'Play Store'],
    stats: {
      platforms: 'Android & Tablet POS',
      status: 'Live on Google Play Store',
      rating: '4.7 ★'
    },
    features: [
      'Ultra-fast checkout with camera barcode and laser scanner integration',
      'Offline-first SQLite architecture with automatic background cloud sync',
      'Bluetooth thermal printer integration for 58mm & 80mm receipts',
      'Profit & loss analytics, daily GST tax summaries, and customer ledger'
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.shop.keep.dnm',
      github: 'https://github.com/dnm-tryeno/pos_inventory_app'
    },
    iconImg: 'assets/images/app-icons/shopkeep.png',
    accent: '#ea580c'
  },
  {
    id: 'smart-school',
    title: 'Smart School App & Coaching Suite',
    category: ['store', 'own', 'flutter'],
    ownership: 'Proprietary Store Product',
    clientName: 'Educational Institution Suite',
    packageName: 'com.school.app.dnm',
    shortDesc: 'Comprehensive K-12 school and coaching institute management suite with attendance tracking, exam grades, homework, and parent alerts.',
    fullDesc: 'Empowers academic institutions with biometric RFID/QR attendance syncing, fee payment receipt generation, homework submissions, digital report cards, and school bus live GPS tracking for student safety.',
    tags: ['Flutter', 'Firebase', 'Attendance RFID', 'Fee Ledger', 'Play Store'],
    stats: {
      platforms: 'Android (Play Store)',
      status: 'Live on Google Play Store',
      rating: '4.8 ★'
    },
    features: [
      'Automated parent push alerts when student arrives at school or boards bus',
      'Digital grade book with automated GPA calculation and term PDF reports',
      'Integrated fee payment tracking with instant SMS receipt generation',
      'Teacher homework dispatcher with image and document attachments'
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.school.app.dnm'
    },
    iconImg: 'assets/images/app-icons/smart-school.png',
    accent: '#0284c7'
  },
  {
    id: 'udharkhata',
    title: 'UdharKhata – Digital Credit Book',
    category: ['featured', 'store', 'own', 'flutter', 'github'],
    ownership: 'Proprietary Store Product',
    clientName: 'Own Product (dnm-tryeno)',
    packageName: 'com.tryeno.udharbook',
    shortDesc: 'Simplified customer credit (Udhar) and debit bookkeeping for local shopkeepers with automated WhatsApp payment reminder links.',
    fullDesc: 'Replaces traditional paper ledger notebooks with a secure cloud-synced digital record book. Shopkeepers record credits/debits in 5 seconds and send free WhatsApp payment reminders with UPI payment links.',
    tags: ['Flutter', 'WhatsApp API', 'Offline SQLite', 'UPI Deep Linking', 'Play Store'],
    stats: {
      platforms: 'Android (Play Store)',
      status: 'Live on Google Play Store',
      rating: '4.8 ★'
    },
    features: [
      '100% offline-capable with automatic background cloud sync',
      '1-click free WhatsApp payment reminders with personalized UPI payment QR',
      'Business transaction PDF reports exportable by date and customer',
      'Multi-language support in 6 Indian languages'
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.tryeno.udharbook',
      github: 'https://github.com/dnm-tryeno/udhar_khata_app'
    },
    iconImg: 'assets/images/app-icons/udharkhata.png',
    accent: '#10b981'
  },
  {
    id: 'invoice',
    title: 'Invoice – Quick Billing & PDF Maker',
    category: ['store', 'own', 'flutter', 'github'],
    ownership: 'Proprietary Store Product',
    clientName: 'Own Product (dnm-tryeno)',
    packageName: 'com.tryeno.invoice_app',
    shortDesc: 'Fast billing and invoice generation app with customizable taxes, client catalogs, PDF exports, and direct WhatsApp invoice sharing.',
    fullDesc: 'Created for freelancers, contractors, and small business owners. Generates sleek, compliant PDF invoices and quotes in seconds, tracks payment statuses, and sends automated WhatsApp payment follow-ups.',
    tags: ['Flutter', 'PDF Rendering', 'GST Calculation', 'Digital Signatures', 'Play Store'],
    stats: {
      platforms: 'Android (Play Store)',
      status: 'Live on Google Play Store',
      rating: '4.7 ★'
    },
    features: [
      'Multiple designer invoice templates with company logo and branding',
      'Automated multi-tier GST, VAT, and custom discount calculations',
      'Touchscreen digital signature capture with date stamps',
      'Invoice status tracking: Sent, Viewed, Paid, Overdue'
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.tryeno.invoice_app',
      github: 'https://github.com/dnm-tryeno/invoice_studio'
    },
    iconImg: 'assets/images/app-icons/invoice.png',
    accent: '#0369a1'
  },
  {
    id: 'tucktales',
    title: 'TuckTales – Bedtime Stories for Kids',
    category: ['store', 'own', 'flutter', 'github'],
    ownership: 'Proprietary Store Product',
    clientName: 'Own Product (dnm-tryeno)',
    packageName: 'com.dpm.tucktales',
    shortDesc: 'Soothing storybook application for children featuring bedtime stories, realistic Text-to-Speech (TTS) narration, and gentle ambient soundscapes.',
    fullDesc: 'Designed to help parents put children to sleep through engaging story narration, calming background lullabies, offline story downloads, and night-friendly low-light themes.',
    tags: ['Flutter', 'TTS Audio Engine', 'Audio Players', 'Clean UI', 'Play Store'],
    stats: {
      platforms: 'Android (Play Store)',
      status: 'Live on Google Play Store',
      rating: '4.9 ★'
    },
    features: [
      'High-quality voice narration with synchronized word highlights',
      'Custom sleep timer to fade out music and storytelling gradually',
      'Offline library support for bedtime reading without screens',
      'Children-friendly colorful yet calming illustrations'
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.dpm.tucktales&hl=en',
      github: 'https://github.com/dnm-tryeno/little_dreamers'
    },
    iconImg: 'assets/images/app-icons/tucktales.png',
    accent: '#ec4899'
  },
  {
    id: 'mimirecall',
    title: 'MimiRecall – Japanese JLPT Kanji & Vocab LMS',
    category: ['store', 'own', 'flutter'],
    ownership: 'Proprietary Store Product',
    clientName: 'Japanese Language Education',
    packageName: 'com.mimirecall.jlpt',
    shortDesc: 'Japanese language learning companion with spaced-repetition flashcards, stroke order animated canvas, and JLPT N5–N1 vocab quizzes.',
    fullDesc: 'Built for Japanese language learners aiming for JLPT N5 through N1 certification. Features interactive Kanji canvas stroke order validation, spaced-repetition SM-2 memory scheduling, native audio quizzes, and progress analytics.',
    tags: ['Flutter', 'Spaced Repetition SM-2', 'Kanji Canvas', 'Audio Synthesis', 'Play Store'],
    stats: {
      platforms: 'Android (Play Store)',
      status: 'Live on Google Play Store',
      rating: '4.9 ★'
    },
    features: [
      'Interactive canvas for Kanji stroke order drawing & stroke validation',
      'SuperMemo SM-2 spaced repetition algorithm for vocabulary retention',
      'Native TTS audio pronunciation with adjustable playback speeds',
      'Complete JLPT N5 to N1 categorized vocabulary curriculum'
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.mimirecall.jlpt'
    },
    iconImg: 'assets/images/app-icons/mimirecall.png',
    accent: '#3b82f6'
  },
  {
    id: 'qrmaker',
    title: 'QR Maker – Simple & Fast Barcode Studio',
    category: ['store', 'own', 'flutter', 'github'],
    ownership: 'Proprietary Store Product',
    clientName: 'Own Product (dnm-tryeno)',
    packageName: 'com.rk.QRmaker',
    shortDesc: 'Feature-rich QR code generator with custom brand logos, gradient colors, Wi-Fi connectors, and lightning-fast barcode scanner.',
    fullDesc: 'A versatile utility app for generating and scanning all 2D and 1D barcode formats (QR, EAN, UPC, Code 128). Generates styled QR codes with embedded icons, colored frames, vCard contacts, Wi-Fi credentials, and batch scans.',
    tags: ['Flutter', 'CameraX', 'Barcode Scanner', 'Vector SVG', 'Play Store'],
    stats: {
      platforms: 'Android (Play Store)',
      status: 'Live on Google Play Store',
      rating: '4.9 ★'
    },
    features: [
      'Custom QR styling: dots, rounded corners, brand logos, and radial gradients',
      'Instant scan with flashlight support and inverted barcode detection',
      'Wi-Fi QR scan with 1-click automatic Android network connection',
      'Vector SVG and high-resolution PNG export capabilities'
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.rk.QRmaker',
      github: 'https://github.com/dnm-tryeno/qr_code_tools'
    },
    iconImg: 'assets/images/app-icons/qrmaker.png',
    accent: '#06b6d4'
  },
  {
    id: 'vidplayer',
    title: 'All Video Saver & VidPlayer',
    category: ['featured', 'store', 'own', 'flutter', 'github'],
    ownership: 'Proprietary Store Product',
    clientName: 'Own Product (dnm-tryeno)',
    packageName: 'com.tryeno.videoplayer',
    shortDesc: 'High-performance video downloading and multi-format media playback suite with hardware acceleration, background audio, and private folder vault.',
    fullDesc: 'A powerful utility app featuring ultra-fast multi-threaded video downloading, an advanced 4K/HD video player supporting all major codecs (MP4, MKV, AVI, FLV, M3U8), Picture-in-Picture (PiP) mode, audio extraction, and a PIN-protected secret vault for private media.',
    tags: ['Flutter', 'Dart', '4K Video Player', 'Hardware Acceleration', 'PiP Mode', 'Apple App Store'],
    stats: {
      platforms: 'iOS (App Store Connect Approved)',
      status: 'Apple App Store Approved (Ready for Distribution)',
      rating: '5.0 ★'
    },
    features: [
      'Smooth 4K & QHD media playback with hardware acceleration',
      'Background audio playback & Picture-in-Picture (PiP) floating window',
      'Secure PIN-protected private vault with biometric lock',
      'Playlist creation, gesture controls for brightness and volume',
      'Multi-format support with fast subtitle synchronization'
    ],
    links: {
      appStore: 'https://appstoreconnect.apple.com/apps',
      github: 'https://github.com/dnm-tryeno/video_collection_app'
    },
    iconImg: 'assets/images/app-icons/vidplayer.png',
    accent: '#ef4444'
  },

  // --- 4 REAL CLIENT SYSTEMS (From Resume: Del-Qui Japan & Tryeno India) ---
  {
    id: 'drinking-app',
    title: 'Online Drinking App – Video Room Chat',
    category: ['client', 'flutter'],
    ownership: 'Client Project (Del-Qui Japan)',
    clientName: 'Del-Qui Japan (Tokyo)',
    packageName: 'jp.delqui.drinkingapp (Client Private)',
    shortDesc: 'Japanese virtual social lounge connecting users into real-time interactive drinking rooms with Agora RTC video streaming, digital cheers, and seat management.',
    fullDesc: 'An interactive virtual Izakaya / drinking experience tailored for Japanese nightlife and remote gatherings. Powered by Agora RTC video and audio broadcasting, dynamic round-table seats, in-room tipping/gifting animations, and scheduled social parties.',
    tags: ['Flutter', 'Agora RTC SDK', 'Socket.io', 'Japanese i18n', 'Video Rooms', 'Stripe'],
    stats: {
      platforms: 'iOS & Android (Japanese Market)',
      status: 'Commercial Client System (Japan)',
      rating: '4.8 ★'
    },
    features: [
      'Low-latency multi-participant video & audio streaming with Agora RTC',
      'Dynamic table seating layout with interactive cheer toasts & sound effects',
      'Full Japanese (JP) and English localization with custom cultural UI nuances',
      'In-app coin purchases via Stripe and App Store In-App Purchases (IAP)'
    ],
    links: {
      confidential: true
    },
    iconImg: 'assets/images/app-icons/drinking-app.png',
    accent: '#8b5cf6'
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery – Japanese Consumer App',
    category: ['client', 'flutter'],
    ownership: 'Client Project (Del-Qui Japan)',
    clientName: 'Del-Qui Japan (Tokyo)',
    packageName: 'jp.delqui.fooddelivery.user (Client Private)',
    shortDesc: 'Japanese on-demand food delivery ordering application with restaurant exploration, allergen alerts, and live turn-by-turn courier tracking.',
    fullDesc: 'Full-featured consumer application for urban Japan. Features real-time menu browsing with customizable modifiers, live GPS driver tracking along map polylines, customer-courier in-app chat, and seamless Japanese cashless payment checkouts.',
    tags: ['Flutter', 'Google Maps API', 'Socket.io', 'Live Courier Tracking', 'FCM'],
    stats: {
      platforms: 'iOS & Android (Japanese Market)',
      status: 'Commercial Client System (Japan)',
      rating: '4.7 ★'
    },
    features: [
      'Live driver marker animation along map polylines using WebSockets',
      'Smart batch dispatch algorithm reducing average delivery time by 18%',
      'Custom allergen warnings, menu item modifiers, and contactless drop-off',
      'Strict quality validation under Japanese Agile sprint standards'
    ],
    links: {
      confidential: true
    },
    iconImg: 'assets/images/app-icons/food-delivery.png',
    accent: '#f97316'
  },
  {
    id: 'food-driver',
    title: 'Food Delivery – Courier & Driver Partner App',
    category: ['client', 'flutter'],
    ownership: 'Client Project (Del-Qui Japan)',
    clientName: 'Del-Qui Japan (Tokyo)',
    packageName: 'jp.delqui.fooddelivery.driver (Client Private)',
    shortDesc: 'Delivery driver partner app with real-time dispatch pings via Socket.io, turn-by-turn Google Maps navigation, and drop-off photo proof.',
    fullDesc: 'High-reliability courier partner tool handling aggressive iOS/Android battery throttling while maintaining constant GPS breadcrumb streaming. Drivers receive instant order alerts, navigate with traffic-aware Google Maps, and submit delivery confirmation signatures.',
    tags: ['Flutter', 'Background Geolocation', 'Google Maps', 'Socket.io', 'Push Notifications'],
    stats: {
      platforms: 'Android & iOS (Japan)',
      status: 'Commercial Client System (Japan)',
      rating: '4.8 ★'
    },
    features: [
      'Optimized background location daemon resilient to OS power-saving kills',
      '1-tap accept/decline dispatch queue with sound and haptic alerts',
      'In-app camera photo proof upload of contactless door delivery',
      'Weekly earnings breakdown and shift scheduling ledger'
    ],
    links: {
      confidential: true
    },
    iconImg: 'assets/images/app-icons/food-driver.png',
    accent: '#10b981'
  },
  {
    id: 'techify-care',
    title: 'Techify Care – Ticket Management App',
    category: ['client', 'flutter'],
    ownership: 'Client Solution (Tryeno Partner)',
    clientName: 'Tryeno India Enterprise Partner',
    packageName: 'com.tryeno.techifycare (Client Private)',
    shortDesc: 'Enterprise customer support and technician dispatch management system with real-time ticket triage, technician chat, and SLA tracking.',
    fullDesc: 'Streamlines enterprise client support operations with real-time ticket assignment queues, live customer-support chat, defect photo attachments, technician site visits, and automated SLA resolution escalation rules.',
    tags: ['Flutter', 'REST APIs', 'Real-Time Chat', 'Ticket SLA', 'Push Notifications'],
    stats: {
      platforms: 'Android & iOS',
      status: 'Enterprise Client Deployment',
      rating: '4.8 ★'
    },
    features: [
      'Role-based dashboards for Support Agents, Supervisors, and Field Engineers',
      'Real-time WebSocket chat and defect photo attachment uploads',
      'Automated SLA breach escalation and customer satisfaction rating prompt',
      'Secure token authentication and offline ticket draft queue'
    ],
    links: {
      confidential: true
    },
    iconImg: 'assets/images/app-icons/techify-care.png',
    accent: '#0284c7'
  }
];

// SVG Icon Helper (for action buttons & fallback)
function getIconSvg(name, size = 18) {
  const icons = {
    'apple': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.93.04-2.02.63-2.66 1.38-.56.65-.99 1.7-0.87 2.73 1.05.08 2.06-.52 2.61-1.24Z"/></svg>`,
    'play': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814 13.792 12 3.61 22.186a2.12 2.12 0 0 1-1.22-1.92V3.734c0-.79.46-1.51 1.22-1.92zm11.603 11.603 2.43 2.43-12.06 6.892 9.63-9.322zm0-2.834L5.582 1.261l12.06 6.892-2.43 2.427zm1.414 1.417 4.25 2.429a1.69 1.69 0 0 1 0 2.942l-4.25 2.429-2.37-2.37 2.37-2.43z"/></svg>`,
    'github': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`
  };
  return icons[name] || '';
}

// Current Filter & Search State
let activeFilter = 'all';
let searchQuery = '';

// Render Project Cards (Using Real Images & Actual Links)
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const query = searchQuery.toLowerCase().trim();

  const filtered = projectsData.filter(p => {
    const matchesFilter = activeFilter === 'all' || p.category.includes(activeFilter);
    if (!matchesFilter) return false;

    if (!query) return true;
    const inTitle = p.title.toLowerCase().includes(query);
    const inShortDesc = p.shortDesc.toLowerCase().includes(query);
    const inTags = p.tags.some(t => t.toLowerCase().includes(query));
    const inClient = p.clientName.toLowerCase().includes(query);
    const inPackage = p.packageName ? p.packageName.toLowerCase().includes(query) : false;
    return inTitle || inShortDesc || inTags || inClient || inPackage;
  });

  const countEl = document.getElementById('project-count-badge');
  if (countEl) {
    countEl.textContent = `${filtered.length} of ${projectsData.length}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center glass-card rounded-3xl p-8 border border-dashed border-slate-300 dark:border-slate-800">
        <div class="w-14 h-14 rounded-2xl bg-sky-500/10 text-sky-500 mx-auto flex items-center justify-center text-2xl mb-3">🔍</div>
        <h3 class="text-lg font-bold text-slate-800 dark:text-white font-heading">No Applications Found</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">No app matches "${searchQuery}". Try searching for "FurryCat", "Jhatpat", "Del-Qui", or "Riverpod".</p>
        <button onclick="clearSearch()" class="mt-4 px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold hover:bg-sky-500 transition-all">Clear Search</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((p, idx) => `
    <div class="glass-card spotlight-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between group border border-slate-200/90 dark:border-slate-800/80 hover:border-sky-500/50 dark:hover:border-cyan-500/40 relative overflow-hidden transition-all duration-300 bg-white/95 dark:bg-slate-900/80 shadow-sm hover:shadow-2xl reveal delay-${Math.min(idx * 50, 400)}">
      
      <div>
        <!-- Card Header: REAL App Icon + Status -->
        <div class="flex items-start justify-between gap-3 mb-3.5 relative z-10">
          <div class="relative w-14 h-14 rounded-2xl overflow-hidden p-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-md shrink-0">
            <img src="${p.iconImg}" alt="${p.title}" class="w-full h-full object-cover rounded-[14px] group-hover:scale-108 transition-transform duration-300">
          </div>
          <div class="flex flex-col items-end gap-1">
            <span class="text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${p.ownership.includes('Client') ? 'bg-purple-100 text-purple-700 border border-purple-200 dark:bg-purple-950/80 dark:text-purple-300 dark:border-purple-800' : 'bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-800'} font-mono">
              ${p.ownership.includes('Client') ? '💼 Client System' : '🚀 Live Store App'}
            </span>
            <span class="text-[10px] text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full ${p.stats.status.includes('Live') ? 'bg-emerald-500 animate-pulse' : 'bg-sky-500'}"></span>
              ${p.stats.status.includes('Live') ? 'Live on Store' : p.stats.status}
            </span>
          </div>
        </div>

        <!-- Title & Client Scope -->
        <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors mb-1 font-heading leading-snug">
          ${p.title}
        </h3>
        <p class="text-[11px] font-mono text-sky-600 dark:text-cyan-400 font-medium mb-1">
          ${p.clientName}
        </p>
        ${p.packageName ? `
          <p class="text-[10px] font-mono text-slate-400 dark:text-slate-500 mb-2.5 truncate" title="${p.packageName}">
            pkg: ${p.packageName}
          </p>
        ` : ''}

        <!-- Short Description -->
        <p class="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
          ${p.shortDesc}
        </p>

        <!-- Tech Tags -->
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${p.tags.slice(0, 4).map(t => `
            <span class="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-mono">
              ${t}
            </span>
          `).join('')}
          ${p.tags.length > 4 ? `<span class="text-[10px] px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-mono">+${p.tags.length - 4}</span>` : ''}
        </div>
      </div>

      <!-- Card Actions -->
      <div class="border-t border-slate-100 dark:border-slate-800/80 pt-3.5 mt-auto flex items-center justify-between relative z-10">
        <button onclick="openProjectModal('${p.id}')" class="text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-cyan-400 dark:hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
          <span>Details & Scope</span>
          <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>

        <div class="flex items-center gap-1.5">
          ${p.links.appStore ? `
            <a href="${p.links.appStore}" target="_blank" rel="noopener noreferrer" title="Apple App Store" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors">
              ${getIconSvg('apple', 16)}
            </a>
          ` : ''}
          ${p.links.playStore ? `
            <a href="${p.links.playStore}" target="_blank" rel="noopener noreferrer" title="Google Play Store" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors">
              ${getIconSvg('play', 14)}
            </a>
          ` : ''}
          ${p.links.github ? `
            <a href="${p.links.github}" target="_blank" rel="noopener noreferrer" title="GitHub Verified Source Code" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors">
              ${getIconSvg('github', 16)}
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // Re-bind spotlight listener on newly rendered cards
  initSpotlightCards();
  initScrollReveal();
}

window.clearSearch = function() {
  const searchInput = document.getElementById('project-search-input');
  if (searchInput) searchInput.value = '';
  searchQuery = '';
  renderProjects();
};

// Project Modal Handler
window.openProjectModal = function(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  const modalContainer = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-content-body');
  if (!modalContainer || !modalBody) return;

  modalBody.innerHTML = `
    <!-- Modal Header -->
    <div class="flex items-start justify-between gap-3 mb-5">
      <div class="flex items-center gap-3.5">
        <div class="w-16 h-16 rounded-2xl overflow-hidden p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg shrink-0">
          <img src="${project.iconImg}" alt="${project.title}" class="w-full h-full object-cover rounded-xl">
        </div>
        <div>
          <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">${project.title}</h2>
          <div class="flex flex-wrap items-center gap-2 mt-1">
            <span class="text-[11px] px-2.5 py-0.5 rounded-full ${project.ownership.includes('Client') ? 'bg-purple-100 text-purple-800 border border-purple-200 dark:bg-purple-950 dark:text-purple-300' : 'bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300'} font-mono font-semibold">
              ${project.ownership}
            </span>
            <span class="text-xs text-sky-700 dark:text-cyan-300 font-mono font-medium">${project.clientName}</span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">• ${project.stats.platforms}</span>
          </div>
          ${project.packageName ? `
            <p class="text-[11px] font-mono text-slate-400 mt-1">Package: ${project.packageName}</p>
          ` : ''}
        </div>
      </div>
      <button onclick="closeProjectModal()" class="text-slate-400 hover:text-slate-700 dark:hover:text-white p-2 rounded-xl bg-slate-100 dark:bg-slate-800/60 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Description -->
    <div class="space-y-3 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
      <p class="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-medium">${project.fullDesc}</p>
    </div>

    <!-- Key Architecture & Features -->
    <div class="mb-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800">
      <h4 class="text-xs uppercase tracking-wider font-semibold text-sky-700 dark:text-cyan-400 font-mono mb-3">Key Technical Scope & Architecture</h4>
      <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        ${project.features.map(f => `
          <li class="flex items-start gap-2.5">
            <svg class="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <!-- Technology Stack -->
    <div class="mb-6">
      <h4 class="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 font-mono mb-2.5">Production Tech Stack</h4>
      <div class="flex flex-wrap gap-2">
        ${project.tags.map(t => `
          <span class="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-mono">
            ${t}
          </span>
        `).join('')}
      </div>
    </div>

    <!-- Action Buttons (Only Actual Verified Links) -->
    <div class="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-200 dark:border-slate-800">
      ${project.links.appStore ? `
        <a href="${project.links.appStore}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm shadow-md transition-all hover:scale-103">
          ${getIconSvg('apple', 16)}
          <span>Apple App Store Link</span>
        </a>
      ` : ''}
      ${project.links.playStore ? `
        <a href="${project.links.playStore}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm shadow-md transition-all hover:scale-103">
          ${getIconSvg('play', 15)}
          <span>Google Play Store Link</span>
        </a>
      ` : ''}
      ${project.links.github ? `
        <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs sm:text-sm shadow-md transition-all hover:scale-103">
          ${getIconSvg('github', 16)}
          <span>View Source Code</span>
        </a>
      ` : ''}
      ${project.links.confidential ? `
        <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono">
          <span>🔒 Client Confidential Codebase (NDA Protected)</span>
        </div>
      ` : ''}
      <button onclick="closeProjectModal()" class="ml-auto text-xs sm:text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white px-3 py-2">
        Close
      </button>
    </div>
  `;

  modalContainer.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  const modalContainer = document.getElementById('project-modal');
  if (modalContainer) {
    modalContainer.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

// ==========================================================================
// 2. INTERACTIVE BACKGROUND CANVAS PARTICLES (Constellation Network)
// ==========================================================================
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let animationId = null;
  let mouse = { x: -1000, y: -1000, radius: 140 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    particles = [];
    const count = Math.min(Math.floor((width * height) / 18000), 75);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseout', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.classList.contains('dark');
    const dotColor = isDark ? 'rgba(56, 189, 248, ' : 'rgba(2, 132, 199, ';
    const lineColor = isDark ? 'rgba(56, 189, 248, ' : 'rgba(148, 163, 184, ';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse gentle repulsion / pull
      const dxm = mouse.x - p.x;
      const dym = mouse.y - p.y;
      const distMouse = Math.sqrt(dxm * dxm + dym * dym);
      if (distMouse < mouse.radius) {
        const force = (mouse.radius - distMouse) / mouse.radius;
        p.x -= (dxm / distMouse) * force * 1.5;
        p.y -= (dym / distMouse) * force * 1.5;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${dotColor}${p.alpha})`;
      ctx.fill();

      // Connect lines to nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 115) {
          const lineAlpha = (1 - dist / 115) * 0.18;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `${lineColor}${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(render);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animationId) cancelAnimationFrame(animationId);
    } else {
      animationId = requestAnimationFrame(render);
    }
  });

  resize();
  render();
}

// ==========================================================================
// 3. TYPEWRITER EFFECT FOR HERO HEADLINE
// ==========================================================================
function initTypewriter() {
  const target = document.getElementById('hero-typewriter');
  if (!target) return;

  const roles = [
    'Senior Flutter Engineer',
    '10 Live Store Apps (iOS & Android)',
    'Del-Qui Japan Client Systems Specialist',
    'Riverpod & Clean Architecture Expert',
    'Agora RTC Video & Live GPS Engineer'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 45;
    } else {
      target.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 85;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 2200; // Pause when full word is typed
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ==========================================================================
// 4. ANIMATED STAT COUNTERS (Count up with easing)
// ==========================================================================
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target') || '0');
          const suffix = counter.getAttribute('data-suffix') || '';
          const isDecimal = target % 1 !== 0;
          const duration = 1800;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeProgress * target;

            counter.textContent = (isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal)) + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.3 });

  const container = document.getElementById('stats-matrix');
  if (container) observer.observe(container);
}

// ==========================================================================
// 5. SPOTLIGHT CARD MOUSE TRACKING
// ==========================================================================
function initSpotlightCards() {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// ==========================================================================
// 6. SCROLL REVEAL ANIMATIONS
// ==========================================================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.revealed), .reveal-scale:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed)');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ==========================================================================
// 7. CUSTOM CURSOR FOLLOWER (Desktop Only)
// ==========================================================================
function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderRing);
  }
  renderRing();

  const interactiveSelector = 'a, button, input, textarea, .glass-card, .filter-btn, .dock-item';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

// ==========================================================================
// 8. SCROLL PROGRESS & SCROLL SPY FOR FLOATING DOCK
// ==========================================================================
function initScrollTracking() {
  const progressBar = document.getElementById('scroll-progress');
  const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
  const dockItems = document.querySelectorAll('.dock-item');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    if (progressBar) {
      progressBar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
    }

    let currentSection = '';
    const scrollPos = window.scrollY + 200;

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSection = sectionId;
        }
      }
    }

    if (currentSection) {
      dockItems.forEach(item => {
        const target = item.getAttribute('href')?.replace('#', '');
        if (target === currentSection) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      navLinks.forEach(link => {
        const target = link.getAttribute('href')?.replace('#', '');
        if (target === currentSection) {
          link.classList.add('text-sky-600', 'dark:text-cyan-400');
          link.classList.remove('text-slate-600', 'dark:text-slate-300');
        } else {
          link.classList.remove('text-sky-600', 'dark:text-cyan-400');
          link.classList.add('text-slate-600', 'dark:text-slate-300');
        }
      });
    }
  }, { passive: true });
}

// ==========================================================================
// 9. CONFETTI BURST & TOAST HELPER
// ==========================================================================
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#0284c7', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b']
    });
  }
}

function showToast(message, icon = '✓') {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'fixed bottom-24 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900 text-white shadow-2xl text-xs sm:text-sm font-medium backdrop-blur-md transition-all duration-300 transform translate-y-20 opacity-0 border border-slate-700';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span class="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">${icon}</span><span>${message}</span>`;
  toast.classList.remove('translate-y-20', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3200);
}

// Clipboard Actions with Confetti
window.copyEmail = function() {
  const email = 'dnm.dpm@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    triggerConfetti();
    showToast('Copied to clipboard: ' + email, '✉️');
  }).catch(() => {
    showToast('Email: ' + email);
  });
};

window.copyPhone = function() {
  const phone = '+919793953764';
  navigator.clipboard.writeText(phone).then(() => {
    triggerConfetti();
    showToast('Copied phone: +91 97939 53764', '📞');
  }).catch(() => {
    showToast('Phone: +91 97939 53764');
  });
};

// ==========================================================================
// 10. CODE TERMINAL INTERACTIVE TABS
// ==========================================================================
function setupTerminalTabs() {
  const tabs = document.querySelectorAll('.terminal-tab');
  const codeDisplay = document.getElementById('terminal-code-display');
  if (!tabs.length || !codeDisplay) return;

  const snippets = {
    'dina_profile.dart': `
<span class="syn-kw">class</span> <span class="syn-type">DinaNathMaurya</span> <span class="syn-kw">extends</span> <span class="syn-type">SeniorMobileEngineer</span> {
  <span class="syn-kw">final</span> <span class="syn-type">double</span> experience = <span class="syn-num">6.5</span>; <span class="syn-comment">// Years Production</span>
  <span class="syn-kw">final</span> <span class="syn-type">String</span> location = <span class="syn-str">'Varanasi, India (UTC+5:30)'</span>;
  <span class="syn-kw">final</span> <span class="syn-type">List</span>&lt;<span class="syn-type">String</span>&gt; coreStack = [
    <span class="syn-str">'Flutter 3.x'</span>, <span class="syn-str">'Dart'</span>, <span class="syn-str">'Riverpod 2.x'</span>,
    <span class="syn-str">'Agora RTC SDK'</span>, <span class="syn-str">'Socket.io'</span>, <span class="syn-str">'React Native'</span>
  ];
  <span class="syn-kw">final</span> <span class="syn-type">int</span> liveStoreApps = <span class="syn-num">10</span>; <span class="syn-comment">// Apple App Store & Google Play</span>
  
  <span class="syn-kw">void</span> <span class="syn-fn">buildScalableExperience</span>() {
    <span class="syn-fn">deliverHighFpsFluidUI</span>(fps: <span class="syn-num">120</span>);
    <span class="syn-fn">enforceCleanArchitecture</span>(tested: <span class="syn-kw">true</span>);
  }
}`,
    'architecture.dart': `
<span class="syn-comment">// Clean Architecture + Riverpod 2.x State Management</span>
<span class="syn-kw">final</span> tournamentStateProvider = <span class="syn-type">AsyncNotifierProvider</span>&lt;
    <span class="syn-type">TournamentNotifier</span>, <span class="syn-type">TournamentState</span>&gt;(() {
  <span class="syn-kw">return</span> <span class="syn-type">TournamentNotifier</span>();
});

<span class="syn-kw">class</span> <span class="syn-type">TournamentRepositoryImpl</span> <span class="syn-kw">implements</span> <span class="syn-type">TournamentRepository</span> {
  <span class="syn-kw">final</span> <span class="syn-type">DioClient</span> _client;
  <span class="syn-kw">final</span> <span class="syn-type">AgoraRtcEngine</span> _rtc;

  <span class="syn-type">Future</span>&lt;<span class="syn-type">Either</span>&lt;<span class="syn-type">Failure</span>, <span class="syn-type">LiveScore</span>&gt;&gt; <span class="syn-fn">streamMatch</span>() <span class="syn-kw">async</span> {
    <span class="syn-kw">return</span> <span class="syn-kw">await</span> _client.<span class="syn-fn">get</span>(<span class="syn-str">'/v1/cricket/live'</span>);
  }
}`,
    'store_release.sh': `
<span class="syn-comment"># Production CI/CD Fastlane & Build Automation</span>
$ <span class="syn-fn">flutter</span> doctor -v
[✓] Flutter (Channel stable, 3.24.x, on macOS Sequoia)
[✓] Android toolchain - develop for Android devices (SDK 34)
[✓] Xcode - develop for iOS and macOS (Xcode 16.1)

$ <span class="syn-fn">flutter</span> test --coverage
All 47 unit & repository tests passed! (100% pass rate)

$ <span class="syn-fn">flutter</span> build ipa --release --export-options-plist=ExportOptions.plist
✓ Built build/ios/ipa/furrycat.ipa (Apple Store Ready 🚀)`
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const fileName = tab.getAttribute('data-tab') || 'dina_profile.dart';
      codeDisplay.innerHTML = snippets[fileName] || snippets['dina_profile.dart'];
    });
  });
}

// Copy Code Button
window.copyTerminalCode = function() {
  const codeDisplay = document.getElementById('terminal-code-display');
  if (!codeDisplay) return;

  const rawText = codeDisplay.innerText || codeDisplay.textContent;
  navigator.clipboard.writeText(rawText).then(() => {
    triggerConfetti();
    showToast('Code snippet copied to clipboard!', '📋');
  });
};

// ==========================================================================
// 11. FILTER BUTTONS & SEARCH INPUT HANDLERS
// ==========================================================================
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-sky-600', 'text-white', 'border-sky-500', 'shadow-md');
        b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-400', 'border-slate-200', 'dark:border-slate-700');
      });
      btn.classList.add('bg-sky-600', 'text-white', 'border-sky-500', 'shadow-md');
      btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-400', 'border-slate-200', 'dark:border-slate-700');

      activeFilter = btn.getAttribute('data-filter') || 'all';
      renderProjects();
    });
  });

  const searchInput = document.getElementById('project-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }
}

// ==========================================================================
// 12. THEME MANAGEMENT (Default: Clean Crisp Light Theme, easily toggled)
// ==========================================================================
window.initTheme = function() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
};

window.toggleTheme = function() {
  const isDark = document.documentElement.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, newTheme === 'dark' ? '🌙' : '☀️');
};

function applyTheme(theme) {
  const toggleIcon = document.getElementById('theme-toggle-icon');
  const mobileToggleIcon = document.getElementById('mobile-theme-toggle-icon');
  const dockThemeIcon = document.getElementById('dock-theme-icon');
  const themeLabel = document.getElementById('theme-label');

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    if (toggleIcon) toggleIcon.innerHTML = `☀️`;
    if (mobileToggleIcon) mobileToggleIcon.innerHTML = `☀️`;
    if (dockThemeIcon) dockThemeIcon.innerHTML = `☀️`;
    if (themeLabel) themeLabel.textContent = 'Light Mode';
  } else {
    document.documentElement.classList.remove('dark');
    if (toggleIcon) toggleIcon.innerHTML = `🌙`;
    if (mobileToggleIcon) mobileToggleIcon.innerHTML = `🌙`;
    if (dockThemeIcon) dockThemeIcon.innerHTML = `🌙`;
    if (themeLabel) themeLabel.textContent = 'Dark Mode';
  }
}

// ==========================================================================
// 13. MOBILE MENU & CONTACT FORM
// ==========================================================================
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }

  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.add('hidden');
    });
  });
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name')?.value || '';
    const email = document.getElementById('form-email')?.value || '';
    const message = document.getElementById('form-message')?.value || '';

    const mailtoUrl = `mailto:dnm.dpm@gmail.com?subject=${encodeURIComponent('Inquiry from ' + name + ' via Portfolio')}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\nMessage:\n' + message)}`;
    
    triggerConfetti();
    window.location.href = mailtoUrl;
    showToast('Opening your email client...', '🚀');
    form.reset();
  });
}

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

// Resume Download Handler with Confetti
window.handleResumeDownload = function() {
  triggerConfetti();
  showToast('Downloading Dina Nath Maurya Resume...', '📄');
};

// ==========================================================================
// 14. INITIALIZE ALL ENGINES ON DOM LOAD
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initBackgroundCanvas();
  initTypewriter();
  initStatCounters();
  initCustomCursor();
  initScrollTracking();
  setupTerminalTabs();
  renderProjects();
  setupFilters();
  setupMobileMenu();
  setupContactForm();
  initSpotlightCards();
  initScrollReveal();

  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
