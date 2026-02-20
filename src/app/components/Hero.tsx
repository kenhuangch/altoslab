import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const TITLE = "ALTOSLAB";
const SPLIT = 5; // ALTOS | LAB

export const Hero = () => {
  const [count, setCount] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (count < TITLE.length) {
      const t = setTimeout(() => setCount((c) => c + 1), 110);
      return () => clearTimeout(t);
    }
    let blinks = 0;
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
      if (++blinks >= 6) {
        clearInterval(interval);
        setCursorVisible(false);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [count]);

  const altosStr = TITLE.slice(0, Math.min(count, SPLIT));
  const labStr = count > SPLIT ? TITLE.slice(SPLIT, count) : "";
  const cursorOnAltos = count <= SPLIT;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1762278804729-13d330fad71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBuZW9uJTIwZGFya3xlbnwxfHx8fDE3NzE1MTc5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract Neon Background"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-cyan-400 font-medium tracking-[0.2em] mb-4 uppercase text-sm md:text-base">
            Future Digital Experience
          </h2>
          <h1 className="text-7xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-tight">
            {altosStr}
            {cursorOnAltos && cursorVisible && (
              <span className="text-cyan-400">|</span>
            )}
            {labStr && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                {labStr}
              </span>
            )}
            {!cursorOnAltos && cursorVisible && (
              <span className="text-purple-400">|</span>
            )}
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            我們打造極致的數位體驗。結合創意設計與尖端技術，為您的品牌創造獨一無二的網路存在感。
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
            >
              瀏覽作品
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
