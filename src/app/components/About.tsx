import React from "react";
import { motion } from "motion/react";
import { Code, Palette, Smartphone, Zap, Target, Lightbulb, Rocket } from "lucide-react";

const services = [
  {
    icon: <Palette size={32} />,
    title: "UI/UX 設計",
    description: "以用戶為中心的設計理念，打造直觀且美觀的介面體驗。",
  },
  {
    icon: <Code size={32} />,
    title: "網頁開發",
    description: "運用最新的前端技術，構建高性能、響應式的現代化網站。",
  },
  {
    icon: <Smartphone size={32} />,
    title: "行動應用",
    description: "跨平台 App 開發，確保您的服務在任何設備上都能完美運行。",
  },
  {
    icon: <Zap size={32} />,
    title: "數位轉型",
    description: "協助企業進行數位化升級，提升營運效率與市場競爭力。",
  },
];

const workflowSteps = [
  {
    icon: <Lightbulb size={24} />,
    step: "01",
    title: "策略規劃",
    desc: "深入了解需求，制定精準的產品策略與開發藍圖。"
  },
  {
    icon: <Target size={24} />,
    step: "02",
    title: "視覺設計",
    desc: "打造符合品牌形象的視覺風格，確保最佳的使用者體驗。"
  },
  {
    icon: <Code size={24} />,
    step: "03",
    title: "技術開發",
    desc: "採用現代化技術堆疊，編寫乾淨、可維護的高效代碼。"
  },
  {
    icon: <Rocket size={24} />,
    step: "04",
    title: "測試發布",
    desc: "嚴格的品質測試與效能優化，確保產品完美上線。"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-6 border border-cyan-500/30 rounded-full bg-cyan-900/10 backdrop-blur-sm">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">WHO WE ARE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              關於 <span className="text-cyan-400">ALTOS LAB</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Altos Lab 是一間專注於數位創新的設計工作室。我們相信，優秀的設計不僅僅是外觀，更是解決問題的關鍵。
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              我們的團隊由一群熱愛技術與藝術的創作者組成，致力於將抽象的概念轉化為具體的數位產品。無論是新創公司還是大型企業，我們都能提供量身打造的解決方案。
            </p>
            
            <div className="flex flex-wrap gap-8 pt-4 border-t border-neutral-800">
                <div>
                    <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">完成專案</p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">客戶滿意</p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-white mb-1">5+</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">年經驗</p>
                </div>
            </div>
          </motion.div>
          
          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 group">
                <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1518117823675-9a4bb23df61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBjcmVhdGl2ZSUyMG1pbmltYWxpc3RpYyUyMGRlc2t8ZW58MXx8fHwxNzcxNTE3OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Workspace"
                  loading="lazy"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-neutral-800 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="mb-32">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl font-bold text-white">我們的服務</h3>
                <div className="h-1 w-12 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-neutral-800 transition-all group cursor-pointer border border-neutral-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5"
                >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300 inline-flex p-3 bg-neutral-900 rounded-lg">
                    {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
            ))}
            </div>
        </div>

        {/* Process Section */}
        <div>
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl font-bold text-white">工作流程</h3>
                <div className="h-1 w-12 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {workflowSteps.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="relative p-8 border-l border-neutral-800 hover:border-cyan-500 transition-colors group"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neutral-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        <div className="text-5xl font-black text-neutral-800 mb-6 group-hover:text-cyan-500/20 transition-colors select-none">
                            {item.step}
                        </div>
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                             {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
