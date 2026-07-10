"use client";

import { useState, useEffect } from "react";
import Typewriter from "@/components/ui/Typewriter";
import { siteConfig, roles } from "@/lib/data";

export default function Hero() {
  const [showBoot, setShowBoot] = useState(true);
  const [bootPercent, setBootPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBootPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowBoot(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 3;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  if (showBoot) {
    return (
      <section id="inicio" className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center animate-fade-in">
          <div className="terminal-text text-xl md:text-2xl mb-6">
            {siteConfig.name}
            <span className="animate-blink">_</span>
          </div>
          <div className="terminal-text text-sm md:text-base mb-4">
            Initializing system...
          </div>
          <div className="w-48 md:w-64 h-1 bg-surface rounded-full overflow-hidden mx-auto">
            <div
              className="h-full bg-primary rounded-full transition-all duration-200 ease-out animate-terminal-loading"
              style={{ width: `${Math.min(bootPercent, 100)}%` }}
            />
          </div>
          <div className="terminal-text text-xs mt-2 tabular-nums">{Math.min(bootPercent, 100)}%</div>
        </div>
      </section>
    );
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
              Hola, soy<br />
              <span className="text-foreground">{siteConfig.fullName.split(" ")[0]}</span>
              <span className="terminal-text">.</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted mb-6 h-10">
              <Typewriter words={roles} className="font-semibold text-foreground" />
            </h2>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="text-xs sm:text-sm bg-primary-muted text-primary border border-primary/20 px-3 py-1.5 rounded-full">
                {siteConfig.yearsExperience} años de experiencia
              </span>
              <span className="text-xs sm:text-sm bg-surface text-muted border border-border px-3 py-1.5 rounded-full">
                {siteConfig.status}
              </span>
              <span className="text-xs sm:text-sm bg-surface text-muted border border-border px-3 py-1.5 rounded-full">
                {siteConfig.workingGlobally}
              </span>
            </div>

            <p className="text-muted text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-primary text-black font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-all animate-pulse-glow text-sm"
              >
                Ponerse en contacto
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/pdf/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-full hover:bg-surface transition-all text-sm"
              >
                Descargar CV
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-primary/30 p-1.5">
                <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary/40 font-mono">
                      {siteConfig.name.slice(0, 2)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-xs border-border">
                <span className="text-primary text-xs mr-1.5">●</span>
                {siteConfig.available ? "Disponible para contratación" : "No disponible"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
