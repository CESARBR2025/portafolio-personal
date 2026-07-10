"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import TechMarquee from "@/components/ui/TechMarquee";
import { techCategories, siteConfig } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function About() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="sobre-mi" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading title="Sobre Mí" />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-up">
            <p className="text-muted leading-relaxed text-base sm:text-lg">
              Soy {siteConfig.fullName.split(" ")[0]}, {siteConfig.tagline.toLowerCase()} con experiencia en desarrollo web fullstack. 
              Me especializo en transformar ideas complejas en experiencias digitales intuitivas, rápidas y escalables.
            </p>
            <p className="text-muted leading-relaxed text-base sm:text-lg mt-4">
              Mi enfoque técnico se complementa con un profundo interés en el diseño UI/UX, asegurando 
              que cada aplicación no solo tenga un código impecable, sino que se sienta increíble al usarla.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <div className="card p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-1">{siteConfig.yearsExperience}</div>
                  <div className="text-xs text-muted uppercase tracking-wider">Años de exp.</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-xs text-muted uppercase tracking-wider">Proyectos</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-1">8+</div>
                  <div className="text-xs text-muted uppercase tracking-wider">Tecnologías</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-xs text-muted uppercase tracking-wider">Disponible</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-6 animate-fade-in-up">
          <span className="terminal-text">$ </span>
          Mi Arsenal Tecnológico
        </h3>

        <div className={activeCategory ? "mb-8" : ""}>
          <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-up">
            <button
              onClick={() => setActiveCategory(null)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                !activeCategory
                  ? "bg-primary-muted text-primary border-primary/30"
                  : "border-border text-muted hover:text-foreground hover:border-foreground/20"
              }`}
            >
              Todos
            </button>
            {techCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                  activeCategory === cat.title
                    ? "bg-primary-muted text-primary border-primary/30"
                    : "border-border text-muted hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {cat.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {(activeCategory ? techCategories.filter((c) => c.title === activeCategory) : techCategories).map(
            (category) => (
              <div key={category.title} className="mb-8 animate-fade-in-up">
                <h4 className="text-sm text-muted uppercase tracking-wider mb-4">
                  {category.title}
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3">
                  {category.items.map((tech) => {
                    const Icon = getIcon(tech);
                    return (
                      <div
                        key={tech}
                        className="flex flex-col items-center gap-1.5 p-3 rounded-lg card hover:scale-105 transition-transform"
                      >
                        <Icon size={28} className="grayscale hover:grayscale-0 transition-all" />
                        <span className="text-[10px] text-muted text-center leading-tight">
                          {tech === "csharp" ? "C#" : tech === "nextjs" ? "Next.js" : tech === "nestjs" ? "NestJS" : tech === "nodejs" ? "Node.js" : tech === "dotnet" ? ".NET" : tech.charAt(0).toUpperCase() + tech.slice(1)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          )}
        </div>

        <TechMarquee />
      </div>
    </section>
  );
}
