"use client";

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 p-3 rounded-full border backdrop-blur-md bg-[#111827]/80 border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all duration-300 z-40"
      aria-label="Volver arriba"
    >
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
