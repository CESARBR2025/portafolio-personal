import { getIcon } from "@/lib/icons";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`card overflow-hidden group ${project.featured ? "md:col-span-2 md:flex md:flex-row" : ""}`}>
      <div className={`relative overflow-hidden bg-surface-hover ${project.featured ? "md:w-1/2" : "h-48"}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-primary font-mono text-sm mb-2">
                [ {project.title} ]
              </div>
              <div className="flex gap-2 justify-center scale-75 opacity-50">
                {project.tech.slice(0, 4).map((tech) => {
                  const Icon = getIcon(tech);
                  return <Icon key={tech} size={28} className="grayscale" />;
                })}
              </div>
            </div>
          </div>
        </div>
        {project.status && (
          <span className="absolute top-3 right-3 bg-primary/20 text-primary border border-primary/30 text-xs px-2.5 py-1 rounded-full font-medium backdrop-blur-sm">
            {project.status}
          </span>
        )}
      </div>

      <div className={`p-5 ${project.featured ? "md:w-1/2" : ""}`}>
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => {
            const IconComponent = getIcon(tech);
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface text-xs font-medium"
              >
                <IconComponent size={12} />
                {tech === "csharp" ? "C#" : tech === "nextjs" ? "Next.js" : tech === "nestjs" ? "NestJS" : tech.charAt(0).toUpperCase() + tech.slice(1)}
              </span>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1.5"
            >
              <span className="text-xs">→</span> {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
