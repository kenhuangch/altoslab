import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { CustomCursor } from "./components/CustomCursor";
import { ProjectDetail } from "./pages/ProjectDetail";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// 作品獨立頁面元件 (之後可以移出到獨立檔案)
const ProjectsPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          所有作品項目
        </h1>
        <p className="text-gray-400 text-xl mb-12">這裡展示了 Altos Lab 歷年來的所有技術結晶。</p>
        <Projects />
      </div>
    </div>
  );
};

// 首頁元件
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Projects />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-400 selection:text-black">
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Contact />
      </div>
    </BrowserRouter>
  );
}
