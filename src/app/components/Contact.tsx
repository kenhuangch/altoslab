import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook, Send, ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 接入後端 API 或 EmailJS
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer id="contact" className="bg-neutral-950 text-white relative pt-10">
      
      {/* Call to Action Section */}
      <div className="container mx-auto px-6 mb-24">
        <div className="bg-neutral-900 rounded-3xl p-8 md:p-16 border border-neutral-800 relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div className="flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 mb-6 border border-cyan-500/30 rounded-full bg-cyan-900/10 backdrop-blur-sm self-start">
                        <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">GET IN TOUCH</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        準備好開始您的 <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            下一個專案了嗎？
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                        無論您有一個大膽的想法，還是需要專業的技術諮詢，我們都在這裡隨時準備聆聽。讓我們一起創造卓越的數位體驗。
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-cyan-400">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email us</p>
                                <p className="text-lg font-bold">hello@altoslab.tw</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-cyan-400">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Call us</p>
                                <p className="text-lg font-bold">+886 2 2345 6789</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <MessageSquare size={20} className="text-cyan-400" />
                        傳送訊息
                    </h3>
                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="contact-name" className="text-sm text-gray-400 ml-1">姓名</label>
                                <input id="contact-name" type="text" required className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all" placeholder="John Doe" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="contact-phone" className="text-sm text-gray-400 ml-1">聯絡電話</label>
                                <input id="contact-phone" type="tel" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all" placeholder="0912 345 678" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="contact-email" className="text-sm text-gray-400 ml-1">電子郵件</label>
                            <input id="contact-email" type="email" required className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all" placeholder="john@example.com" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="contact-type" className="text-sm text-gray-400 ml-1">專案類型</label>
                            <select id="contact-type" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all text-gray-400">
                                <option value="">請選擇專案類型</option>
                                <option value="web">網站設計與開發</option>
                                <option value="app">行動應用程式 App</option>
                                <option value="brand">品牌識別設計</option>
                                <option value="other">其他合作諮詢</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="contact-message" className="text-sm text-gray-400 ml-1">訊息內容</label>
                            <textarea id="contact-message" rows={4} required className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none" placeholder="請簡單描述您的需求..."></textarea>
                        </div>
                        {submitted && (
                          <p className="text-cyan-400 text-sm text-center py-2">✓ 訊息已送出，我們會盡快與您聯繫！</p>
                        )}
                        <button type="submit" className="w-full bg-white text-black hover:bg-cyan-400 hover:text-black font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group mt-2">
                            發送訊息 <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>

      <div className="border-t border-neutral-900 pt-16 pb-8">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-2">
                    <a href="#" className="text-3xl font-bold tracking-tighter text-white block mb-6">
                    ALTOS <span className="text-cyan-400">LAB</span>
                    </a>
                    <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
                        我們致力於創造有意義的數位體驗。結合設計美學與創新技術，為品牌打造獨特的數位足跡。
                    </p>
                    <div className="flex gap-4">
                        <SocialLink icon={<Instagram size={18} />} label="Instagram" href="#" />
                        <SocialLink icon={<Twitter size={18} />} label="Twitter / X" href="#" />
                        <SocialLink icon={<Linkedin size={18} />} label="LinkedIn" href="#" />
                        <SocialLink icon={<Facebook size={18} />} label="Facebook" href="#" />
                    </div>
                </div>
                
                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Sitemap</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#hero" className="hover:text-cyan-400 transition-colors">首頁</a></li>
                        <li><a href="#about" className="hover:text-cyan-400 transition-colors">關於我們</a></li>
                        <li><a href="#projects" className="hover:text-cyan-400 transition-colors">精選作品</a></li>
                        <li><a href="#contact" className="hover:text-cyan-400 transition-colors">聯絡資訊</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Office</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                            <span>台北市信義區信義路五段7號<br/>101大樓 56F</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-cyan-400 flex-shrink-0" />
                            <span>hello@altoslab.tw</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                <p>&copy; {new Date().getFullYear()} ALTOS LAB. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) => (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-gray-400 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
    >
        {icon}
    </a>
)
