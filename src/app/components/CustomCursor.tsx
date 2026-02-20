import React, { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    // Ring uses spring-like lerp via rAF for smooth lag
    const animate = () => {
      const lerp = 0.15;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button");

      if (ringRef.current) {
        ringRef.current.style.scale = isInteractive ? "1.6" : "1";
        ringRef.current.style.backgroundColor = isInteractive
          ? "rgba(255,255,255,0.15)"
          : "transparent";
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div aria-hidden="true">
      {/* Ring — laggy spring follow */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white mix-blend-difference pointer-events-none z-[9999] hidden md:block will-change-transform"
        style={{ transition: "scale 0.2s ease, background-color 0.2s ease" }}
      />
      {/* Dot — instant follow */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999] hidden md:block will-change-transform"
      />
    </div>
  );
};
