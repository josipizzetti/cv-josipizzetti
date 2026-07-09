import { SKILLS } from "@/app/constants/skills";
import SectionHeader from "../shared/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-white/10 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <SectionHeader index="02" label="Skills" title={<>Tech Stack</>} />
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
  );
}
