"use client";

import { useState, useEffect } from "react";
import { siteConfig, navLinks } from "@/lib/data";
import { useLocale } from "@/components/LocaleProvider";
import { translations, type Locale } from "@/lib/i18n";

const otherLocale: Record<string, Locale> = { es: "en", en: "es" };

export default function Nav() {
  const locale = useLocale();
  const t = translations[locale];
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections = navLinks.map((l) => l.href);
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setCvOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
      <nav className="backdrop-blur-xl border rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.15)] px-5 md:px-6 py-3 flex justify-between items-center bg-[#111827]/90 border-white/5">
        
        <button
          onClick={() => scrollTo("home")}
          className="font-bold text-lg md:text-xl tracking-tight pl-2 text-white shrink-0"
        >
          {siteConfig.firstName}
          <span className="text-indigo-500">.</span>
        </button>

        <div className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 px-3 py-1.5 rounded-full ${
                activeSection === link.href
                  ? "text-indigo-500"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t.nav[link.href]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 md:gap-2 border-l border-slate-700/30 pl-4 md:pl-6">

          {/* Language toggle */}
          <a
            href={`/${otherLocale[locale]}`}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider bg-white/5 text-slate-300 hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors border border-white/10"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
            {otherLocale[locale] === "en" ? "EN" : "ES"}
          </a>

          <div className="relative">
            <button
              onClick={() => setCvOpen(!cvOpen)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider bg-white text-slate-900 hover:bg-indigo-50 transition-colors"
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              {t.nav.cv}
            </button>
            {cvOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 py-2 rounded-xl backdrop-blur-xl border shadow-2xl bg-[#111827]/95 border-white/10">
                <a href="/api/cv?lang=es" target="_blank" rel="noopener"
                   className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                  Español (CV)
                </a>
                <a href="/api/cv?lang=en" target="_blank" rel="noopener"
                   className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                  English (Resume)
                </a>
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label={t.nav.menu}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full mt-4 p-4 rounded-2xl backdrop-blur-xl border shadow-2xl bg-[#111827]/95 border-white/10">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-left text-sm font-bold uppercase tracking-wider px-4 py-3 rounded-xl transition-colors ${
                  activeSection === link.href
                    ? "text-indigo-500 bg-indigo-500/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {t.nav[link.href]}
              </button>
            ))}
            <hr className="border-white/5 my-2" />
            <a href={`/${otherLocale[locale]}`}
               className="text-sm font-bold uppercase tracking-wider px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 flex items-center gap-2">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
              {otherLocale[locale] === "en" ? "English" : "Español"}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
