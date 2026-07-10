"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="proyectos" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Proyectos"
          subtitle="Una selección de proyectos interesantes en los que he trabajado."
        />

        {featured && (
          <div className="mb-8">
            <div className="text-xs text-muted uppercase tracking-wider mb-3">
              Proyecto Destacado
            </div>
            <ProjectCard project={featured} />
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted text-lg mb-6">¿Qué sigue?</p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-lg transition-colors"
          >
            Trabajemos juntos
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
