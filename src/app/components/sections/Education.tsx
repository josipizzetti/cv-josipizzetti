import React from 'react'
import { EDUCATION } from '../../constants/education'
import SectionHeader from '../shared/SectionHeader'

const Education: React.FC = () => {
  return (
    <section id="education" className="py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
      <SectionHeader index="06" label="Education" title={<>Academic<br />Background</>} className='mb-16' />
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
  )
}

export default Education
