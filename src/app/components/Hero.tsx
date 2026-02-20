import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Matrix/Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black z-10" />
        
        {/* Animated Particles/Orbs */}
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full blur-[120px] opacity-20"
                    style={{
                        width: Math.random() * 400 + 200,
                        height: Math.random() * 400 + 200,
                        background: i % 2 === 0 ? '#22d3ee' : '#9333ea', // Cyan and Purple
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        x: [0, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>

        {/* Dynamic Grid Overlay */}
        <div 
            className="absolute inset-0 opacity-[0.15]" 
            style={{ 
                backgroundImage: `linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
            }} 
        />
        
        {/* Animated Scanning Line */}
        <motion.div 
            className="absolute inset-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent z-[5]"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1 mb-6 border border-cyan-500/30 rounded-full bg-cyan-900/10 backdrop-blur-md">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em] animate-pulse">
                System Initialized
            </span>
          </div>
          
          <h2 className="text-gray-400 font-medium tracking-[0.2em] mb-4 uppercase text-sm md:text-base">
            Future Digital Experience
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
            ALTOS <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-600 animate-gradient-x">
              LAB
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-light">
            我們打造極致的數位體驗。結合 <span className="text-white">AI 驅動</span> 的創意設計與尖端技術，<br className="hidden md:block" />為您的品牌創造獨一無二的未來。
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 bg-white text-black px-10 py-5 rounded-full font-black text-lg overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">瀏覽作品</span>
              <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>
    </section>
  );
};
