import { Github, Linkedin, Mail } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

const About = () => {
  return (
    <section id="about" className="py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <SectionHeader index="01" label="About" title={<>Who<br />I Am</>} />
          <div className="md:col-span-8 flex flex-col justify-center gap-6">
            <p className="text-xl md:text-2xl text-[#fffeff] leading-relaxed">
              I live at the intersection of <span className="text-[#f3ec86]">design thinking</span> and <span className="text-[#f3ec86]">engineering rigour</span> — translating complex ideas into interfaces that feel effortless.
            </p>
            <p className="text-sm md:text-base text-[#fffeff] leading-relaxed max-w-xl">
              I help e-commerce platforms, SaaS startups, and scale-ups turn complex Figma designs into high-performance React, Next.js, and React Native applications. With a background at Shopify and experience serving 500,000+ monthly users, I specialize in migrating legacy systems, optimizing page load speeds, and building cross-platform mobile experiences that drive merchant retention. Available for end-to-end project delivery, team augmentation, or technical consulting.
            </p>
            <p className="text-sm md:text-base text-[#fffeff] leading-relaxed max-w-xl">
              What I Deliver:
            </p>
            <ul className="text-sm md:text-base text-[#fffeff] leading-relaxed max-w-xl space-y-2">
              <li>🚀 Next.js Migrations – Full rewrites from legacy PHP to modern, SEO-optimized React.</li>
              <li>📱 React Native Apps – Cross-platform iOS/Android, pixel-perfect from Figma.</li>
              <li>⚡ Performance Audits – Slashing LCP & Core Web Vitals for 500k+ user platforms.</li>
              <li>🛠 Design Systems – Aligning custom components with enterprise guidelines.</li>
              <li>🤝 Tech Mentorship – Upskilling junior dev teams for your project.</li>
            </ul>
            <p className="text-sm md:text-base text-[#fffeff] leading-relaxed max-w-xl">
              Open to freelance contracts and consulting engagements. Let's connect – I'd love to hear about your next project.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <a
                href="https://github.com/josipizzetti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-[#f3ec86] transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/josipizzetti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-[#f3ec86] transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="mailto:josipizzetti@gmail.com"
                className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-[#f3ec86] transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <Mail size={14} /> josipizzetti@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
