import Image from "next/image";
import { getIcon } from "@/lib/icons";
import type { TimelineItem as TimelineItemType } from "@/lib/data";

export default function TimelineItem({
  item,
  index,
}: {
  item: TimelineItemType;
  index: number;
}) {
  const flagMap: Record<string, string> = {
    mx: "https://flagcdn.com/w20/mx.png",
    pe: "https://flagcdn.com/w20/pe.png",
    ar: "https://flagcdn.com/w20/ar.png",
    no: "https://flagcdn.com/w20/no.png",
  };

  const typeColors: Record<string, string> = {
    "Trabajo Remoto": "border-blue-500 bg-blue-500/10 text-blue-400",
    "Trabajo Freelance": "border-emerald-500 bg-emerald-500/10 text-emerald-400",
    Educación: "border-purple-500 bg-purple-500/10 text-purple-400",
    Voluntariado: "border-amber-500 bg-amber-500/10 text-amber-400",
    Competición: "border-red-500 bg-red-500/10 text-red-400",
    Certificación: "border-cyan-500 bg-cyan-500/10 text-cyan-400",
  };

  const typeIcons: Record<string, string> = {
    "Trabajo Remoto": "\u{1F4BB}",
    "Trabajo Freelance": "\u{1F4B0}",
    Educación: "\u{1F393}",
    Voluntariado: "\u{2764}\u{FE0F}",
    Competición: "\u{1F3C6}",
    Certificación: "\u{1F3C5}",
  };

  const borderClass = typeColors[item.type] || "border-primary bg-primary-muted text-primary";

  return (
    <div
      className="relative pl-8 pb-12 last:pb-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`absolute left-0 top-1 w-3 h-3 rounded-full border-2 ${borderClass}`} />
      {index < 7 && (
        <div className="absolute left-[5px] top-4 bottom-0 w-[1px] bg-border" />
      )}

      <div className="card p-5">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${borderClass}`}>
            {typeIcons[item.type]} {item.type}
          </span>
          <span className="text-xs text-muted font-mono">{item.year}</span>
          {item.flags?.map((flag) => (
            <Image
              key={flag}
              src={flagMap[flag]}
              alt={flag}
              width={20}
              height={15}
              className="h-4 w-auto rounded-sm"
              unoptimized
            />
          ))}
        </div>

        <h3 className="font-semibold text-foreground text-lg mb-1">{item.title}</h3>
        <p className="text-sm text-muted mb-3">{item.subtitle}</p>
        <p className="text-sm text-foreground/80 mb-4 leading-relaxed">{item.description}</p>

        <div className="flex flex-wrap gap-2">
          {item.tech.map((tech) => {
            const Icon = getIcon(tech);
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface text-xs font-medium"
              >
                <Icon size={14} />
                {tech === "csharp" ? "C#" : tech === "nextjs" ? "Next.js" : tech === "nestjs" ? "NestJS" : tech.charAt(0).toUpperCase() + tech.slice(1)}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
