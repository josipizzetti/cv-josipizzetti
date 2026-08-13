import { PROJECTS, ProjectType } from '@/app/constants/projects';
import { ProjectPreview } from '../shared/ProjectPreview';
import { ExternalLink } from 'lucide-react';
import { SkillsBadge } from '../shared/SkillsBadge';
import SectionHeader from '../shared/SectionHeader';
import { useData } from '@/app/hooks/useData';

export const Projects = () => {
  const { data, loading, error } = useData('projects');

  if (loading && !data) {
    return (
      <section id="projects" className="py-28 border-t border-white/10 bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <SectionHeader index="05" label="Projects" title={<>Selected<br />Work</>} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="group flex flex-col border border-white/10 hover:border-[#D4D4D4]/60 transition-all duration-300"
              >
                {/* Preview */}
                <div className="overflow-hidden flex-shrink-0">
                  <div className="h-48 w-full bg-white/10 animate-pulse" />
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6 bg-[#0f0f0f]">
                  <div className="h-5 w-48 rounded bg-white/10 mb-2 animate-pulse" />
                  <div className="h-3 w-40 rounded bg-white/10 mb-4 animate-pulse" />
                  <div className="h-3 w-full rounded bg-white/10 mb-2 animate-pulse" />
                  <div className="h-3 w-4/5 rounded bg-white/10 animate-pulse" />
                  <div className="flex flex-wrap gap-2 pt-2">
                    <div className="h-6 w-16 rounded-full bg-white/10 animate-pulse" />
                    <div className="h-6 w-20 rounded-full bg-white/10 animate-pulse" />
                    <div className="h-6 w-14 rounded-full bg-white/10 animate-pulse" />
                  </div>
                  <div className="h-4 w-24 rounded bg-white/10 mt-4 animate-pulse" />
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
    <section id="projects" className="py-28 border-t border-white/10 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <SectionHeader index="05" label="Projects" title={<>Selected<br />Work</>} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {data?.map((project: ProjectType, i: number) => (
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

                    <SkillsBadge key={tag} tag={tag} className="text-[9px] px-2 py-0.5 bg-white/5 text-white/35" />
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
  );
};
