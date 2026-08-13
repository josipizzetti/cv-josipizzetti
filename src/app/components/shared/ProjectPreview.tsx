interface ProjectPreviewProps {
  type: "website";
  bg: string;
  url: string;
  thumb: string;
}

export function ProjectPreview({ type, bg, url, thumb }: ProjectPreviewProps) {

  return (
    <div className="w-full aspect-video overflow-hidden relative rounded-sm" style={{ background: bg }}>
      {type === "website" && (
        <div className="w-full h-full p-4 flex flex-col justify-between" style={{ background: bg }}>
          <div className="flex flex-col gap-3 flex-1 min-h-0">
            <div className="h-9 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm flex items-center px-3 text-[11px] text-white/60 tracking-[0.18em] uppercase">
              {url ? url.replace(/^https?:\/\//, "") : "preview.site"}
            </div>
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-inner">
              {thumb ? (
                <div className="flex-1 h-full">
                  <img
                    src={thumb}
                    alt={url ? `${url} thumbnail` : "Website thumbnail"}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-full bg-[#0b1220] flex items-center justify-center text-white/30 text-[12px] uppercase tracking-[0.15em]">
                  Website preview
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] uppercase text-white/40 tracking-[0.3em]">
            <span>Desktop</span>
            <span>Responsive</span>
          </div>
        </div>
      )}
    </div>
  );
}