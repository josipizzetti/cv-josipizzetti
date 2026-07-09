import React from "react";
import StackIcon from "tech-stack-icons";

type Skill = {
  name: string;
  abbr: React.ReactNode;
  bg: string;
  fg: string;
};

export const SKILLS: Skill[] = [
  { name: "JavaScript", abbr: React.createElement(StackIcon, { name: "js", variant: "dark" }), bg: "#F7DF1E", fg: "#000000" },
  { name: "CSS3", abbr: React.createElement(StackIcon, { name: "css3", variant: "dark" }), bg: "#264de4", fg: "#ffffff" },
  { name: "HTML5", abbr: React.createElement(StackIcon, { name: "html5", variant: "dark" }), bg: "#e34f26", fg: "#ffffff" },
  { name: "React", abbr: React.createElement(StackIcon, { name: "react", variant: "dark" }), bg: "#20232a", fg: "#61DAFB" },
  { name: "React Native", abbr: React.createElement(StackIcon, { name: "reactnative", variant: "dark" }), bg: "#1a1f2e", fg: "#61DAFB" },
  { name: "TypeScript", abbr: React.createElement(StackIcon, { name: "typescript", variant: "dark" }), bg: "#007ACC", fg: "#ffffff" },
  { name: "Next.js", abbr: React.createElement(StackIcon, { name: "nextjs", variant: "dark" }), bg: "#000000", fg: "#ffffff" },
  { name: "tailwindcss", abbr: React.createElement(StackIcon, { name: "tailwindcss", variant: "dark" }), bg: "#333333", fg: "#68A063" },
  { name: "Git", abbr: React.createElement(StackIcon, { name: "git", variant: "dark" }), bg: "#F05032", fg: "#ffffff" },
];