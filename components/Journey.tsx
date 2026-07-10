import Image from "next/image";
import { getIcon } from "@/lib/icons";
import { timelineData, type TimelineEntry } from "@/lib/data";

const flagMap: Record<string, string> = {
  mx: "https://flagcdn.com/w20/mx.png",
  pe: "https://flagcdn.com/w20/pe.png",
  ar: "https://flagcdn.com/w20/ar.png",
  no: "https://flagcdn.com/w20/no.png",
};

const typeConfig: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  "Trabajo Remoto":    { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  "Trabajo":           { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  "Trabajo Freelance": { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  "Trabajo Voluntariado":{ bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  "Voluntariado":      { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  "Voluntariado Universitario":{ bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
  "Educación":         { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", icon: "M12 14l9-5-9-5-9 5 9 5z" },
  "Competición":       { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  "Certificación":     { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
};

export default function Journey() {
  return (
    <section id="education" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Trayectoria<span className="text-indigo-500">.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-16 max-w-2xl">
          Mi camino profesional, logros académicos y experiencia colaborativa.
        </p>

        <div className="max-w-5xl mx-auto md:mx-0">
          <div className="relative border-l-2 ml-4 md:ml-6 space-y-16 md:space-y-20 border-indigo-500/30">
            {timelineData.map((item, index) => (
              <TimelineItemComponent key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItemComponent({ item }: { item: TimelineEntry }) {
  const cfg = typeConfig[item.type] || typeConfig["Trabajo"];

  return (
    <div className="reveal animate-fade-in-up">
      <div className="relative pl-8 md:pl-16 group">
        <div className={`absolute -left-[21px] md:-left-[25px] top-0 h-10 w-10 md:h-12 md:w-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-[#0A0F1C] border-indigo-500 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(99,102,241,0.6)]`}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="md:w-[18px] md:h-[18px]">
            <path d={cfg.icon} />
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start lg:items-center w-full">
          <div className="flex-1 w-full p-5 md:p-7 rounded-2xl border backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 bg-[#111827]/60 border-white/5 hover:border-indigo-500/30 hover:bg-[#111827]/90 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
                {item.type}
              </span>
              <span className="text-xs text-slate-500 font-medium">{item.year}</span>
              {item.flags?.map((f) => (
                <Image key={f} src={flagMap[f]} alt={f} width={20} height={15} className="h-4 w-auto rounded-sm" unoptimized />
              ))}
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
            <p className="text-sm text-slate-400 mb-3">{item.subtitle}</p>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tech.map((t) => {
                const Icon = getIcon(t);
                return (
                  <span key={t} className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border bg-white/5 text-slate-300 border-white/10">
                    <Icon size={12} className="opacity-70" />
                    {t === "csharp" ? "C#" : t === "nextjs" ? "Next.js" : t === "nestjs" ? "NestJS" : t.charAt(0).toUpperCase() + t.slice(1)}
                  </span>
                );
              })}
            </div>
          </div>

          {item.image && (
            <div className="relative inline-block p-2 md:p-2.5 pb-8 md:pb-10 bg-white rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.25)] transform md:rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 z-10 max-w-[240px] lg:max-w-[280px] shrink-0">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/60 backdrop-blur-md shadow-sm -rotate-2 border border-black/5 z-20" />
              <div className="relative overflow-hidden">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <span className="text-slate-400 text-xs font-medium">Foto</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
