import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Smartphone, Globe, Box, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

const categories = [
  { id: "all", label: "全部專案", icon: <LayoutGrid size={16} /> },
  { id: "web", label: "網頁設計", icon: <Globe size={16} /> },
  { id: "app", label: "行動應用", icon: <Smartphone size={16} /> },
  { id: "3d", label: "3D 體驗", icon: <Box size={16} /> },
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
            <p className="text-gray-400 max-w-lg text-lg">探索我們為客戶打造的創新解決方案。</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 border ${
                  filter === cat.id ? "bg-white text-black border-white" : "bg-neutral-900 text-gray-400 border-neutral-800"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-neutral-900 aspect-[4/3] cursor-pointer border border-neutral-800"
              >
                <Link to={`/projects/${project.id}`} className="block w-full h-full">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-cyan-400 text-xs font-bold uppercase mb-3 inline-block">{project.categoryLabel}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      查看詳情 <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
