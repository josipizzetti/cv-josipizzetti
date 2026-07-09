import { useState, useEffect } from "react";
import { Github, ExternalLink, Mail, Linkedin, ArrowRight, MapPin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import avatarImage from "@/assets/josi.jpg";
import StackIcon from "tech-stack-icons";
import minisThumb from "@/assets/minis-thumb.jpeg";
import fithiitbyanaThumb from "@/assets/fithiitbyana-thumb.png";
import gaspedaalThumb from "@/assets/gaspedaal-thumb.png";
import { ProjectPreview } from "./components/layout/ProjectPreview";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";


const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

const SKILLS = [
  { name: "JavaScript", abbr: <StackIcon name="js" variant="dark"/> , bg: "#F7DF1E", fg: "#000000" },
  { name: "CSS3", abbr: <StackIcon name="css3" variant="dark"/> , bg: "#264de4", fg: "#ffffff" },
  { name: "HTML5", abbr: <StackIcon name="html5" variant="dark"/> , bg: "#e34f26", fg: "#ffffff" },
  { name: "React", abbr: <StackIcon name="react" variant="dark"/> , bg: "#20232a", fg: "#61DAFB" },
  { name: "React Native", abbr: <StackIcon name="reactnative" variant="dark"/> , bg: "#1a1f2e", fg: "#61DAFB" },
  { name: "TypeScript", abbr: <StackIcon name="typescript" variant="dark"/> , bg: "#007ACC", fg: "#ffffff" },
  { name: "Next.js", abbr: <StackIcon name="nextjs" variant="dark"/> , bg: "#000000", fg: "#ffffff" },
  { name: "tailwindcss", abbr: <StackIcon name="tailwindcss" variant="dark"/> , bg: "#333333", fg: "#68A063" },
  { name: "Git", abbr: <StackIcon name="git" variant="dark"/> , bg: "#F05032", fg: "#ffffff" },
];


const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Shopify",
    period: "Sept 2022 — Feb 2025",
    location: "Remote",
    desc: "Built cross-platform mobile experiences using React Native for the Minis team, enabling merchants to add interactive content to their online stores. Collaborated with designers and product managers to translate Figma prototypes into production-ready code, ensuring pixel-perfect implementation across iOS and Android platforms. Integrated RESTful APIs to fetch and display dynamic content within Minis(micro-apps), ensuring seamless data flow between front-end and back-end services. Collaborated with the design system team to align Minis with Shopify's Polaris design guidelines, ensuring consistent brand experience.",
    tags: ["React", "React Native", "TypeScript", "GraphQL"],
  },
  {
    role: "Front-End Developer",
    company: "Sendsteps",
    period: "Jan 2022 — Sept 2022",
    location: "Amsterdam, NL",
    desc: `Developed and maintained interactive front-end features for an audience engagement platform used by thousands of educators and corporate trainers to create live polls, quizzes, and presentations.
Translated UI/UX designs into responsive web interfaces using HTML5, CSS, and JavaScript, ensuring seamless functionality across desktop and mobile devices.
Collaborated with back-end developers to integrate RESTful APIs, enabling real-time data synchronization for live audience responses.
Participated in agile ceremonies including daily stand-ups and sprint planning, contributing to on-time delivery of all assigned features.`,
    tags: ["HTML5", "CSS3", "JavaScript", "Git"],
  },
  {
    role: "Front-End Developer",
    company: "Gaspedaal.nl / AMV Automotive Media Ventures",
    period: "Apr 2019 — Jan 2022",
    location: "Amsterdam, NL",
    desc: `Led the complete front-end rewrite of Gaspedaal.nl from a legacy PHP monolith to a modern React and Next.js architecture, serving 500,000+ monthly active users.
Architected and implemented a component-based UI library in React, improving development velocity and ensuring consistency across the platform.
Leveraged Next.js for server-side rendering (SSR) and static site generation (SSG), reducing page load times and significantly improving SEO rankings.
Collaborated with back-end developers to design RESTful APIs that served data efficiently to the new React front-end. Mentored junior developers on React best practices, modern JavaScript (ES6+), and component reusability.`,
    tags: ["React", "Next.js", "React Native", "Redux", "Rest APIs", "Git"],
  },
  {
    role: "Front-End Developer",
    company: "Young Capital",
    period: "Jun 2018 — Mar 2019",
    location: "Amsterdam, NL",
    desc: `Built interactive user interfaces for a leading Dutch job platform using React, CSS3, focusing on the candidate job search and application experience.
Managed application state using React's built-in state management and context API, ensuring smooth data flow between components.
Collaborated with back-end developers to integrate RESTful APIs, displaying dynamic job data with response times.
Ensured cross-browser compatibility and responsive design across desktop, tablet, and mobile devices using CSS and HTML5. Participated in code reviews and maintained code quality standards using ESLint and Prettier.`,
    tags: ["React", "Restful APIs", "Git"],
  },
  {
    role: "Full-Stack Developer",
    company: "Neoway Business Solutions",
    period: "Nov 2017 - Jan 2018",
    location: "Florianopolis, BR",
    desc: `Integrated, web design and development for e-commerce solutions, working on projects for Brazil’s top retailers .  Main technologies: JavaScript, JQuery, HTML, CSS.  Collaborated with back-end developers to integrate RESTful APIs, displaying dynamic job data with response times. Ensured cross-browser compatibility and responsive design across desktop, tablet, and mobile devices using CSS and HTML5. Participated in code reviews and maintained code quality standards using ESLint and Prettier.`,
    tags: ["JavaScript", "JQuery", "HTML5", "CSS3"],
  },
  {
    role: "Front-End Developer",
    company: "Chaordic",
    period: "Sept 2015 — Nov 2017",
    location: "Florianopolis, BR",
    desc: `Integrated, web design and development for e-commerce solutions, working on projects for Brazil’s top retailers .  Main technologies: JavaScript, JQuery, HTML, CSS.  Collaborated with back-end developers to integrate RESTful APIs, displaying dynamic job data with response times. Ensured cross-browser compatibility and responsive design across desktop, tablet, and mobile devices using CSS and HTML5. Participated in code reviews and maintained code quality standards using ESLint and Prettier.`,
    tags: ["JavaScript", "JQuery", "HTML5", "CSS3"],
  },
];

const PROJECTS = [
  {
    name: "Shopify Minis",
    year: "2025",
    desc: "Developed cross-platform mobile experiences using React Native for Shopify's Minis team, enabling merchants to add interactive content to their online stores.",
    tags: ["React Native", "TypeScript", "GraphQL"],
    previewBg: "#111111",
    previewType: "website" as const,
    previewUrl: "https://shop.app/minis",
    previewThumb: minisThumb,
    live: "https://shop.app/minis",
  },
  {
    name: "FitHiitByAna",
    year: "2022",
    desc: "Developed a landing page for a fitness app using React and Sass, ensuring responsive design and cross-browser compatibility.",
    tags: ["React", "Sass", "Responsive Design"],
    previewBg: "#111111",
    previewType: "website" as const,
    previewUrl: "https://fithiitbyana.com",
    previewThumb: fithiitbyanaThumb,
    live: "https://fithiitbyana.com",
  },
  {
    name: "Gaspedaal.nl",
    year: "2022",
    desc: "Redesigned and rebuilt the front-end of a high-traffic automotive marketplace using React and Next.js, improving performance, accessibility, and user experience.",
    tags: ["React", "Next.js", "Redux"],
    previewBg: "#111111",
    previewType: "website" as const,
    previewUrl: "https://gaspedaal.nl",
    previewThumb: gaspedaalThumb,
    live: "https://gaspedaal.nl",
  },
];

const EDUCATION = [
  {
    degree: "System Analysis and Development",
    institution: "Paulista University",
    period: "2015 — 2017",
    note: "Focus on Human-Computer Interaction & Web Technologies.",
  },
  {
    degree: "JavaScript, Information Technology",
    institution: "Technical Generation course",
    period: "2015",
    note: "Front-end development with HTML5, CSS3, JavaScript, JQuery.",
  },
  {
    degree: "The programmer academy, Information Technology",
    institution: "V.Office - GlobalCode",
    period: "2015",
    note: "Training course about initial programming skills and introduction to Java platform.",
  },
];

export default function App() {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  return (
    <div
      className="bg-black min-h-screen text-[#fffeff]"
      style={{ fontFamily: "'DM Sans', sans-serif", scrollBehavior: "smooth" }}
    >
      {/* ── NAV ─────────────────────────────────────────────── */}
      <Header />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
        {/* Red panel — right third */}
        <div className="absolute top-0 right-0 w-[38%] h-full bg-[#D4D4D4] hidden md:block" />
        {/* Diagonal slice on red panel */}
        <div
          className="absolute top-0 hidden md:block h-full w-20 bg-[#D4D4D4]"
          style={{ right: "calc(38% - 2rem)", clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[calc(100vh-4rem)]">
            {/* Text */}
            <div className="md:col-span-7 flex flex-col justify-center py-20 md:py-0">
              <p
                className="text-xs tracking-[0.35em] uppercase text-[#f3ec86] mb-6"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Front-End Software Engineer
              </p>
              <h1
                className="font-black uppercase leading-[0.9] text-[#fffeff] mb-6"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(3.5rem, 10vw, 8.5rem)",
                }}
              >
                JOSIANE
                <br />
                <span style={{ WebkitTextStroke: "2px #f3ec86", color: "transparent" }}>
                  S. PIZZETTI
                </span>
              </h1>
              <p className="text-base md:text-lg text-[#fffeff] max-w-md leading-relaxed mb-10">
                Crafting fast, accessible, and beautiful interfaces — from{" "}
                <span className="text-[#f3ec86]">web apps</span> to{" "}
                <span className="text-[#f3ec86]">mobile products</span>.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 bg-[#D4D4D4] px-7 py-3 text-black text-sm font-medium tracking-wide hover:bg-[#f3ec86] hover:text-black transition-all duration-200"
                >
                  View Projects
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:josiane.pizzetti@gmail.com"
                  className="inline-flex items-center gap-2 border border-white/20 px-7 py-3 text-white/70 text-sm hover:border-[#f3ec86] hover:text-[#f3ec86] transition-all duration-200"
                >
                  <Mail size={14} />
                  Say Hello
                </a>
              </div>
            </div>

            {/* Avatar */}
            <div className="md:col-span-5 flex justify-center md:justify-end items-center py-8 md:py-0 relative z-10">
              <div className="relative">
                {/* Offset frame */}
                <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#f3ec86] pointer-events-none" />
                {/* Photo area */}
                <Avatar className="aspect-[3/4] h-[350px] w-auto shrink-0 overflow-hidden rounded-none"
                  onMouseEnter={() => setIsAvatarHovered(true)}
                  onMouseLeave={() => setIsAvatarHovered(false)}
                >
                  <AvatarImage
                    src={avatarImage}
                    alt="Josiane Pizzetti"
                    className={`h-full w-full object-cover object-top aspect-auto ${
                      !isAvatarHovered ? 'grayscale' : 'grayscale-0'
                    } transition-all duration-700 ease-in-out`}
                  />
                  <AvatarFallback className="rounded-none text-2xl">JSP</AvatarFallback>
                </Avatar>
                {/* Experience badge */}
                <div
                  className="absolute -bottom-5 -right-5 bg-[#f3ec86] px-4 py-2 text-black text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  9+ YRS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-8 hidden md:flex flex-col items-center gap-2">
          <span
            className="text-[10px] tracking-[0.3em] text-white/25 uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace", writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <div className="w-px h-10 bg-white/15" />
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────── */}
      <section id="about" className="py-28 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p
                className="text-xs tracking-[0.3em] text-[#D4D4D4] uppercase mb-5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                01 — About
              </p>
              <h2
                className="text-5xl md:text-6xl font-bold uppercase text-[#fffeff] leading-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Who<br />I Am
              </h2>
            </div>
            <div className="md:col-span-8 flex flex-col justify-center gap-6">
              <p className="text-xl md:text-2xl text-[#fffeff] leading-relaxed">
                I live at the intersection of{" "}
                <span className="text-[#f3ec86]">design thinking</span> and{" "}
                <span className="text-[#f3ec86]">engineering rigour</span> — translating complex ideas into interfaces that feel effortless.
              </p>
              <p className="text-sm md:text-base text-[#fffeff] leading-relaxed max-w-xl">
              I help e-commerce platforms, SaaS startups, and scale-ups turn complex Figma designs into high-performance React, Next.js, and React Native applications. With a background at Shopify and experience serving 500,000+ monthly users, I specialize in migrating legacy systems, optimizing page load speeds, and building cross-platform mobile experiences that drive merchant retention. Available for end-to-end project delivery, team augmentation, or technical consulting.
              </p>
              <p className="text-sm md:text-base text-[#fffeff] leading-relaxed max-w-xl">
              What I Deliver:
              </p>
              <ul>
                <li>🚀 Next.js Migrations – Full rewrites from legacy PHP to modern, SEO-optimized React.</li>
                <li>📱 React Native Apps – Cross-platform iOS/Android, pixel-perfect from Figma.</li>
                <li>⚡ Performance Audits – Slashing LCP & Core Web Vitals for 500k+ user platforms.</li>
                <li>🛠 Design Systems – Aligning custom components with enterprise guidelines.</li>
                <li>🤝 Tech Mentorship – Upskilling junior dev teams for your project.</li>
              </ul>
              <p className="text-sm md:text-base text-[#fffeff] leading-relaxed max-w-xl">Open to freelance contracts and consulting engagements. Let's connect – I'd love to hear about your next project.</p>
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

      {/* ── SKILLS ──────────────────────────────────────────── */}
      <section id="skills" className="py-28 border-t border-white/10 bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p
                className="text-xs tracking-[0.3em] text-[#D4D4D4] uppercase mb-5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                02 — Skills
              </p>
              <h2
                className="text-5xl md:text-6xl font-bold uppercase text-[#fffeff]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Tech Stack
              </h2>
            </div>
            <p
              className="text-xs text-white/25 md:text-right max-w-xs"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Some of the tools I reach for every day.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="group aspect-square flex flex-col items-center justify-center gap-2 cursor-default transition-all duration-200 hover:scale-[1.06] hover:z-10 relative"
                style={{ background: skill.bg }}
              >
                <span
                  className="font-black leading-none text-2xl md:text-3xl"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", color: skill.fg }}
                >
                  {skill.abbr}
                </span>
                <span
                  className="text-[9px] text-center leading-tight px-1 opacity-75"
                  style={{ color: skill.fg, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ──────────────────────────────────────── */}
      <section id="experience" className="py-28 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs tracking-[0.3em] text-[#D4D4D4] uppercase mb-5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            03 — Experience
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold uppercase text-[#fffeff] mb-16"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Where I've<br />Worked
          </h2>

          <div>
            {EXPERIENCE.map((exp, i) => (
              <div
                key={i}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-300"
              >
                {/* Meta */}
                <div className="md:col-span-3">
                  <p
                    className="text-xs text-white/35 mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {exp.period}
                  </p>
                  <p
                    className="text-xs text-white/25 inline-flex items-center gap-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <MapPin size={10} />
                    {exp.location}
                  </p>
                </div>

                {/* Spine */}
                <div className="hidden md:flex md:col-span-1 justify-center">
                  <div className="w-px bg-white/10 relative">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#D4D4D4] group-hover:bg-[#f3ec86] transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-8">
                  <h3 className="text-lg md:text-xl font-semibold text-[#fffeff] mb-1 group-hover:text-[#f3ec86] transition-colors">
                    {exp.role}
                  </h3>
                  <p
                    className="text-xs text-[#D4D4D4] mb-4 tracking-wide uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {exp.company}
                  </p>
                  <p className="text-sm text-[#fffeff] leading-relaxed mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 border border-white/12 text-white/35"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────── */}
      <section id="projects" className="py-28 border-t border-white/10 bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p
                className="text-xs tracking-[0.3em] text-[#D4D4D4] uppercase mb-5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                04 — Projects
              </p>
              <h2
                className="text-5xl md:text-6xl font-bold uppercase text-[#fffeff]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Selected<br />Work
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {PROJECTS.map((project, i) => (
              <article
                key={i}
                className="group flex flex-col border border-white/10 hover:border-[#D4D4D4]/60 transition-all duration-300"
              >
                {/* Preview */}
                <div className="overflow-hidden flex-shrink-0">
                      {project.previewType === "website" && project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      aria-label={`Open ${project.name} live preview`}
                    >
                      <div className="transform group-hover:scale-[1.02] transition-transform duration-500 origin-center">
                        <ProjectPreview type={project.previewType} bg={project.previewBg} url={project.previewUrl} thumb={project.previewThumb} />
                      </div>
                    </a>
                  ) : (
                    <div className="transform group-hover:scale-[1.02] transition-transform duration-500 origin-center">
                      <ProjectPreview type={project.previewType} bg={project.previewBg} url={project.previewUrl} thumb={project.previewThumb} />
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6 bg-[#0f0f0f]">
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className="text-lg font-semibold text-[#fffeff] group-hover:text-[#f3ec86] transition-colors leading-tight"
                    >
                      {project.name}
                    </h3>
                    <span
                      className="text-[10px] text-white/25 shrink-0 ml-3 mt-0.5"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-[#fffeff] leading-relaxed mb-4 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] px-2 py-0.5 bg-white/5 text-white/35"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-5 pt-4 border-t border-white/8">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] text-white/35 hover:text-[#f3ec86] transition-colors"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      <ExternalLink size={11}/> Live Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ───────────────────────────────────────── */}
      <section id="education" className="py-28 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs tracking-[0.3em] text-[#D4D4D4] uppercase mb-5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            05 — Education
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold uppercase text-[#fffeff] mb-16"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Academic<br />Background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="border-l-2 border-[#D4D4D4] pl-8 py-2 group">
                <p
                  className="text-xs text-[#f3ec86] mb-3"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {edu.period}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-[#fffeff] mb-1 group-hover:text-[#f3ec86] transition-colors">
                  {edu.degree}
                </h3>
                <p
                  className="text-xs text-[#D4D4D4] mb-3 tracking-wide uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {edu.institution}
                </p>
                <p className="text-sm text-[#fffeff] leading-relaxed">{edu.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <Footer />
            
    </div>
  );
}
