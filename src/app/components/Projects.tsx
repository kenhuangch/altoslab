import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Layers, Smartphone, Globe, Box, LayoutGrid } from "lucide-react";
import { projects } from "../../data/projects";

const categoryIcons: Record<string, React.ReactNode> = {
  all: <LayoutGrid size={16} />,
  web: <Globe size={16} />,
  app: <Smartphone size={16} />,
  "3d": <Box size={16} />,
};

const categories = [
  { id: "all", label: "全部專案" },
  { id: "web", label: "網頁設計" },
  { id: "app", label: "行動應用" },
  { id: "3d", label: "3D 體驗" },
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
                {categoryIcons[cat.id]}
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
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="group relative overflow-hidden rounded-2xl bg-neutral-900 aspect-[4/3] cursor-pointer border border-neutral-800 block"
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
                  </div>
                </Link>
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
