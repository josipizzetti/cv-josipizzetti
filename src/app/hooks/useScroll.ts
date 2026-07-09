import { useState, useEffect } from "react";

export const useScroll = (threshold: number = 10) => {
 const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setScrollProgress((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrolled, scrollProgress };
};