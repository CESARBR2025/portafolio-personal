import { siteConfig, techCategories } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function About() {
  const allIcons = [
    "javascript", "typescript", "python", "java", "csharp", "sql", "php",
    "react", "nextjs", "html5", "css3", "tailwind", "sass", "angular",
    "nodejs", "nestjs", "django", "dotnet", "postgresql", "mongodb", "graphql", "supabase",
    "git", "docker", "npm", "postman", "linux", "aws", "firebase",
    "figma", "latex", "markdown", "vscode", "notion",
  ];

  const duplicated = [...allIcons, ...allIcons, ...allIcons];

  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
          Sobre Mí<span className="text-indigo-500">.</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-3">
            <p className="text-base md:text-lg leading-relaxed text-slate-400 mb-4">
              Soy {siteConfig.firstName}, {siteConfig.title.toLowerCase()}. Me especializo en transformar ideas complejas en experiencias digitales intuitivas, rápidas y escalables.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-400">
              Mi enfoque técnico se complementa con un profundo interés en el diseño UI/UX, asegurando que cada aplicación no solo tenga un código impecable, sino que se sienta increíble al usarla.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-3 gap-4">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] md:text-[11px] uppercase tracking-widest text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-8">
          Mi Arsenal Tecnológico
        </h3>

        {techCategories.map((cat) => (
          <div key={cat.title} className="mb-6">
            <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-bold">
              {cat.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((tech) => {
                const Icon = getIcon(tech.icon);
                return (
                  <span
                    key={tech.icon}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md font-medium text-xs border transition-all duration-300 group hover:-translate-y-1 bg-white/5 text-slate-300 border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/20 hover:text-white hover:shadow-[0_5px_15px_rgba(99,102,241,0.2)]"
                  >
                    <Icon size={14} className="opacity-80 group-hover:opacity-100 transition-all" />
                    {tech.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}

        <div className="relative overflow-hidden py-8 mt-8 select-none">
          <div className="flex gap-10 animate-marquee" style={{ width: "max-content" }}>
            {duplicated.map((icon, i) => {
              const Icon = getIcon(icon);
              return (
                <div key={`${icon}-${i}`} className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  <Icon size={52} className="md:!w-20 md:!h-20 opacity-30 hover:opacity-100 transition-all hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]" />
                </div>
              );
            })}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0F1C] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#0A0F1C] pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
