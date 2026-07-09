type SkillsBadgeProps = {
    tag: string;
    className?: string;
};

export const SkillsBadge = ({ tag, className }: SkillsBadgeProps) => {
    const defaultClassName = `text-[10px] px-2 py-1 border border-white/12 text-white/35`;

    return (
        <span
            className={className || defaultClassName}
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
            {tag}
        </span>
    );
};
