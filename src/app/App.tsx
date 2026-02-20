import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-400 selection:text-black">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}
