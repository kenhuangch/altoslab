import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "首頁", href: isHomePage ? "#hero" : "/#hero" },
    { name: "關於我們", href: isHomePage ? "#about" : "/#about" },
    { name: "作品集", href: isHomePage ? "#projects" : "/#projects" },
    { name: "聯絡資訊", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#") && isHomePage) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
          ALTOS <span className="text-cyan-400">LAB</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            link.href.startsWith("#") && isHomePage ? (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "關閉選單" : "開啟選單"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                link.href.startsWith("#") && isHomePage ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-lg font-medium text-gray-200 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-200 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
