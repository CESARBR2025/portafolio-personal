"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

const ROLES = [
  "Desarrollador Fullstack.",
  "Ingeniero en Sistemas.",
  "Solucionador de Problemas.",
];

export default function Hero() {
  const [showBoot, setShowBoot] = useState(true);
  const [bootPercent, setBootPercent] = useState(0);
  const [typeText, setTypeText] = useState("");
  const wordIndexRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    if (showBoot) {
      const interval = setInterval(() => {
        setBootPercent((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setShowBoot(false), 300);
            return 100;
          }
          return prev + Math.floor(Math.random() * 12) + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [showBoot]);

  useEffect(() => {
    if (showBoot) return;

    let timeout: NodeJS.Timeout;
    const tick = () => {
      const word = ROLES[wordIndexRef.current];
      const del = deletingRef.current;

      if (!del && typeText.length === word.length) {
        timeout = setTimeout(() => {
          deletingRef.current = true;
          tick();
        }, 2000);
        return;
      }

      if (del && typeText.length === 0) {
        deletingRef.current = false;
        wordIndexRef.current = (wordIndexRef.current + 1) % ROLES.length;
        timeout = setTimeout(tick, 70);
        return;
      }

      timeout = setTimeout(() => {
        setTypeText(del ? word.slice(0, typeText.length - 1) : word.slice(0, typeText.length + 1));
      }, del ? 40 : 70);
    };

    timeout = setTimeout(tick, 70);
    return () => clearTimeout(timeout);
  }, [typeText, showBoot]);

  if (showBoot) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#0A0F1C] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative z-10 text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
            {siteConfig.alias}
            <span className="animate-blink text-indigo-500">_</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
            <span>Initializing system...</span>
            <span className="tabular-nums">{Math.min(bootPercent, 100)}%</span>
          </div>
          <div className="w-56 h-1 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-200"
              style={{ width: `${Math.min(bootPercent, 100)}%` }}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="pt-28 md:pt-36 pb-20 px-4 max-w-6xl mx-auto min-h-[100dvh] flex flex-col justify-center relative">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-8">
        
        <div className="max-w-2xl flex-1 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-2 text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300">
            Hola, soy {siteConfig.firstName}
          </h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-indigo-400 mb-6 min-h-[50px] md:min-h-[60px]">
            <span>Soy </span>
            <span className="text-indigo-500">{typeText}</span>
            <span className="inline-block w-[3px] h-[30px] md:h-[45px] bg-indigo-500 ml-1 animate-blink align-text-bottom shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
          </h2>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full border text-sm font-medium border-indigo-500/30 bg-indigo-500/10 text-indigo-200">
              {siteConfig.stats[0].value} {siteConfig.stats[0].label}
            </span>
            <span className="px-4 py-1.5 rounded-full border text-sm font-medium border-white/10 bg-white/5 text-slate-400">
              Disponible para proyectos
            </span>
          </div>

          <p className="text-base md:text-lg leading-relaxed mb-10 text-slate-400 max-w-xl">
            {siteConfig.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded-md font-bold uppercase text-[13px] tracking-wide bg-indigo-500 text-white hover:bg-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Ponerse en contacto
            </button>
            <a
              href="/pdf/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-md font-bold uppercase text-[13px] tracking-wide border border-white/20 text-white hover:bg-white/5 hover:border-indigo-400 hover:-translate-y-1 transition-all duration-300"
            >
              Descargar CV
            </a>
          </div>
        </div>

        <div className="relative w-64 h-64 md:w-[360px] md:h-[360px] shrink-0 animate-fade-in-up animation-delay-200">
          <div className="relative w-full h-full rounded-full p-2 bg-indigo-500/10 shadow-[0_0_50px_rgba(99,102,241,0.2)]">
            <div className="w-full h-full rounded-full border-[6px] border-[#0A0F1C] overflow-hidden relative">
              <Image
                src={siteConfig.avatar}
                alt={siteConfig.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 360px"
              />
            </div>
          </div>

          <div className="absolute -top-6 -right-6 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-float-1">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-indigo-400">
              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>

          <div className="absolute -top-4 -left-6 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-float-2 overflow-hidden">
            <span className="text-lg md:text-2xl">🇲🇽</span>
          </div>

          <div className="absolute -bottom-4 -left-4 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-float-2" style={{ animationDelay: '0.5s' }}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-purple-400">
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>

          <div className="absolute top-1/2 -right-8 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-float-3">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-emerald-400">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full border text-xs font-medium backdrop-blur-md bg-[#111827]/80 border-indigo-500/30 text-indigo-300 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block mr-1.5 animate-pulse" />
            Disponible para contratación
          </div>
        </div>
      </div>
    </section>
  );
}
