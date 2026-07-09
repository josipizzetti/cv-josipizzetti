import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 bg-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p
            className="text-[10px] text-white/20 tracking-[0.3em] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Josiane S. Pizzetti · Front-End Engineer · 2026
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/josipizzetti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 hover:text-[#f3ec86] transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/josipizzetti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 hover:text-[#f3ec86] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:josipizzetti@gmail.com"
            className="text-white/25 hover:text-[#f3ec86] transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
