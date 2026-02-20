export type ProjectCategory = "all" | "web" | "app" | "3d";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  image: string;
  description: string;
  longDescription: string;
  tags: string[];
  year: string;
  client: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Neon Finance",
    category: "app",
    categoryLabel: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1605600659802-1353d7fd3732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ24lMjBuZW9ufGVufDF8fHx8MTc3MTUxNzkyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "新一代金融管理應用，融合霓虹風格與直觀操作，讓理財變得更有趣。",
    longDescription:
      "Neon Finance 是一款突破傳統的金融管理應用程式，我們以使用者行為研究為核心，重新設計了個人理財的互動體驗。霓虹色彩系統不僅帶來視覺衝擊，更透過顏色編碼直觀呈現資產狀態。儀表板採用即時數據更新，讓用戶能隨時掌握財務動態。應用整合了 AI 預測模型，主動分析消費模式並提供個人化建議，幫助用戶建立更健康的財務習慣。",
    tags: ["React Native", "TypeScript", "Figma", "AI Integration", "Finance API"],
    year: "2024",
    client: "FinTech Startup",
    role: "UI/UX Design & Development",
  },
  {
    id: 2,
    title: "Vortex Dashboard",
    category: "web",
    categoryLabel: "Web App",
    image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGFzaGJvYXJkJTIwdWklMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MTUxNzkyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "為大型企業打造的數據可視化儀表板，即時監控關鍵指標與預測分析。",
    longDescription:
      "Vortex Dashboard 是專為企業級應用打造的數據可視化平台，能同時處理數十個數據源的即時串流。我們採用 WebSocket 技術實現毫秒級數據更新，搭配自研的圖表渲染引擎，確保即便面對百萬筆數據也能流暢呈現。系統提供高度自訂化的版面配置，讓不同部門的用戶能打造符合自身需求的工作視圖。內建的異常偵測算法可在問題發生前主動發出警示，大幅降低企業風險。",
    tags: ["React", "D3.js", "WebSocket", "Node.js", "PostgreSQL"],
    year: "2024",
    client: "Enterprise Corp.",
    role: "Full-Stack Development",
  },
  {
    id: 3,
    title: "Ethereal Gallery",
    category: "3d",
    categoryLabel: "Immersive Web",
    image:
      "https://images.unsplash.com/photo-1636545948913-c238e8a1b4bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGFic3RyYWN0JTIwYXJ0JTIwcmVuZGVyJTIwZGFya3xlbnwxfHx8fDE3NzE1MTc5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "線上沉浸式藝術展覽平台，結合 WebGL 技術，提供身歷其境的觀展體驗。",
    longDescription:
      "Ethereal Gallery 打破了實體展覽的地理限制，透過 WebGL 與 Three.js 技術重現美術館的空間感。訪客能以第一人稱視角在虛擬展廳中自由漫步，近距離欣賞藝術品的每一個細節。我們開發了客製化的光線追蹤系統，讓作品在虛擬環境中呈現與實體相近的光影效果。平台支援 VR 頭戴裝置，讓更深度的沉浸體驗成為可能。此外，互動式音景設計讓每個展間都有獨特的聲音氛圍。",
    tags: ["Three.js", "WebGL", "GLSL", "React", "VR Support"],
    year: "2023",
    client: "Modern Art Foundation",
    role: "Creative Technology & Development",
  },
  {
    id: 4,
    title: "DevSpace IDE",
    category: "web",
    categoryLabel: "Productivity Tool",
    image:
      "https://images.unsplash.com/photo-1770734360042-676ef707d022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjBzZXR1cCUyMGRhcmslMjBtb2RlfGVufDF8fHx8MTc3MTUxNzkwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "專為開發者設計的雲端編輯環境，極致黑夜模式，提升專注力與效率。",
    longDescription:
      "DevSpace IDE 是以「零干擾開發」為核心理念打造的雲端整合開發環境。我們深度研究開發者的工作流程後，設計出一套能自動適應個人習慣的智慧界面——它會記住你的偏好、預測你的需求。內建的 AI 代碼補全引擎在訓練自家模型後，準確率比通用方案提升 40%。協作功能支援實時多人編輯與聲音通話，讓遠端團隊的協作體驗接近同一辦公室的效率。支援超過 150 種程式語言的語法高亮與偵錯功能。",
    tags: ["Monaco Editor", "TypeScript", "WebRTC", "Docker", "AI Autocomplete"],
    year: "2024",
    client: "DevTools Inc.",
    role: "Product Design & Frontend Architecture",
  },
  {
    id: 5,
    title: "Cyber Fitness",
    category: "app",
    categoryLabel: "Mobile App",
    image:
      "https://images.unsplash.com/flagged/photo-1550949078-fbd850f36ec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzY3JlZW4lMjBjbG9zZSUyMHVwJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzE1MTgzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "結合 AR 技術的健身應用，將運動數據轉化為遊戲化的視覺體驗。",
    longDescription:
      "Cyber Fitness 將健身房帶進了賽博龐克的世界。透過手機鏡頭，AR 圖層會即時疊加在真實環境上，顯示你的動作軌跡、卡路里燃燒熱力圖與姿勢矯正提示。遊戲化系統讓每次訓練都像一場任務，完成挑戰可解鎖虛擬裝備與稱號。社群功能允許朋友之間即時 PK，共同挑戰每週目標。我們與運動科學顧問合作，確保每個訓練計劃都有科學根據，同時保持趣味性。",
    tags: ["React Native", "ARKit", "ARCore", "TensorFlow Lite", "Gamification"],
    year: "2023",
    client: "FitTech Labs",
    role: "UX Strategy & Mobile Development",
  },
  {
    id: 6,
    title: "Quantum Brand",
    category: "web",
    categoryLabel: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1761519269966-8cb088937686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMG5lb24lMjBzaGFwZXMlMjBkYXJrfGVufDF8fHx8MTc3MTUxODM3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "為科技新創打造的全新品牌識別系統，以量子力學為靈感的視覺語言。",
    longDescription:
      "Quantum Brand 是一套從品牌哲學出發的完整識別設計專案。客戶是一間量子運算新創公司，我們從量子疊加態、糾纏與干涉等概念中提取視覺靈感，發展出一套獨特的幾何語言系統。Logo 的核心形態在不同尺寸下都能保持辨識度，同時在動態應用時能展現流動的量子特質。完整的品牌規範涵蓋數位、印刷與空間設計三大面向，確保品牌在所有觸點上都能傳達一致的前衛科技感。",
    tags: ["Brand Strategy", "Visual Identity", "Motion Design", "Figma", "After Effects"],
    year: "2023",
    client: "Quantum Computing Co.",
    role: "Brand Design & Strategy",
  },
];

export const categories = [
  { id: "all", label: "全部專案" },
  { id: "web", label: "網頁設計" },
  { id: "app", label: "行動應用" },
  { id: "3d", label: "3D 體驗" },
] as const;
