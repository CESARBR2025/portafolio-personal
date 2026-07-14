"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import { IconImage } from "@/lib/icons";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Otros Proyectos Interesantes<span className="text-indigo-500">.</span>
        </h2>

        <div className="space-y-24 mt-16">
          {featured.map((project, idx) => (
            <div key={project.title} className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center group">
              <div className={`w-full lg:w-1/2 relative ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div style={{ perspective: "1200px" }}>
                  <div
                    className="rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(99,102,241,0.2)]"
                    style={{
                      transform: idx % 2 === 0
                        ? "rotateX(20deg) rotateY(-15deg) scale(0.9)"
                        : "rotateX(20deg) rotateY(15deg) scale(0.9)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="w-full h-8 flex items-center px-4 gap-2 border-b bg-[#1e293b]/90 border-white/10 absolute top-0 left-0 right-0 z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="w-full aspect-video relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`w-full lg:w-1/2 flex flex-col items-start text-left ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                {project.status && (
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border mb-4 bg-amber-500/10 text-amber-400 border-amber-500/20">
                    {project.status}
                  </span>
                )}
                <h3 className="text-3xl md:text-5xl font-extrabold mb-6 text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <div className="text-base md:text-lg leading-relaxed mb-8 text-slate-400 space-y-1">
                  {project.description.split('\n').map((line, i) => (
                    <p key={i}>{line || '\u00A0'}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((t) => (
                    <span key={t} className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-white/10 text-slate-200 border border-white/5">
                      <IconImage name={t} size={16} className="shrink-0" />
                      {t === "csharp" ? "C#" : t === "nextjs" ? "Next.js" : t === "nestjs" ? "NestJS" : t === "graphify" ? "Graphify" : t.charAt(0).toUpperCase() + t.slice(1)}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${
                        link.label.includes("Visitar") || link.label.includes("Web")
                          ? "bg-indigo-500 text-white hover:bg-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                          : "border border-white/20 text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label.includes("Código") ? (
                        <span className="flex items-center gap-2">
                          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
                          {link.label}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                          {link.label}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-24">
          {rest.map((project) => (
            <div key={project.title} className="backdrop-blur-sm border rounded-xl overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-2 bg-[#111827]/60 border-white/5 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
              <div className="w-full aspect-video relative overflow-hidden border-b border-white/5">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
                  <div className="text-center opacity-50 group-hover:opacity-70 transition-opacity">
                    <div className="text-indigo-400 font-mono text-xs mb-2">[{project.title}]</div>
                    <div className="flex gap-1.5 justify-center scale-75">
                      {project.tech.slice(0, 3).map((t) => (
                        <IconImage key={t} name={t} size={20} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 mix-blend-overlay bg-indigo-900/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex z-20">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 h-full flex flex-col items-center justify-center gap-2 backdrop-blur-sm bg-black/10 hover:bg-black/30 transition-colors text-white text-xs font-bold uppercase tracking-wider"
                    >
                      {link.label.includes("Repo") || link.label.includes("Código") ? (
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /></svg>
                      ) : (
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      )}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>

                {project.status && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border bg-amber-500/10 text-amber-400 border-amber-500/20 backdrop-blur-sm z-10">
                    {project.status}
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h4 className="text-lg font-bold mb-2 text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs leading-relaxed mb-4 flex-grow text-slate-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full whitespace-nowrap border bg-white/10 text-slate-200 border-white/10">
                      {t === "csharp" ? "C#" : t === "nextjs" ? "Next.js" : t === "nestjs" ? "NestJS" : t.charAt(0).toUpperCase() + t.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-slate-500 text-lg mb-6">¿Qué sigue?</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-indigo-400 hover:text-indigo-300 font-bold text-lg transition-colors"
          >
            Trabajemos juntos →
          </button>
        </div>
      </div>
    </section>
  );
}
