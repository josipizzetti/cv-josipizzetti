export type ExperienceType = {
  role: string;
  company: string;
  period: string;
  location: string;
  desc: string;
  tags: string[];
};

export const EXPERIENCE: ExperienceType[] = [
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