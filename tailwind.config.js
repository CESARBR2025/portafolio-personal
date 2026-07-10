/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0F1C",
        foreground: "#e2e8f0",
        primary: {
          DEFAULT: "#6366f1",
          hover: "#818cf8",
        },
        surface: {
          DEFAULT: "rgba(17, 24, 39, 0.6)",
          solid: "#111827",
        },
        border: "rgba(255, 255, 255, 0.05)",
        muted: "#94a3b8",
        "text-dim": "#64748b",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        marquee: "marquee 35s linear infinite",
        blob: "blob 8s ease-in-out infinite",
        "float-1": "float 3s ease-in-out infinite",
        "float-2": "float 4s ease-in-out infinite 0.5s",
        "float-3": "float 3.5s ease-in-out infinite 1s",
      },
      keyframes: {
        blink: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(20px, -30px) scale(1.05)" },
          "50%": { transform: "translate(-20px, 20px) scale(0.95)" },
          "75%": { transform: "translate(-15px, -15px) scale(1.02)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
