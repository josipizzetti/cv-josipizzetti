import React from 'react';

type SectionHeaderProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  className?: string;
};

export default function SectionHeader({
  index,
  label,
  title,
  className = 'md:col-span-4',
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <p
        className="text-xs tracking-[0.3em] text-[#D4D4D4] uppercase mb-5"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {index} — {label}
      </p>
      <h2
        className="text-5xl md:text-6xl font-bold uppercase text-[#fffeff] "
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {title}
      </h2>
    </div>
  );
}