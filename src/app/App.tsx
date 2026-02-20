import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { CustomCursor } from "./components/CustomCursor";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder for Detail Page (to be refined by Gemini Pro)
const ProjectDetail = () => (
  <div className="pt-32 min-h-screen bg-black text-center">
    <h1 className="text-4xl font-bold text-white">專案詳情頁面 (建設中)</h1>
    <a href="/" className="text-cyan-400 mt-8 inline-block hover:underline">返回首頁</a>
  </div>
);

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
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Contact />
      </div>
    </BrowserRouter>
  );
}
