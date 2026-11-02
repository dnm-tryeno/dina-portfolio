/**
 * Dina Nath Maurya - Senior Mobile App Engineer Portfolio
 * Interactive Functionality, Light Theme Support & Project Catalog
 */

const projectsData = [
  {
    id: 'furrycat',
    title: 'FurryCat – Tournament & Esports App',
    category: ['featured', 'store', 'flutter'],
    shortDesc: 'Complete esports & cricket tournament management platform with live scoring, match scheduling, player invitations, analytics, and expense management.',
    fullDesc: 'FurryCat is a comprehensive cross-platform tournament and match hosting ecosystem designed for sports communities and gaming tournaments. It features multi-role authentication, dynamic team formation, player roster invites, real-time match brackets, live score updates, detailed player stats, and automated team expense tracking.',
    tags: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'REST APIs', 'App Store & Play Store'],
    stats: {
      platforms: 'iOS & Android',
      status: 'Live on App Store & Play Store',
      rating: '4.8 ★'
    },
    features: [
      'Multi-role tournament hosting and dynamic team creation',
      'Real-time match brackets, round scheduling, and live score updates',
      'Player invitations with push notification alerts',
      'Team expense management and ledger tracking',
      'Comprehensive player and team analytics dashboard'
    ],
    links: {
      appStore: 'https://apps.apple.com/jp/app/furrycat/id6755180059?l=en-US',
      playStore: 'https://play.google.com/store/apps/details?id=com.cricket.captain.expense.mgmt&hl=en',
      github: 'https://github.com/dnm-tryeno'
    },
    icon: 'trophy',
    color: 'from-amber-500/10 to-orange-500/10',
    accent: '#f59e0b'
  },
  {
    id: 'vidplayer',
    title: 'All Video Saver & VidPlayer',
    category: ['featured', 'store', 'flutter'],
    shortDesc: 'High-performance video downloading and multi-format media playback suite with hardware acceleration, background audio, and private folder encryption.',
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
    category: ['featured', 'store', 'flutter'],
    shortDesc: 'On-demand home services marketplace linking customers with certified technicians and admins with real-time dispatching and geolocation.',
    fullDesc: 'A full-fledged commercial service platform built with Flutter. Includes separate workflows for Customers (booking services, scheduling, photo upload of issues), Service Engineers (accepting jobs, GPS route navigation, job completion proof), and Admins (service assignment, dispute resolution, payout reconciliation).',
    tags: ['Flutter', 'Google Maps', 'Geolocation', 'Firebase', 'REST APIs', 'Play Store'],
    stats: {
      platforms: 'Android & iOS Ready',
      status: 'Live on Google Play Store',
      rating: '4.6 ★'
    },
    features: [
      'Customer app with category browsing, appointment booking, and image attachments',
      'Engineer portal with job notification, accept/reject flow, and status updates',
      'Real-time technician location tracking on Google Maps',
      'Automated invoice generation upon job completion',
      'Admin analytics dashboard for revenue and territory management'
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
    title: 'Any Type Shop – Inventory & POS Manager',
    category: ['featured', 'store', 'flutter'],
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
  {
    id: 'drinking-app',
    title: 'Online Drinking App – Video Room Chat',
    category: ['featured', 'flutter'],
    shortDesc: 'Real-time social video party app built for Japanese clients featuring Agora RTC interactive video rooms, multi-user seat allocation, and live interactions.',
    fullDesc: 'Developed for Del-Qui Japan. An interactive social networking app allowing users to join virtual bars, drink together, and socialize. Built with Agora Video SDK, WebSockets, and Riverpod for synchronized interactive room features.',
    tags: ['Flutter', 'Agora RTC SDK', 'WebSockets', 'Riverpod', 'Del-Qui Japan'],
    stats: {
      platforms: 'iOS & Android',
      status: 'Production Client Project (Japan)',
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
    title: 'Food Delivery & Driver Tracking Suite',
    category: ['featured', 'flutter'],
    shortDesc: 'End-to-end food ordering and courier delivery system with live driver navigation on Google Maps, Socket.io event dispatch, and Stripe checkout.',
    fullDesc: 'A dual-application food ordering and dispatching ecosystem. The Customer App provides restaurant discovery, menu customization, and order tracking. The Driver App delivers turn-by-turn navigation, instant order ping notifications, and order completion proof.',
    tags: ['Flutter', 'Google Maps API', 'Socket.io', 'Stripe', 'Node.js Backend'],
    stats: {
      platforms: 'iOS & Android',
      status: 'Production Client Project (Japan)',
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
    id: 'tucktales',
    title: 'TuckTales – Calming Bedtime Stories',
    category: ['flutter'],
    shortDesc: 'Soothing storybook application for children featuring bedtime stories, realistic Text-to-Speech (TTS) narration, and gentle ambient soundscapes.',
    fullDesc: 'Designed to help parents put children to sleep through engaging story narration, calming background lullabies, offline story downloads, and night-friendly low-light themes.',
    tags: ['Flutter', 'TTS Audio Engine', 'Audio Players', 'Clean UI', 'Dart'],
    stats: {
      platforms: 'Android & iOS',
      status: 'Open Source / Portfolio',
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
  },
  {
    id: 'udharkhata',
    title: 'UdharKhata – Digital Ledger & Credit Book',
    category: ['flutter'],
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
    category: ['tools', 'flutter'],
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
        <!-- Card Header -->
        <div class="flex items-start justify-between gap-3 mb-4 relative z-10">
          <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white shadow-md" style="background: linear-gradient(135deg, ${p.accent}, #0284c7);">
            ${getIconSvg(p.icon, 22)}
          </div>
          <span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 dark:bg-slate-800/90 dark:text-cyan-400 dark:border-cyan-500/20 font-mono">
            ${p.stats.status.includes('Live') ? '● Live' : '★ Featured'}
          </span>
        </div>

        <!-- Title & Desc -->
        <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors mb-2 font-heading leading-snug">
          ${p.title}
        </h3>
        <p class="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
          ${p.shortDesc}
        </p>

        <!-- Tech Tags -->
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${p.tags.slice(0, 4).map(t => `
            <span class="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-mono">
              ${t}
            </span>
          `).join('')}
          ${p.tags.length > 4 ? `<span class="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-mono">+${p.tags.length - 4}</span>` : ''}
        </div>
      </div>

      <!-- Card Actions -->
      <div class="border-t border-slate-100 dark:border-slate-800/80 pt-3.5 mt-auto flex items-center justify-between relative z-10">
        <button onclick="openProjectModal('${p.id}')" class="text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-cyan-400 dark:hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
          <span>Explore Details</span>
          <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>

        <div class="flex items-center gap-1.5">
          ${p.links.appStore ? `
            <a href="${p.links.appStore}" target="_blank" rel="noopener noreferrer" title="Apple App Store" class="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors">
              ${getIconSvg('apple', 15)}
            </a>
          ` : ''}
          ${p.links.playStore ? `
            <a href="${p.links.playStore}" target="_blank" rel="noopener noreferrer" title="Google Play Store" class="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors">
              ${getIconSvg('play', 13)}
            </a>
          ` : ''}
          ${p.links.github ? `
            <a href="${p.links.github}" target="_blank" rel="noopener noreferrer" title="GitHub Source" class="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors">
              ${getIconSvg('github', 15)}
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
            <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 dark:bg-cyan-950/80 dark:text-cyan-300 border border-sky-200 dark:border-cyan-800/80 font-mono">
              ${project.stats.status}
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">${project.stats.platforms}</span>
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
      <h4 class="text-xs uppercase tracking-wider font-semibold text-sky-700 dark:text-cyan-400 font-mono mb-2.5">Key Technical Capabilities</h4>
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
      <h4 class="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 font-mono mb-2.5">Tech Stack & Architecture</h4>
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
