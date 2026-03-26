// ================================================================
// MAGIC HOME — FILE CHỈNH SỬA NỘI DUNG DỊCH VỤ
// ================================================================
// Files in /public are served as static assets — reference them as
// URL strings (never import them). Use import.meta.env.BASE_URL so
// paths work correctly regardless of the Vite `base` config.
// ================================================================

const b = import.meta.env.BASE_URL; // e.g. "/" or "/MagicHome/"

// ── LOGO ─────────────────────────────────────────────────────────
export const logoImg = `${b}logo/logo.png`;

// ── HERO SLIDESHOW ───────────────────────────────────────────────
export const heroImages: string[] = [
  `${b}Photos/cover.jpg`,
  `${b}DaytoDusk/cover.jpg`,
  `${b}Retouch/cover.jpg`,
  `${b}Virtual Home Staging/cover.jpg`,
  `${b}Floorplan/cover.jpg`,
  `${b}cover_video/covervideo.jpg`,
];

// ================================================================
// DANH SÁCH DỊCH VỤ
// ================================================================
export const services = [

  // ── 1. PHOTOS ─────────────────────────────────────────────────
  {
    id: 'photos',
    name: 'Photos',
    subtitle: 'HDR – Single Exposure – Flambient',
    price: 'From $0.5',
    priceUnit: 'per image',
    deliveryTime: '<24 hours delivery',
    description: 'Professional real estate photo editing — color correction, sky replacement, HDR blending and exposure enhancement to make every property shine.',
    coverImage: `${b}Photos/cover.jpg`,
    images: [
      { id: '1', url: `${b}Photos/photos1.jpg`, caption: '' },
    ],
    videos: [],
    beforeAfterPairs: [
      { id: 'ba1', before: `${b}Before_After Image Slider/Photos/Before1.jpg`,  after: `${b}Before_After Image Slider/Photos/affter1.jpg`,  label: 'Before & After 1' },
      { id: 'ba2', before: `${b}Before_After Image Slider/Photos/before2.jpg`, after: `${b}Before_After Image Slider/Photos/affter2.jpg`, label: 'Before & After 2' },
    ],
  },

  // ── 2. DAY TO DUSK ────────────────────────────────────────────
  {
    id: 'day-to-dusk',
    name: 'Day to Dusk',
    subtitle: 'Twilight – Sunset Sky – Glow Effect',
    price: 'From $5',
    priceUnit: 'per image',
    deliveryTime: '<24 hours delivery',
    description: 'Turn flat daytime exteriors into dramatic twilight shots — glowing windows, vivid sunset skies and ambient lighting that captivates buyers.',
    coverImage: `${b}DaytoDusk/cover.jpg`,
    images: [
      { id: '1', url: `${b}DaytoDusk/DaytoDusk.jpg`, caption: '' },
    ],
    videos: [],
    beforeAfterPairs: [
      { id: 'ba1', before: `${b}Before_After Image Slider/DayToDusk/before1.jpg`, after: `${b}Before_After Image Slider/DayToDusk/affter1.jpg`, label: 'Before & After 1' },
      { id: 'ba2', before: `${b}Before_After Image Slider/DayToDusk/before2.jpg`, after: `${b}Before_After Image Slider/DayToDusk/affter2.jpg`, label: 'Before & After 2' },
    ],
  },

  // ── 3. RETOUCH ────────────────────────────────────────────────
  {
    id: 'retouch',
    name: 'Retouch',
    subtitle: 'Object Removal – Sky Enhancement – Cleanup',
    price: 'From $1',
    priceUnit: 'per image',
    deliveryTime: '<24 hours delivery',
    description: 'Remove distractions, fix imperfections and polish every detail. Object removal, sky enhancement and full-scene cleanup for flawless listings.',
    coverImage: `${b}Retouch/cover.jpg`,
    images: [
      { id: '1', url: `${b}Retouch/Retouch1.jpg`, caption: '' },
    ],
    videos: [],
    beforeAfterPairs: [
      { id: 'ba1', before: `${b}Before_After Image Slider/Retouch/before1.jpg`, after: `${b}Before_After Image Slider/Retouch/affter1.jpg`, label: 'Before & After 1' },
      { id: 'ba2', before: `${b}Before_After Image Slider/Retouch/before2.jpg`, after: `${b}Before_After Image Slider/Retouch/affter2.jpg`, label: 'Before & After 2' },
    ],
  },

  // ── 4. VIRTUAL HOME STAGING ───────────────────────────────────
  {
    id: 'virtual-staging',
    name: 'Virtual Home Staging',
    subtitle: 'High Quality – Furniture Placement – Renovation',
    price: 'From $15',
    priceUnit: 'per image',
    deliveryTime: '<36 hours delivery',
    description: 'Digitally furnish empty rooms with photorealistic furniture and décor. Help buyers visualise the full lifestyle potential of any property.',
    coverImage: `${b}Virtual Home Staging/cover.jpg`,
    images: [
      { id: '1', url: `${b}Virtual Home Staging/Virtual Home Staging1.jpg`, caption: '' },
    ],
    videos: [],
    beforeAfterPairs: [
      { id: 'ba1', before: `${b}Before_After Image Slider/VirtualHomeStaging/before1.jpg`, after: `${b}Before_After Image Slider/VirtualHomeStaging/affter1.jpg`, label: 'Before & After 1' },
      { id: 'ba2', before: `${b}Before_After Image Slider/VirtualHomeStaging/before2.jpg`, after: `${b}Before_After Image Slider/VirtualHomeStaging/affter2.jpg`, label: 'Before & After 2' },
    ],
  },

  // ── 5. VIDEO ──────────────────────────────────────────────────
  {
    id: 'video',
    name: 'Video',
    subtitle: 'Cinematic – Drone Footage – Branded Films',
    price: 'From $20',
    priceUnit: 'per video',
    deliveryTime: '<48 hours delivery',
    description: 'Cinematic real estate video production and post-production. Smooth walkthroughs, drone footage editing and branded property films.',
    coverImage: `${b}cover_video/covervideo.jpg`,
    images: [],
    videos: [
      { id: '1', youtubeUrl: 'https://youtu.be/SQeRYv9Aa-4?si=X31hwivYgoJT-DkA', title: '' },
      { id: '2', youtubeUrl: 'https://youtu.be/qtTNSrZUwUg?si=pkMu8b7wt4EajwE7', title: '' },
      { id: '3', youtubeUrl: 'https://youtu.be/wzPvYNWmtFc?si=Y0QwgfSE0oRHlk0X', title: '' },
    ],
  },

  // ── 6. FLOORPLAN ──────────────────────────────────────────────
  {
    id: 'floorplan',
    name: 'Floorplan',
    subtitle: '2D & 3D – Precise Layout – Professional',
    price: 'From $10',
    priceUnit: 'per plan',
    deliveryTime: '<48 hours delivery',
    description: 'Precise 2D and 3D floor plans drawn from photos or rough sketches. Clean, professional layouts that help buyers understand every space.',
    coverImage: `${b}Floorplan/cover.jpg`,
    images: [
      { id: '1', url: `${b}Floorplan/Floorplan1.jpg`, caption: '' },
    ],
    videos: [],
  },

];