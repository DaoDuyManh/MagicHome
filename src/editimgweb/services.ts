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

// ── STEP BY STEP IMAGES ──────────────────────────────────────────
// Thêm ảnh vào thư mục /public/StepByStep/ và khai báo đường dẫn ở đây
export const stepByStepImages: string[] = [
  `${b}StepByStep/StepByStep.jpg`,
];

// ── PORTFOLIO IMAGES ─────────────────────────────────────────────
// Thêm ảnh vào thư mục /public/Portfolio/ và khai báo đường dẫn ở đây
export const portfolioImages: string[] = [
 `${b}Portfolio/Portfolio1.jpg`,
  `${b}Portfolio/Portfolio2.jpg`,
  `${b}Portfolio/Portfolio3.jpg`,
  `${b}Portfolio/Portfolio4.jpg`,
  `${b}Portfolio/Portfolio5.jpg`,
  `${b}Portfolio/Portfolio6.jpg`,
  `${b}Portfolio/Portfolio7.jpg`,
  `${b}Portfolio/Portfolio8.jpg`, 
  `${b}Portfolio/Portfolio9.jpg`,
  `${b}Portfolio/Portfolio10.jpg`,
  `${b}Portfolio/Portfolio11.jpg`,
  `${b}Portfolio/Portfolio12.jpg`,
  `${b}Portfolio/Portfolio13.jpg`,
  `${b}Portfolio/Portfolio14.jpg`,
  `${b}Portfolio/Portfolio15.jpg`,
  `${b}Portfolio/Portfolio16.jpg`,
  `${b}Portfolio/Portfolio17.jpg`,
  `${b}Portfolio/Portfolio18.jpg`,
  `${b}Portfolio/Portfolio19.jpg`,
  `${b}Portfolio/Portfolio20.jpg`,
  `${b}Portfolio/Portfolio21.jpg`,
  `${b}Portfolio/Portfolio22.jpg`,
  `${b}Portfolio/Portfolio23.jpg`,
  `${b}Portfolio/Portfolio24.jpg`,
  `${b}Portfolio/Portfolio25.jpg`,
  `${b}Portfolio/Portfolio26.jpg`,
  `${b}Portfolio/Portfolio27.jpg`,
  `${b}Portfolio/Portfolio28.jpg`,
  `${b}Portfolio/Portfolio29.jpg`,
  `${b}Portfolio/Portfolio30.jpg`,
  `${b}Portfolio/Portfolio31.jpg`,
  `${b}Portfolio/Portfolio32.jpg`,

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
    deliveryTime: '<12 hours delivery',
    description: 'Professional real estate photo editing — color correction, sky replacement, HDR blending and exposure enhancement to make every property shine.',
    coverImage: `${b}Photos/cover.jpg`,
    images: [
      { id: '1', url: `${b}Photos/photos1.jpg`, caption: '' },
      { id: '2', url: `${b}Photos/photos2.jpg`, caption: '' },
      { id: '3', url: `${b}Photos/photos3.jpg`, caption: '' },
      { id: '4', url: `${b}Photos/photos4.jpg`, caption: '' },
      { id: '5', url: `${b}Photos/photos5.jpg`, caption: '' },
      { id: '6', url: `${b}Photos/photos6.jpg`, caption: '' },
      { id: '7', url: `${b}Photos/photos7.jpg`, caption: '' },
      { id: '8', url: `${b}Photos/photos8.jpg`, caption: '' },
      { id: '9', url: `${b}Photos/photos9.jpg`, caption: '' },
      { id: '10', url: `${b}Photos/photos10.jpg`, caption: '' },
      { id: '11', url: `${b}Photos/photos11.jpg`, caption: '' },
      { id: '12', url: `${b}Photos/photos12.jpg`, caption: '' },
      { id: '13', url: `${b}Photos/photos13.jpg`, caption: '' },
      { id: '14', url: `${b}Photos/photos14.jpg`, caption: '' },
      { id: '15', url: `${b}Photos/photos15.jpg`, caption: '' },
      { id: '16', url: `${b}Photos/photos16.jpg`, caption: '' },
      { id: '17', url: `${b}Photos/photos17.jpg`, caption: '' },
      { id: '18', url: `${b}Photos/photos18.jpg`, caption: '' },
      { id: '19', url: `${b}Photos/photos19.jpg`, caption: '' },
      { id: '20', url: `${b}Photos/photos20.jpg`, caption: '' },
 
    ],
    videos: [],
    beforeAfterPairs: [
      { id: 'ba1', before: `${b}Before_After Image Slider/Photos/before1.jpg`,  after: `${b}Before_After Image Slider/Photos/affter1.jpg`,  label: 'Before & After 1' },
      { id: 'ba2', before: `${b}Before_After Image Slider/Photos/before2.jpg`, after: `${b}Before_After Image Slider/Photos/affter2.jpg`, label: 'Before & After 2' },
    ],
  },

  // ── 2. DAY TO DUSK ────────────────────────────────────────────
  {
    id: 'day-to-dusk',
    name: 'Day To Dusk',
    subtitle: 'Twilight – Sunset Sky – Glow Effect',
    price: 'From $5',
    priceUnit: 'per image',
    deliveryTime: '<12 hours delivery',
    description: 'Turn flat daytime exteriors into dramatic twilight shots — glowing windows, vivid sunset skies and ambient lighting that captivates buyers.',
    coverImage: `${b}DaytoDusk/cover.jpg`,
    images: [
      { id: '1', url: `${b}DaytoDusk/DaytoDusk.jpg`, caption: '' },
      { id: '2', url: `${b}DaytoDusk/DaytoDusk1.jpg`, caption: '' },
      { id: '2', url: `${b}DaytoDusk/DaytoDusk2.jpg`, caption: '' },
      { id: '3', url: `${b}DaytoDusk/DaytoDusk3.jpg`, caption: '' },
      { id: '4', url: `${b}DaytoDusk/DaytoDusk4.jpg`, caption: '' },

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
    deliveryTime: '<12 hours delivery',
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
  // ── 3. Grass Replacement ────────────────────────────────────────────────
  {
    id: 'grass-replacement',
    name: 'Grass Replacement',
    subtitle: 'Turf Repair – Patch Filling – Greener Lawns',
    price: 'From $1',
    priceUnit: 'per image',
    deliveryTime: '<12 hours delivery',
    description: 'Replace worn or patchy lawns with natural-looking grass replacement and patch repairs to boost curb appeal in listing photos.',
    coverImage: `${b}GrassReplacement/cover.jpg`,
    images: [
      { id: '1', url: `${b}GrassReplacement/GrassReplacement1.jpg`, caption: '' },
      { id: '2', url: `${b}GrassReplacement/GrassReplacement2.jpg`, caption: '' },
    ],
    videos: [],
    beforeAfterPairs: [
      { id: 'ba1', before: `${b}Before_After Image Slider/GrassReplacement/before1.jpg`, after: `${b}Before_After Image Slider/GrassReplacement/affter1.jpg`, label: 'Before & After 1' },
      { id: 'ba2', before: `${b}Before_After Image Slider/GrassReplacement/before2.jpg`, after: `${b}Before_After Image Slider/GrassReplacement/affter2.jpg`, label: 'Before & After 2' },
    ],
  },

  // ── 4. VIRTUAL HOME STAGING ───────────────────────────────────
  {
    id: 'virtual-staging',
    name: 'Virtual Home Staging',
    subtitle: 'High Quality – Furniture Placement – Renovation',
    price: 'From $15',
    priceUnit: 'per image',
    deliveryTime: '<12 hours delivery',
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
    deliveryTime: '<12 hours delivery',
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
    deliveryTime: '<12 hours delivery',
    description: 'Precise 2D and 3D floor plans drawn from photos or rough sketches. Clean, professional layouts that help buyers understand every space.',
    coverImage: `${b}Floorplan/cover.jpg`,
    images: [
      { id: '1', url: `${b}Floorplan/Floorplan1.jpg`, caption: '' },
    ],
    videos: [],
  },

];
