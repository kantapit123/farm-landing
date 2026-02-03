// Farm Real-time Data
export const farmData = {
  humidity: 68,
  temperature: 29,
  lightStatus: 'ปกติ',
  farmStatus: 'กำลังพัฒนา',
  lastUpdate: 'เมื่อสักครู่',
}

// Roadmap Phases
export const roadmapPhases = {
  current: 1,
  total: 4,
  progress: 25,
  tasks: [
    {
      id: 1,
      title: 'เตรียมพื้นที่ปลูก',
      status: 'completed' as const,
      icon: 'check_circle',
    },
    {
      id: 2,
      title: 'ระบบน้ำและสารอาหารอัจฉริยะ',
      status: 'in_progress' as const,
      icon: 'sync',
    },
    {
      id: 3,
      title: 'มุมคาเฟ่และพื้นที่พัก',
      status: 'pending' as const,
      icon: 'schedule',
    },
    {
      id: 4,
      title: 'บ้านพักเรียนรู้',
      status: 'future' as const,
      icon: 'auto_awesome',
    },
  ],
}

// Value Pillars
export const valuePillars = [
  {
    id: 1,
    icon: 'school',
    title: 'Knowledge as a Garden',
    subtitle: 'ฟาร์มคือห้องทดลองที่ทุกคนเรียนรู้ร่วมกัน',
    description: 'เราเชื่อว่าความรู้คือสิ่งที่เติบโตได้เมื่อถูกแบ่งปัน เหมือนพืชที่งอกงามเมื่อได้รับการดูแล',
  },
  {
    id: 2,
    icon: 'settings_suggest',
    title: 'Practical Technology',
    subtitle: 'เทคโนโลยีที่เข้าใจง่าย ใช้ได้จริง ดูแลได้เอง',
    description: 'เทคโนโลยีที่ดีไม่จำเป็นต้องซับซ้อน เราเลือกใช้เครื่องมือที่พอดี ดูแลรักษาได้ด้วยตัวเอง',
  },
  {
    id: 3,
    icon: 'diversity_3',
    title: 'Community & Sustainability',
    subtitle: 'เติบโตแบบยั่งยืน ทั้งคนและพื้นที่',
    description: 'ความยั่งยืนไม่ใช่แค่เรื่องสิ่งแวดล้อม แต่คือการสร้างชุมชนที่เข้มแข็งไปพร้อมกัน',
  },
]

// Journal Posts
export const journalPosts = [
  {
    id: 1,
    date: '28 ม.ค. 2026',
    title: 'วันแรกของแปลงทดลอง — ปลูกให้ช้าลง แต่ชัดขึ้น',
    excerpt: 'เริ่มต้นด้วยการทำความเข้าใจดิน น้ำ และแสง ก่อนที่จะปลูกอะไรลงไป บทเรียนแรกคือ "อย่ารีบ"',
    readTime: '5 นาที',
  },
  {
    id: 2,
    date: '15 ม.ค. 2026',
    title: 'ทำไมเราเลือกใช้ Automation เท่าที่จำเป็น',
    excerpt: 'เทคโนโลยีควรช่วยให้เราเข้าใจธรรมชาติมากขึ้น ไม่ใช่แทนที่มัน แนวคิด "Just Enough Tech"',
    readTime: '8 นาที',
  },
  {
    id: 3,
    date: '5 ม.ค. 2026',
    title: 'บทเรียนจากน้ำ สารอาหาร และความสม่ำเสมอ',
    excerpt: 'สิ่งที่พืชต้องการไม่ใช่ความซับซ้อน แต่คือความสม่ำเสมอ และการสังเกตที่ดี',
    readTime: '6 นาที',
  },
]

// Tech Showcase
export const techShowcase = [
  {
    id: 1,
    icon: 'water_drop',
    title: 'ระบบรดน้ำอัจฉริยะ',
    description: 'ESP32 + LoRaWAN concept, แบ่งปันแนวทาง',
    status: 'กำลังทำ',
    statusType: 'warning' as const,
  },
  {
    id: 2,
    icon: 'psychology',
    title: 'AI ช่วยดูสุขภาพพืช',
    description: 'กำลังทดลอง, Mobile AI สำหรับตรวจสอบโรคและศัตรูพืช',
    status: 'ทดลอง',
    statusType: 'info' as const,
  },
  {
    id: 3,
    icon: 'solar_power',
    title: 'พลังงานแสงอาทิตย์สำหรับฟาร์ม',
    description: 'Off-grid approach, ใช้จริงในอนาคต',
    status: 'วางแผน',
    statusType: 'default' as const,
  },
]

// Products Preview
export const productsPreview = [
  {
    id: 1,
    icon: 'coffee',
    title: 'Cold Brew from Farm Days',
    description: 'กาแฟสกัดเย็นจากเมล็ดคั่วอ่อน',
    status: 'เร็ว ๆ นี้',
  },
  {
    id: 2,
    icon: 'egg',
    title: 'ไข่ไก่อารมณ์ดี',
    description: 'ไข่จากไก่เลี้ยงแบบธรรมชาติ',
    status: 'เร็ว ๆ นี้',
  },
  {
    id: 3,
    icon: 'inventory_2',
    title: 'กล่องผักตามฤดูกาล',
    description: 'ผักสดตามฤดูกาล ส่งตรงจากฟาร์ม',
    status: 'เร็ว ๆ นี้',
  },
  {
    id: 4,
    icon: 'spa',
    title: 'น้ำผึ้งดอกไม้ป่า',
    description: 'น้ำผึ้งแท้จากรังผึ้งในฟาร์ม',
    status: 'เร็ว ๆ นี้',
  },
]

// Navigation Items
export const navItems = [
  { id: 'vision', label: 'Vision' },
  { id: 'live-data', label: 'Live Data' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'values', label: 'Values' },
  { id: 'location', label: 'Location' },
  { id: 'contact', label: 'Contact' },
]

// Location Info
export const locationInfo = {
  address: 'ฟาร์มวิทยา ต.xxxxxx อ.xxxxxx จ.xxxxxx 00000',
  hours: 'เสาร์ - อาทิตย์ 09:00 - 17:00',
  note: 'กรุณานัดหมายล่วงหน้าก่อนเข้าเยี่ยมชม',
  mapLink: 'https://maps.google.com',
}

// Contact Info
export const contactInfo = {
  province: 'จังหวัด xxxxxx',
  email: 'hello@wittayafarm.com',
  phone: '0xx-xxx-xxxx',
}

// Founder Story
export const founderStory = {
  name: 'ผู้ก่อตั้ง Wittaya Farm',
  role: 'Founder & Learning Designer',
  quote: '"ฟาร์มที่ดีไม่ได้วัดจากผลผลิต แต่วัดจากความรู้ที่แบ่งปันออกไป"',
  story: [
    'ผมเริ่มต้นจากความสนใจในการทำเกษตรที่ผสมผสานกับเทคโนโลยี แต่ไม่ใช่เทคโนโลยีเพื่อความหรูหรา แต่เพื่อให้เราเข้าใจธรรมชาติมากขึ้น',
    'ด้วยแนวคิด Product Mindset และ Continuous Improvement เราค่อย ๆ พัฒนาฟาร์มไปทีละขั้น ใช้ Data และ Automation เท่าที่จำเป็น',
    'เป้าหมายของ Wittaya Farm ไม่ใช่แค่การปลูกผัก แต่คือการสร้าง Learning Space ที่ทุกคนสามารถเข้ามาเรียนรู้ และนำความรู้ไปต่อยอดได้',
    'เราอยากให้คนทั่วไปเข้าถึงการปลูกผักคุณภาพได้ง่ายขึ้น ด้วยความรู้ที่ถูกจัดระบบและแบ่งปันอย่างเปิดกว้าง',
  ],
}
