import { MapPin } from 'lucide-react';
import { ExperienceType } from '@/app/constants/experience';
import { SkillsBadge } from '../shared/SkillsBadge';
import SectionHeader from '../shared/SectionHeader';
import { useData } from '@/app/hooks/useData';

export default function Experience() {
  const { data, loading, error } = useData<ExperienceType[]>('experience');

  if (loading) {
    return (
      <section id="experience" className="py-28 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 animate-pulse">
            <div className="h-3 w-16 rounded bg-white/10 mb-4" />
            <div className="h-8 w-56 rounded bg-white/10" />
          </div>

          <div className="space-y-8">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-white/10"
              >
                <div className="md:col-span-3 space-y-3">
                  <div className="h-3 w-24 rounded bg-white/10" />
                  <div className="h-3 w-32 rounded bg-white/10" />
                </div>

                <div className="hidden md:flex md:col-span-1 justify-center">
                  <div className="w-px h-24 bg-white/10" />
                </div>

                <div className="md:col-span-8 space-y-3">
                  <div className="h-5 w-48 rounded bg-white/10" />
                  <div className="h-3 w-40 rounded bg-white/10" />
                  <div className="h-3 w-full rounded bg-white/10" />
                  <div className="h-3 w-4/5 rounded bg-white/10" />
                  <div className="flex flex-wrap gap-2 pt-2">
                    <div className="h-6 w-16 rounded-full bg-white/10" />
                    <div className="h-6 w-20 rounded-full bg-white/10" />
                    <div className="h-6 w-14 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return <p className="text-xs text-red-500 md:text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Error: {error}</p>;
  }
  
  return (
    <section id="experience" className="py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader index="03" label="Experience" title={<>Where I've<br />Worked</>}/>
        <div>
          {data?.map((exp: ExperienceType, i: number) => (
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
                    <SkillsBadge key={tag} tag={tag} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
