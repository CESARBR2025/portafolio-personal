"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-3">Contacto</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Trabajemos <span className="text-indigo-500">Juntos.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-16 max-w-xl">
          Actualmente estoy abierto a nuevas oportunidades de trabajo y proyectos freelance. Ya sea que tengas una pregunta o simplemente quieras saludar, haré todo lo posible para responderte pronto.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-start">
          <div>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${siteConfig.email}`}
                 className="w-full p-5 rounded-xl border backdrop-blur-sm transition-all hover:-translate-y-1 bg-[#111827] border-white/10 hover:border-indigo-500/50 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-indigo-400">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white">Contáctame</div>
                  <div className="text-xs text-slate-400">{siteConfig.email}</div>
                </div>
              </a>

              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                 className="w-full p-5 rounded-xl border backdrop-blur-sm transition-all hover:-translate-y-1 bg-[#111827] border-white/10 hover:border-white/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white">Ver Código</div>
                  <div className="text-xs text-slate-400">GitHub</div>
                </div>
              </a>

              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                 className="w-full p-5 rounded-xl border backdrop-blur-sm transition-all hover:-translate-y-1 bg-[#0077b5]/5 border-[#0077b5]/20 hover:bg-[#0077b5]/10 hover:border-[#0077b5]/50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/20 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-[#0077b5]">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white">Conectar</div>
                  <div className="text-xs text-slate-400">LinkedIn</div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-2 mt-6 text-sm text-slate-500 px-1">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              {siteConfig.location} — {siteConfig.remoteLabel}
            </div>
          </div>

          <div className="backdrop-blur-xl border rounded-2xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-indigo-500/10 bg-[#0B1120]/80 border-white/10">
            <div className="w-full h-14 flex items-center px-6 gap-2.5 border-b bg-white/5 border-white/5">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 text-sm font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Let&apos;s Talk
              </div>
            </div>

            <div className="p-6 md:p-8">
              {status === "idle" && (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text" required placeholder="Ej. César Bárcenas"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl outline-none bg-slate-900/50 border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500 transition-all"
                    />
                    <input
                      type="email" required placeholder="email@ejemplo.com"
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl outline-none bg-slate-900/50 border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500 transition-all"
                    />
                  </div>
                  <textarea
                    required rows={4} placeholder="Cuéntame sobre tu proyecto, ideas o pregunta..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl outline-none bg-slate-900/50 border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500 resize-none transition-all"
                  />
                  <button type="submit"
                    className="group relative overflow-hidden w-full px-6 py-3.5 rounded-xl font-bold text-sm bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all flex items-center justify-center gap-2">
                    <span>Enviar Mensaje</span>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                         className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </button>
                </form>
              )}

              {status === "sending" && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"
                       className="text-indigo-400 animate-bounce mb-4">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  <p className="text-slate-400 font-medium">Enviando...</p>
                </div>
              )}

              {status === "sent" && (
                <div className="space-y-5 min-h-[300px] flex flex-col justify-end pb-4">
                  <div className="max-w-[85%] self-end rounded-2xl rounded-tr-sm p-5 shadow-lg animate-fade-in-up bg-indigo-600 text-white">
                    <p className="text-sm leading-relaxed">{form.message || "Hola, me gustaría conectar contigo."}</p>
                  </div>
                  <div className="max-w-[85%] self-start rounded-2xl rounded-tl-sm p-4 shadow-sm animate-fade-in-up animation-delay-400 bg-[#1E293B] text-slate-300 border border-white/5 flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shrink-0 text-white text-xs font-bold">
                      {siteConfig.firstName.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white mb-1">{siteConfig.name}</div>
                      <p className="text-xs text-slate-400 leading-relaxed">Gracias por contactarme. Te responderé pronto.</p>
                      <span className="text-[10px] text-slate-600 mt-2 block">Auto</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
