/**
 * Dina Nath Maurya - Senior Mobile App Engineer Portfolio
 * Complete Catalog: 25+ Commercial Client Projects & Proprietary Products
 */

const projectsData = [
  // --- 1. PROPRIETARY & STORE APPS ---
  {
    id: 'furrycat',
    title: 'FurryCat / Cricket Go – Tournament App',
    category: ['featured', 'store', 'own', 'flutter'],
    ownership: 'Proprietary Product',
    clientName: 'Own Product (dnm-tryeno)',
    shortDesc: 'Complete cricket & esports tournament management ecosystem with live score tracking, team rosters, player invites, and expense ledger.',
    fullDesc: 'FurryCat (Cricket Go) is an end-to-end sports and tournament organizer created to help captains and organizers build teams, schedule matches, broadcast real-time ball-by-ball updates, and manage team finances with automated expense ledgers.',
    tags: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'Live Scoring', 'Apple App Store', 'Google Play'],
    stats: {
      platforms: 'iOS & Android',
      status: 'Live on Apple App Store & Play Store',
      rating: '4.8 ★'
    },
    features: [
      'Captain dashboard: team creation, player invites, and role delegation',
      'Real-time match brackets, round scheduling, and live ball-by-ball scoring',
      'Integrated team expense management and financial ledger',
      'Player analytics, top scorer badges, and tournament statistics',
      'Published on both Apple App Store Connect and Google Play Store'
    ],
    links: {
      appStore: 'https://apps.apple.com/jp/app/furrycat/id6755180059?l=en-US',
      playStore: 'https://play.google.com/store/apps/details?id=com.cricket.captain.expense.mgmt&hl=en',
      github: 'https://github.com/dnm-tryeno/cricket_go'
    },
    icon: 'trophy',
    color: 'from-amber-500/10 to-orange-500/10',
    accent: '#f59e0b'
  },
  {
    id: 'vidplayer',
    title: 'All Video Saver & VidPlayer',
    category: ['featured', 'store', 'own', 'flutter'],
    ownership: 'Proprietary Product',
    clientName: 'Own Product (dnm-tryeno)',
    shortDesc: 'High-performance video downloading and multi-format media playback suite with hardware acceleration, background audio, and private folder vault.',
    fullDesc: 'A powerful utility app featuring ultra-fast multi-threaded video downloading, an advanced 4K/HD video player supporting all major codecs (MP4, MKV, AVI, FLV, M3U8), Picture-in-Picture (PiP) mode, audio extraction, and a PIN-protected secret vault for private media.',
    tags: ['Flutter', 'Dart', 'Video Player', 'Storage Management', 'Apple App Store'],
    stats: {
      platforms: 'iOS & Android',
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
      playStore: 'https://github.com/dnm-tryeno',
      github: 'https://github.com/dnm-tryeno/video_collection_app'
    },
    icon: 'play-circle',
    color: 'from-red-500/10 to-rose-500/10',
    accent: '#ef4444'
  },
  {
    id: 'jhatpat',
    title: 'Jhatpat Maintenance & Electrician',
    category: ['featured', 'store', 'own', 'flutter'],
    ownership: 'Proprietary Product',
    clientName: 'Commercial Service Product',
    shortDesc: '24x7 on-demand home & electrical maintenance marketplace covering TV, RO, DTH, AC/cooler, and wiring with real-time GPS dispatching.',
    fullDesc: 'A complete service ecosystem with 3 distinct user applications: Customer App (book electricians/technicians, select slots, photo upload of defects), Technician App (receive job pings, Google Maps routing, job completion OTP), and Admin Panel (dispatching, commission, dispute resolution).',
    tags: ['Flutter', 'Google Maps', 'Geolocation', 'Firebase', 'REST APIs', 'Play Store'],
    stats: {
      platforms: 'Android & iOS Ready',
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
    icon: 'zap',
    color: 'from-yellow-500/10 to-amber-500/10',
    accent: '#eab308'
  },
  {
    id: 'shopkeep',
    title: 'Any Type Shop – POS & Inventory',
    category: ['featured', 'store', 'own', 'flutter'],
    ownership: 'Proprietary Product',
    clientName: 'Retail SaaS Product',
    shortDesc: 'Offline-first retail POS and inventory management app with barcode scanning, automated PDF invoice generation, and revenue analytics.',
    fullDesc: 'Designed for retail businesses, supermarkets, and specialty shops to streamline billing and inventory without requiring internet connectivity. Features barcode cataloging, low-stock warnings, customer credit tracking, thermal printer integration, and PDF receipt exports.',
    tags: ['Flutter', 'Offline-First', 'SQLite', 'PDF Generation', 'Play Store'],
    stats: {
      platforms: 'Android (Tablet & Phone)',
      status: 'Live on Google Play Store',
      rating: '4.7 ★'
    },
    features: [
      'Instant barcode scanning and inventory lookup',
      'Professional GST and non-GST PDF bill generation and sharing via WhatsApp',
      'Daily, weekly, and monthly sales profit/loss reports',
      'Customer ledger (Khata) with payment due reminders',
      'Automatic local database backup and cloud sync options'
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.shop.keep.dnm&hl=en',
      github: 'https://github.com/dnm-tryeno/shop_keep_flutter_app'
    },
    icon: 'shopping-bag',
    color: 'from-emerald-500/10 to-teal-500/10',
    accent: '#10b981'
  },

  // --- 2. CLIENT PROJECTS (JAPAN & GLOBAL) ---
  {
    id: 'drinking-app',
    title: 'Online Drinking App – Video Rooms',
    category: ['featured', 'client', 'flutter'],
    ownership: 'Client Project (Del-Qui Japan)',
    clientName: 'Del-Qui Japan Enterprise',
    shortDesc: 'Real-time social video party app built for Japanese clients featuring Agora RTC interactive video rooms, multi-user seat allocation, and live interactions.',
    fullDesc: 'Developed for Del-Qui Japan. An interactive social networking app allowing users to join virtual bars, drink together, and socialize. Built with Agora Video SDK, WebSockets, and Riverpod for synchronized interactive room features.',
    tags: ['Flutter', 'Agora RTC SDK', 'WebSockets', 'Riverpod', 'Del-Qui Japan', 'Agile'],
    stats: {
      platforms: 'iOS & Android',
      status: 'Delivered for Japanese Client',
      rating: 'Enterprise'
    },
    features: [
      'Low-latency multi-speaker video broadcasting via Agora RTC',
      'Dynamic seat reservation, table switching, and room moderation',
      'User privacy controls: mute audio/video, block users, report tools',
      'Virtual cheers & interactive animated room gifts',
      'Bilingual interface (Japanese & English)'
    ],
    links: {
      github: 'https://github.com/dnm-tryeno'
    },
    icon: 'video',
    color: 'from-purple-500/10 to-indigo-500/10',
    accent: '#8b5cf6'
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery & Courier Tracking Suite',
    category: ['featured', 'client', 'flutter'],
    ownership: 'Client Project (Del-Qui Japan)',
    clientName: 'Del-Qui Japan Enterprise',
    shortDesc: 'End-to-end food ordering and courier delivery system with live driver navigation on Google Maps, Socket.io event dispatch, and Stripe checkout.',
    fullDesc: 'A dual-application food ordering and dispatching ecosystem. The Customer App provides restaurant discovery, menu customization, and order tracking. The Driver App delivers turn-by-turn navigation, instant order ping notifications, and order completion proof.',
    tags: ['Flutter', 'Google Maps API', 'Socket.io', 'Stripe', 'Node.js Backend', 'Japan'],
    stats: {
      platforms: 'iOS & Android',
      status: 'Delivered for Japanese Client',
      rating: 'Enterprise'
    },
    features: [
      'Live GPS courier tracking with smooth animated polylines',
      'Real-time order state updates via Socket.io channels',
      'Stripe payment gateway integration with Apple Pay / Google Pay',
      'Driver earnings breakdown, route optimization, and customer in-app chat',
      'Push notifications via Firebase Cloud Messaging (FCM)'
    ],
    links: {
      github: 'https://github.com/dnm-tryeno'
    },
    icon: 'truck',
    color: 'from-cyan-500/10 to-blue-500/10',
    accent: '#0284c7'
  },
  {
    id: 'japanese-learning',
    title: 'Japanese Language Learning App',
    category: ['client', 'flutter'],
    ownership: 'Client Project',
    clientName: 'Tryeno HQ / Japanese Education Client',
    shortDesc: 'Interactive language learning app for Hiragana, Katakana, and Kanji with audio pronunciation, flashcards, and retention quizzes.',
    fullDesc: 'Contributed to the development of a comprehensive Japanese learning companion. Features stroke-order animation for Kana/Kanji, native speaker audio samples, spaced repetition flashcard algorithm, and JLPT N5/N4 exam practice modules.',
    tags: ['Flutter', 'Dart', 'Audio Player', 'Spaced Repetition', 'i18n Localization'],
    stats: {
      platforms: 'iOS & Android',
      status: 'Client Production App',
      rating: '4.8 ★'
    },
    features: [
      'Interactive Kana writing canvas with real-time stroke order checking',
      'High-clarity native audio pronunciation playback',
      'Spaced repetition memory quizzes to optimize vocabulary retention',
      'Offline lesson packs for learning on the go'
    ],
    links: {
      github: 'https://github.com/tryeno-hq/japanese_learning_app'
    },
    icon: 'book-open',
    color: 'from-rose-500/10 to-red-500/10',
    accent: '#f43f5e'
  },
  {
    id: 'shopnest',
    title: 'ShopNest – Retail eCommerce & Backend',
    category: ['client'],
    ownership: 'Client Project',
    clientName: 'eCommerce Client (Mohts)',
    shortDesc: 'Modern shopping app and admin API backend featuring product catalog, promotional coupons, multi-gateway payments, and order tracking.',
    fullDesc: 'Collaborated on both the mobile frontend and PHP API backend for ShopNest. Managed product catalogs, customer authentication, shopping cart state, order workflows, and payment gateway webhooks.',
    tags: ['Flutter', 'TypeScript', 'PHP Backend', 'REST APIs', 'Payment Gateways'],
    stats: {
      platforms: 'Mobile App + Admin API',
      status: 'Commercial Client Project',
      rating: 'Enterprise'
    },
    features: [
      'Comprehensive product catalog with multi-variant attributes and search',
      'Secure checkout with instant coupon code validation and discounts',
      'Synchronized cart state across mobile app and web frontend',
      'Custom PHP backend endpoints for order management and fulfillment'
    ],
    links: {
      github: 'https://github.com/Mohts/shopnest'
    },
    icon: 'shopping-bag',
    color: 'from-teal-500/10 to-emerald-500/10',
    accent: '#0d9488'
  },
  {
    id: 'bic-app',
    title: 'BiC-App – Business Intelligence & Collaboration',
    category: ['client', 'flutter'],
    ownership: 'Client Project',
    clientName: 'Enterprise Client (Abhijeet03s)',
    shortDesc: 'Enterprise mobile platform for internal business workflows, field report submissions, and team collaboration.',
    fullDesc: 'Contributed to BiC-App core mobile architecture and production deployments. Built responsive form wizards, offline data caching for field reps, document attachments, and automated dashboard reporting.',
    tags: ['Flutter', 'Dart', 'Clean Architecture', 'Offline Caching', 'Enterprise'],
    stats: {
      platforms: 'iOS & Android',
      status: 'Production Client Project',
      rating: 'Enterprise'
    },
    features: [
      'Field inspection workflows with dynamic form validation',
      'Local caching for offline survey and report creation',
      'Secure document upload and multi-image compression',
      'Role-based permissions and managerial approval flows'
    ],
    links: {
      github: 'https://github.com/Abhijeet03s/BiC-App'
    },
    icon: 'layers',
    color: 'from-blue-500/10 to-indigo-500/10',
    accent: '#3b82f6'
  },
  {
    id: 'find-work',
    title: 'Find-Work – Job & Gig Marketplace',
    category: ['client', 'flutter'],
    ownership: 'Client Project',
    clientName: 'Tryeno HQ / HR Tech Client',
    shortDesc: 'On-demand employment matching platform connecting skilled workers with verified employers and local job openings.',
    fullDesc: 'Built with Flutter for rapid job discovery. Features location-based job radius filters, candidate resume parsing, direct chat between employers and job seekers, and instant job alert notifications.',
    tags: ['Flutter', 'Dart', 'Geolocation', 'Firebase FCM', 'Chat System'],
    stats: {
      platforms: 'iOS & Android',
      status: 'Client Production Platform',
      rating: '4.7 ★'
    },
    features: [
      'Instant job feed with GPS-radius matching and skill tags',
      'Applicant tracking system with one-tap application submission',
      'Direct in-app messaging between hiring managers and applicants',
      'Real-time application status notifications via FCM'
    ],
    links: {
      github: 'https://github.com/tryeno-hq/find-work'
    },
    icon: 'briefcase',
    color: 'from-sky-500/10 to-cyan-500/10',
    accent: '#0ea5e9'
  },
  {
    id: 'new-look-beauty',
    title: 'New Look Beauty – Salon Booking Platform',
    category: ['client'],
    ownership: 'Client Project',
    clientName: 'Salon & Spa Client (TryenoDev)',
    shortDesc: 'Modern beauty salon demo and client booking platform featuring service showcase, staff scheduling, and appointment booking.',
    fullDesc: 'Developed for beauty salons and spas to showcase services, stylists, client testimonials, and automate customer appointment bookings with date/time slot selection.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Online Booking'],
    stats: {
      platforms: 'Web & Mobile PWA',
      status: 'Commercial Client Showcase',
      rating: 'Live'
    },
    features: [
      'Interactive service menu with pricing and stylist selection',
      'Calendar-based appointment booking and slot availability',
      'Mobile-first responsive design optimized for speed',
      'Customer review showcase and Instagram gallery feed'
    ],
    links: {
      github: 'https://github.com/tryenodev/new_look_beaury'
    },
    icon: 'sparkles',
    color: 'from-pink-500/10 to-rose-500/10',
    accent: '#ec4899'
  },
  {
    id: 'techify-care',
    title: 'Techify Care & API – Ticket Management',
    category: ['client', 'flutter'],
    ownership: 'Client Project',
    clientName: 'Customer Support Enterprise Client',
    shortDesc: 'Customer support and service ticket management mobile app with companion Node.js backend API and real-time chat.',
    fullDesc: 'Delivered an integrated customer care system. Customers can log tickets, upload screenshots of issues, track resolution SLA, and chat with technical support agents. Includes REST API backend (`TechifyApi`).',
    tags: ['Flutter', 'Node.js', 'REST API', 'Socket.io', 'Ticket Lifecycle'],
    stats: {
      platforms: 'Android & iOS + Backend API',
      status: 'Enterprise Client Project',
      rating: 'Commercial'
    },
    features: [
      'SLA-tracked support ticket lifecycle (Open, In Progress, Resolved, Closed)',
      'Direct ticket chat with media attachment support',
      'Node.js REST API with authentication and priority queues',
      'Automated customer satisfaction surveys'
    ],
    links: {
      github: 'https://github.com/dnm-tryeno/techify_care_app'
    },
    icon: 'life-buoy',
    color: 'from-violet-500/10 to-purple-500/10',
    accent: '#7c3aed'
  },

  // --- 3. PROPRIETARY TOOLS & INNOVATION ---
  {
    id: 'ai-background-remover',
    title: 'AI Background Remover',
    category: ['featured', 'own', 'tools', 'flutter'],
    ownership: 'Proprietary Product',
    clientName: 'Own Product (dnm-tryeno)',
    shortDesc: 'AI-powered mobile utility to automatically remove and replace backgrounds from portraits and product photos with high accuracy.',
    fullDesc: 'Built with Flutter and high-precision on-device/cloud AI models. Automatically segments humans, animals, and e-commerce products in under 3 seconds with transparent PNG and custom background replacement options.',
    tags: ['Flutter', 'AI Model Integration', 'Image Processing', 'Dart', 'Canvas'],
    stats: {
      platforms: 'Android & iOS',
      status: 'Active Product',
      rating: '4.9 ★'
    },
    features: [
      'Instant automatic AI portrait and product edge cutout',
      'High-resolution transparent PNG and HD background export',
      'Preset background color palettes and studio backdrops',
      'Batch image processing pipeline'
    ],
    links: {
      github: 'https://github.com/dnm-tryeno/ai-background-remover'
    },
    icon: 'scissors',
    color: 'from-violet-500/10 to-fuchsia-500/10',
    accent: '#a21caf'
  },
  {
    id: 'aryatech-speed-test',
    title: 'Aryatech Speed Test',
    category: ['own', 'tools', 'flutter'],
    ownership: 'Proprietary Product',
    clientName: 'Own Product (dnm-tryeno)',
    shortDesc: 'Fast and reliable internet speed benchmark app measuring download speed, upload speed, ping, and jitter in seconds.',
    fullDesc: 'A lightweight network diagnostics utility built in Flutter. Performs real-time multi-threaded socket transfers to measure bandwidth accuracy and network stability with graphical telemetry.',
    tags: ['Flutter', 'Network Sockets', 'Speedtest Engine', 'Gauges & Charts'],
    stats: {
      platforms: 'Android',
      status: 'Published Product',
      rating: '4.8 ★'
    },
    features: [
      'Accurate real-time speedometer gauge with smooth 60fps needle animations',
      'Download, Upload, Ping, and Jitter diagnostics',
      'Historical test log tracking Wi-Fi and 5G performance',
      'One-tap test sharing via image summary'
    ],
    links: {
      github: 'https://github.com/dnm-tryeno/aryatech-speed-test'
    },
    icon: 'activity',
    color: 'from-blue-500/10 to-cyan-500/10',
    accent: '#0284c7'
  },
  {
    id: 'writer-reader',
    title: 'Writer-Reader Story Platform',
    category: ['own', 'flutter'],
    ownership: 'Proprietary Product',
    clientName: 'Own Product (dnm-tryeno)',
    shortDesc: 'Multi-user story reading and self-publishing ecosystem where authors publish books and readers interact with chapter feeds.',
    fullDesc: 'A creative writing platform featuring rich-text authoring tools, chapter draft management, reader bookmarking, dark reading mode, and community commenting.',
    tags: ['Flutter', 'Firebase', 'Rich Text Editor', 'Cloud Storage'],
    stats: {
      platforms: 'iOS & Android',
      status: 'Published Product',
      rating: '4.7 ★'
    },
    features: [
      'Rich text writing studio with auto-save and chapter reordering',
      'Customizable reader: font sizing, line height, and night reading themes',
      'Author monetization and community reader likes/comments',
      'Offline caching for downloaded novels'
    ],
    links: {
      github: 'https://github.com/dnm-tryeno/writer_reader_platform'
    },
    icon: 'feather',
    color: 'from-amber-500/10 to-yellow-500/10',
    accent: '#d97706'
  },
  {
    id: 'school-app',
    title: 'SchoolApp & Coaching Management',
    category: ['own', 'flutter'],
    ownership: 'Proprietary Product',
    clientName: 'EdTech Product (dnm-tryeno)',
    shortDesc: 'Complete institutional management app for schools and coaching centers with attendance, online video classes, and fee ledger.',
    fullDesc: 'Covers the full administration of academic institutions. Enables live online classes, daily student attendance with SMS alerts, fee collection with digital receipts, and homework broadcasting.',
    tags: ['Flutter', 'Live Video', 'Firebase', 'Attendance Management', 'Push Alerts'],
    stats: {
      platforms: 'Android & iOS',
      status: 'Published Product',
      rating: '4.8 ★'
    },
    features: [
      'Live online video classes with interactive screen sharing',
      'Digital student attendance register with absent notifications to parents',
      'Fee installment tracking, due reminders, and PDF receipts',
      'Study material, syllabus, and assignment distribution'
    ],
    links: {
      github: 'https://github.com/dnm-tryeno/SchoolApp'
    },
    icon: 'graduation-cap',
    color: 'from-emerald-500/10 to-teal-500/10',
    accent: '#059669'
  },
  {
    id: 'udharkhata',
    title: 'UdharKhata – Digital Credit Book',
    category: ['own', 'flutter'],
    ownership: 'Proprietary Product',
    clientName: 'Fintech Product (dnm-tryeno)',
    shortDesc: 'Digital credit/debit ledger app for small businesses and individuals to maintain transaction logs and send automated WhatsApp payment reminders.',
    fullDesc: 'UdharKhata replaces traditional paper Khatas with a fast, cloud-synced digital record book. Users can add customers, record credits/debits, attach bills, and generate monthly statement PDFs.',
    tags: ['Flutter', 'Local DB', 'Cloud Sync', 'SMS/WhatsApp Reminders'],
    stats: {
      platforms: 'Android',
      status: 'Published Product',
      rating: '4.7 ★'
    },
    features: [
      'One-tap credit (Jama) and debit (Udhar) transaction logging',
      'Free SMS and WhatsApp reminder link generator',
      'Customer-wise balance statements downloadable as PDF',
      'PIN code security and automatic daily cloud backup'
    ],
    links: {
      github: 'https://github.com/dnm-tryeno/UdharKhata'
    },
    icon: 'credit-card',
    color: 'from-blue-500/10 to-indigo-500/10',
    accent: '#3b82f6'
  },
  {
    id: 'qrmaker',
    title: 'Pdfix & QR Code Tools Studio',
    category: ['own', 'tools', 'flutter'],
    ownership: 'Proprietary Product',
    clientName: 'Utility Product (dnm-tryeno)',
    shortDesc: 'All-in-one PDF utility suite and customized QR code generator with color palettes, embedded logos, and high-resolution export.',
    fullDesc: 'A versatile productivity tool allowing users to merge, split, compress, and sign PDFs, alongside generating dynamic QR codes with customized shapes, colors, and business logos.',
    tags: ['Flutter', 'PDF Manipulation', 'QR Generator', 'Clean Architecture'],
    stats: {
      platforms: 'Android & iOS',
      status: 'Utility Suite',
      rating: '4.8 ★'
    },
    features: [
      'Dynamic QR creation for Wi-Fi, URLs, vCards, UPI, and text',
      'Custom QR styling: logo embedding, color gradients, dot styles',
      'PDF merger, watermark tool, and image-to-PDF scanner',
      'Instant vector SVG and PNG high-res export'
    ],
    links: {
      github: 'https://github.com/dnm-tryeno/QRMaker'
    },
    icon: 'qr-code',
    color: 'from-violet-500/10 to-purple-500/10',
    accent: '#8b5cf6'
  },
  {
    id: 'tucktales',
    title: 'TuckTales – Bedtime Stories for Kids',
    category: ['own', 'flutter'],
    ownership: 'Proprietary Product',
    clientName: 'Tryeno HQ / Little Dreamers',
    shortDesc: 'Soothing storybook application for children featuring bedtime stories, realistic Text-to-Speech (TTS) narration, and gentle ambient soundscapes.',
    fullDesc: 'Designed to help parents put children to sleep through engaging story narration, calming background lullabies, offline story downloads, and night-friendly low-light themes.',
    tags: ['Flutter', 'TTS Audio Engine', 'Audio Players', 'Clean UI', 'Dart'],
    stats: {
      platforms: 'Android & iOS',
      status: 'Open Source Product',
      rating: '4.9 ★'
    },
    features: [
      'High-quality voice narration with synchronized word highlights',
      'Custom sleep timer to fade out music and storytelling gradually',
      'Offline library support for bedtime reading without screens',
      'Children-friendly colorful yet calming illustrations'
    ],
    links: {
      github: 'https://github.com/dnm-tryeno/little_dreamers'
    },
    icon: 'book-open',
    color: 'from-pink-500/10 to-rose-500/10',
    accent: '#ec4899'
  }
];

// SVG Icon Helper
function getIconSvg(name, size = 20) {
  const icons = {
    'trophy': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
    'play-circle': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`,
    'zap': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    'shopping-bag': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    'video': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>`,
    'truck': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18.5" r="2.5"/><circle cx="7" cy="18.5" r="2.5"/></svg>`,
    'book-open': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    'credit-card': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
    'qr-code': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>`,
    'layers': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    'briefcase': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    'sparkles': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    'life-buoy': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" x2="9.17" y1="4.93" y2="9.17"/><line x1="14.83" x2="19.07" y1="14.83" y2="19.07"/><line x1="14.83" x2="19.07" y1="9.17" y2="4.93"/><line x1="14.83" x2="4.93" y1="9.17" y2="19.07"/></svg>`,
    'scissors': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.48" y2="20"/><line x1="8.12" x2="12" y1="8.12" y2="12"/></svg>`,
    'activity': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    'feather': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" x2="2" y1="8" y2="22"/><line x1="17.5" x2="9" y1="15" y2="15"/></svg>`,
    'graduation-cap': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    'apple': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.93.04-2.02.63-2.66 1.38-.56.65-.99 1.7-0.87 2.73 1.05.08 2.06-.52 2.61-1.24Z"/></svg>`,
    'play': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814 13.792 12 3.61 22.186a2.12 2.12 0 0 1-1.22-1.92V3.734c0-.79.46-1.51 1.22-1.92zm11.603 11.603 2.43 2.43-12.06 6.892 9.63-9.322zm0-2.834L5.582 1.261l12.06 6.892-2.43 2.427zm1.414 1.417 4.25 2.429a1.69 1.69 0 0 1 0 2.942l-4.25 2.429-2.37-2.37 2.37-2.43z"/></svg>`,
    'github': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`
  };
  return icons[name] || '';
}

// Render Project Cards (Light & Dark Friendly)
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category.includes(filter));

  container.innerHTML = filtered.map(p => `
    <div class="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group border border-slate-200/90 dark:border-slate-800/80 hover:border-sky-500/50 dark:hover:border-cyan-500/40 relative overflow-hidden transition-all duration-300 bg-white/95 dark:bg-slate-900/80 shadow-sm hover:shadow-xl">
      <!-- Gradient Aura -->
      <div class="absolute -right-10 -top-10 w-28 h-28 bg-gradient-to-br ${p.color} rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      <div>
        <!-- Card Header: Ownership Badge & Store Status -->
        <div class="flex items-start justify-between gap-2 mb-3.5 relative z-10">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md shrink-0" style="background: linear-gradient(135deg, ${p.accent}, #0284c7);">
            ${getIconSvg(p.icon, 22)}
          </div>
          <div class="flex flex-col items-end gap-1">
            <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md ${p.ownership.includes('Client') ? 'bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800' : 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800'} font-mono">
              ${p.ownership.includes('Client') ? '💼 Client Project' : '🚀 Product / App'}
            </span>
            <span class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
              ${p.stats.status.includes('Live') ? '● Live on Store' : p.stats.status}
            </span>
          </div>
        </div>

        <!-- Title & Client Scope -->
        <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors mb-1 font-heading leading-snug">
          ${p.title}
        </h3>
        <p class="text-[11px] font-mono text-sky-600 dark:text-cyan-400 font-medium mb-2.5">
          ${p.clientName}
        </p>

        <!-- Desc -->
        <p class="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
          ${p.shortDesc}
        </p>

        <!-- Tech Tags -->
        <div class="flex flex-wrap gap-1 mb-5">
          ${p.tags.slice(0, 4).map(t => `
            <span class="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-mono">
              ${t}
            </span>
          `).join('')}
          ${p.tags.length > 4 ? `<span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-mono">+${p.tags.length - 4}</span>` : ''}
        </div>
      </div>

      <!-- Card Actions -->
      <div class="border-t border-slate-100 dark:border-slate-800/80 pt-3 mt-auto flex items-center justify-between relative z-10">
        <button onclick="openProjectModal('${p.id}')" class="text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-cyan-400 dark:hover:text-cyan-300 flex items-center gap-1 transition-colors">
          <span>Details & Features</span>
          <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>

        <div class="flex items-center gap-1.5">
          ${p.links.appStore ? `
            <a href="${p.links.appStore}" target="_blank" rel="noopener noreferrer" title="Apple App Store" class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors">
              ${getIconSvg('apple', 14)}
            </a>
          ` : ''}
          ${p.links.playStore ? `
            <a href="${p.links.playStore}" target="_blank" rel="noopener noreferrer" title="Google Play Store" class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors">
              ${getIconSvg('play', 12)}
            </a>
          ` : ''}
          ${p.links.github ? `
            <a href="${p.links.github}" target="_blank" rel="noopener noreferrer" title="GitHub Source" class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors">
              ${getIconSvg('github', 14)}
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

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
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0" style="background: linear-gradient(135deg, ${project.accent}, #0284c7);">
          ${getIconSvg(project.icon, 26)}
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
    <div class="mb-5 bg-slate-50 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
      <h4 class="text-xs uppercase tracking-wider font-semibold text-sky-700 dark:text-cyan-400 font-mono mb-2.5">Key Technical Capabilities & Scope</h4>
      <ul class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        ${project.features.map(f => `
          <li class="flex items-start gap-2">
            <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <!-- Technology Stack -->
    <div class="mb-6">
      <h4 class="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 font-mono mb-2.5">Tech Stack & Libraries</h4>
      <div class="flex flex-wrap gap-2">
        ${project.tags.map(t => `
          <span class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-mono">
            ${t}
          </span>
        `).join('')}
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-200 dark:border-slate-800">
      ${project.links.appStore ? `
        <a href="${project.links.appStore}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm shadow-md transition-all">
          ${getIconSvg('apple', 16)}
          <span>App Store Link</span>
        </a>
      ` : ''}
      ${project.links.playStore ? `
        <a href="${project.links.playStore}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm shadow-md transition-all">
          ${getIconSvg('play', 15)}
          <span>Google Play Link</span>
        </a>
      ` : ''}
      ${project.links.github ? `
        <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs sm:text-sm shadow-md transition-all">
          ${getIconSvg('github', 16)}
          <span>View Source</span>
        </a>
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

// Theme Management (Default: Light)
window.initTheme = function() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
};

window.toggleTheme = function() {
  const isDark = document.documentElement.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
};

function applyTheme(theme) {
  const toggleIcon = document.getElementById('theme-toggle-icon');
  const mobileToggleIcon = document.getElementById('mobile-theme-toggle-icon');
  const themeLabel = document.getElementById('theme-label');

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    if (toggleIcon) toggleIcon.innerHTML = `☀️`;
    if (mobileToggleIcon) mobileToggleIcon.innerHTML = `☀️`;
    if (themeLabel) themeLabel.textContent = 'Light Mode';
  } else {
    document.documentElement.classList.remove('dark');
    if (toggleIcon) toggleIcon.innerHTML = `🌙`;
    if (mobileToggleIcon) mobileToggleIcon.innerHTML = `🌙`;
    if (themeLabel) themeLabel.textContent = 'Dark Mode';
  }
}

// Toast notification helper
function showToast(message, icon = '✓') {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900 text-white shadow-2xl text-xs sm:text-sm font-medium backdrop-blur-md transition-all duration-300 transform translate-y-20 opacity-0 border border-slate-700';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span class="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">${icon}</span><span>${message}</span>`;
  toast.classList.remove('translate-y-20', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}

// Copy email to clipboard
window.copyEmail = function() {
  const email = 'dnm.dpm@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('Email copied: ' + email);
  }).catch(() => {
    showToast('Contact: ' + email);
  });
};

// Copy phone to clipboard
window.copyPhone = function() {
  const phone = '+919793953764';
  navigator.clipboard.writeText(phone).then(() => {
    showToast('Phone number copied: +91 97939 53764');
  }).catch(() => {
    showToast('Call: +91 97939 53764');
  });
};

// Filter Button Handlers
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-sky-600', 'text-white', 'border-sky-500', 'shadow-sm');
        b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-400', 'border-slate-200', 'dark:border-slate-700');
      });
      btn.classList.add('bg-sky-600', 'text-white', 'border-sky-500', 'shadow-sm');
      btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-400', 'border-slate-200', 'dark:border-slate-700');

      const filter = btn.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });
}

// Mobile Menu Handler
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

// Contact Form Handler
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name')?.value || '';
    const email = document.getElementById('form-email')?.value || '';
    const message = document.getElementById('form-message')?.value || '';

    const mailtoUrl = `mailto:dnm.dpm@gmail.com?subject=${encodeURIComponent('Inquiry from ' + name + ' via Portfolio')}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\nMessage:\n' + message)}`;
    
    window.location.href = mailtoUrl;
    showToast('Opening your email client...');
    form.reset();
  });
}

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProjects('all');
  setupFilters();
  setupMobileMenu();
  setupContactForm();

  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
