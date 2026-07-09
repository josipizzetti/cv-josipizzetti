interface ProjectPreviewProps {
  type: "website";
  bg: string;
  url: string;
  thumb: string;
}

export function ProjectPreview({ type, bg, url, thumb }: ProjectPreviewProps) {
  const accent = bg === "#f3ec86" ? "#000000" : "#f3ec86";

  return (
    <div className="w-full aspect-video overflow-hidden relative rounded-sm" style={{ background: bg }}>
      {type === "website" && (
        <div className="w-full h-full p-4 flex flex-col justify-between" style={{ background: bg }}>
          <div className="flex flex-col gap-3">
            <div className="h-9 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm flex items-center px-3 text-[11px] text-white/60 tracking-[0.18em] uppercase">
              {url ? url.replace(/^https?:\/\//, "") : "preview.site"}
            </div>
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-inner">
              {thumb ? (
                <img
                  src={thumb}
                  alt={url ? `${url} thumbnail` : "Website thumbnail"}
                  className="w-full h-32 object-cover"
                />
              ) : (
                <div className="h-32 bg-[#0b1220] flex items-center justify-center text-white/30 text-[12px] uppercase tracking-[0.15em]">
                  Website preview
                </div>
              )}
              <div className="p-4 space-y-3">
                <div className="h-3 rounded-full bg-white/10" />
                <div className="h-3 rounded-full bg-white/10 w-5/6" />
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div className="h-3 rounded-full bg-white/10" />
                  <div className="h-3 rounded-full bg-white/10" />
                  <div className="h-3 rounded-full bg-white/10" />
                </div>
                <div className="h-24 rounded-xl bg-white/5" />
              </div>
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