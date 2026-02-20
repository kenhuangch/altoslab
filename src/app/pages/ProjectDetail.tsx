import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Tag, Calendar, User, Briefcase } from "lucide-react";
import { projects } from "../../data/projects";

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
        <p className="text-gray-400 text-xl">找不到此專案</p>
        <Link
          to="/#projects"
          className="px-6 py-3 rounded-full bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 transition-colors"
        >
          返回作品集
        </Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[currentIndex - 1] ?? null;
  const nextProject = projects[currentIndex + 1] ?? null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white"
    >
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Back button */}
        <div className="absolute top-8 left-6 z-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-sm text-gray-300 hover:text-white hover:border-white/30 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            返回
          </button>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 mb-4 rounded-full border border-cyan-500/40 bg-cyan-900/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
              {project.categoryLabel}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
                關於此專案
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Tags */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4 flex items-center gap-2">
                <Tag size={14} /> 技術 & 工具
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-sm font-medium bg-neutral-900 border border-neutral-700 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 space-y-6">
              <InfoRow icon={<Calendar size={16} />} label="年份" value={project.year} />
              <InfoRow icon={<Briefcase size={16} />} label="客戶" value={project.client} />
              <InfoRow icon={<User size={16} />} label="角色" value={project.role} />
            </div>

            <Link
              to="/#projects"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full border border-neutral-700 text-gray-400 text-sm font-bold uppercase tracking-widest hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
            >
              <ArrowLeft size={16} />
              回到作品集
            </Link>
          </motion.aside>
        </div>

        {/* Prev / Next navigation */}
        {(prevProject || nextProject) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-24 pt-12 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.id}`}
                className="group flex flex-col gap-2 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 transition-colors duration-300"
              >
                <span className="text-xs text-gray-500 uppercase tracking-widest flex items-center gap-1">
                  <ArrowLeft size={12} /> 上一個專案
                </span>
                <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {prevProject.title}
                </span>
                <span className="text-sm text-gray-500">{prevProject.categoryLabel}</span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.id}`}
                className="group flex flex-col gap-2 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 transition-colors duration-300 md:text-right"
              >
                <span className="text-xs text-gray-500 uppercase tracking-widest flex items-center gap-1 md:justify-end">
                  下一個專案 <ArrowLeft size={12} className="rotate-180" />
                </span>
                <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {nextProject.title}
                </span>
                <span className="text-sm text-gray-500">{nextProject.categoryLabel}</span>
              </Link>
            ) : (
              <div />
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const InfoRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex flex-col gap-1">
    <span className="text-xs text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
      {icon} {label}
    </span>
    <span className="text-white font-medium">{value}</span>
  </div>
);
