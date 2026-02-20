import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, ArrowRight, Layers, Smartphone, Globe, Box, LayoutGrid } from "lucide-react";

const categories = [
  { id: "all", label: "全部專案", icon: <LayoutGrid size={16} /> },
  { id: "web", label: "網頁設計", icon: <Globe size={16} /> },
  { id: "app", label: "行動應用", icon: <Smartphone size={16} /> },
  { id: "3d", label: "3D 體驗", icon: <Box size={16} /> },
];

const projects = [
  {
    id: 1,
    title: "Neon Finance",
    category: "app",
    categoryLabel: "Mobile App",
    image: "https://images.unsplash.com/photo-1605600659802-1353d7fd3732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ24lMjBuZW9ufGVufDF8fHx8MTc3MTUxNzkyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "新一代金融管理應用，融合霓虹風格與直觀操作，讓理財變得更有趣。",
  },
  {
    id: 2,
    title: "Vortex Dashboard",
    category: "web",
    categoryLabel: "Web App",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGFzaGJvYXJkJTIwdWklMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MTUxNzkyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "為大型企業打造的數據可視化儀表板，即時監控關鍵指標與預測分析。",
  },
  {
    id: 3,
    title: "Ethereal Gallery",
    category: "3d",
    categoryLabel: "Immersive Web",
    image: "https://images.unsplash.com/photo-1636545948913-c238e8a1b4bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGFic3RyYWN0JTIwYXJ0JTIwcmVuZGVyJTIwZGFya3xlbnwxfHx8fDE3NzE1MTc5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "線上沉浸式藝術展覽平台，結合 WebGL 技術，提供身歷其境的觀展體驗。",
  },
  {
    id: 4,
    title: "DevSpace IDE",
    category: "web",
    categoryLabel: "Productivity Tool",
    image: "https://images.unsplash.com/photo-1770734360042-676ef707d022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjBzZXR1cCUyMGRhcmslMjBtb2RlfGVufDF8fHx8MTc3MTUxNzkwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "專為開發者設計的雲端編輯環境，極致黑夜模式，提升專注力與效率。",
  },
  {
    id: 5,
    title: "Cyber Fitness",
    category: "app",
    categoryLabel: "Mobile App",
    image: "https://images.unsplash.com/flagged/photo-1550949078-fbd850f36ec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzY3JlZW4lMjBjbG9zZSUyMHVwJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzE1MTgzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "結合 AR 技術的健身應用，將運動數據轉化為遊戲化的視覺體驗。",
  },
  {
    id: 6,
    title: "Quantum Brand",
    category: "web",
    categoryLabel: "Brand Identity",
    image: "https://images.unsplash.com/photo-1761519269966-8cb088937686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMG5lb24lMjBzaGFwZXMlMjBkYXJrfGVufDF8fHx8MTc3MTUxODM3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "為科技新創打造的全新品牌識別系統，以量子力學為靈感的視覺語言。",
  }
];

export const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="py-32 bg-black text-white relative border-t border-neutral-900">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div>
            <div className="inline-block px-3 py-1 mb-6 border border-cyan-500/30 rounded-full bg-cyan-900/10 backdrop-blur-sm">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">SELECTED WORKS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">精選作品集</h2>
            <p className="text-gray-400 max-w-lg text-lg">
                探索我們為客戶打造的創新解決方案，每一個專案都是技術與藝術的完美結合。
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 border ${
                  filter === cat.id
                    ? "bg-white text-black border-white"
                    : "bg-neutral-900 text-gray-400 border-neutral-800 hover:border-neutral-600 hover:text-white"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-neutral-900 aspect-[4/3] cursor-pointer border border-neutral-800"
              >
                {/* Image */}
                <div className="w-full h-full overflow-hidden">
                    <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                </div>
                
                {/* Overlay Gradient - Stronger on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                        {project.categoryLabel}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                        {project.title}
                    </h3>
                    
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300">
                        <div className="overflow-hidden">
                             <p className="text-gray-400 text-sm mt-2 mb-4 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex items-center gap-2 text-white text-sm font-bold border-b border-transparent group-hover:border-cyan-400 inline-block pb-1 transition-colors">
                                查看專案 <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-cyan-400 hover:text-black transform translate-y-4 group-hover:translate-y-0">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-24 text-center">
             <a href="#" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900 text-white border border-neutral-800 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 text-sm font-bold tracking-widest uppercase group">
                <Layers size={18} />
                瀏覽更多專案
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </a>
        </div>
      </div>
    </section>
  );
};
