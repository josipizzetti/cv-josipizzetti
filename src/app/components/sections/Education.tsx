import React from 'react'
import { EDUCATION, EducationType } from '../../constants/education'
import SectionHeader from '../shared/SectionHeader'
import { useData } from '@/app/hooks/useData';

const Education: React.FC = () => {
  const { data, loading, error } = useData('education');

  if (loading) {
    return (
      <section id="education" className="py-28 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader index="06" label="Education" title={<>Academic<br />Background</>} className='mb-16' />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="border-l-2 border-[#D4D4D4] pl-8 py-2">
                <div className="h-3 w-28 rounded-md bg-white/10 animate-pulse mb-3" />
                <div className="h-6 w-56 rounded-md bg-white/10 animate-pulse mb-2" />
                <div className="h-3 w-40 rounded-md bg-white/10 animate-pulse mb-4" />
                <div className="h-4 w-full rounded-md bg-white/10 animate-pulse mb-2" />
                <div className="h-4 w-5/6 rounded-md bg-white/10 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return <p className="text-xs text-red-500 md:text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Error: {error}</p>;
  }
  return (
    <section id="education" className="py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
      <SectionHeader index="06" label="Education" title={<>Academic<br />Background</>} className='mb-16' />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data?.map((edu: EducationType, i: number) => (
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
  )
}

export default Education
