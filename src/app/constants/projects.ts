type ProjectType = {
  name: string;
  year: string;
  desc: string;
  tags: string[];
  previewBg: string;
  previewType: "website";
  previewUrl: string;
  previewThumb: string;
  live: string;
};

import minisThumb from "@/assets/minis-thumb.jpeg";
import fithiitbyanaThumb from "@/assets/fithiitbyana-thumb.png";
import gaspedaalThumb from "@/assets/gaspedaal-thumb.png";
export const PROJECTS: ProjectType[] = [
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