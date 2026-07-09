import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/app/constants/navLinks";
import { useScroll } from "@/app/hooks/useScroll";

const Header = () => {
  const { scrolled, scrollProgress } = useScroll(60);
  

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/96 backdrop-blur-sm border-b border-white/10" : ""
      }`}
    >
      <div 
        className="h-0.5 bg-[#f3ec86] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span
          className="text-sm tracking-[0.25em] uppercase text-[#f3ec86]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          JSP
        </span>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase text-white/40 hover:text-[#f3ec86] transition-colors duration-200"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
