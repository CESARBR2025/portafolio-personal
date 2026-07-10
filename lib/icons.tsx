import React from "react";

type IconProps = { className?: string; size?: number };

const iconMap: Record<string, React.FC<IconProps>> = {
  javascript: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#F7DF1E" rx="24" />
      <path d="M67 214 48 191l20-12 9 16c7 12 13 16 24 16s20-8 20-30V88h28v94c0 35-21 48-47 48-26 0-35-12-35-16zm90-1 19-11c5 8 12 15 24 15s19-7 19-17c0-9-7-15-20-22l-7-3c-20-9-33-19-33-42 0-21 16-37 41-37 18 0 31 6 40 22l-22 14c-5-9-10-12-18-12s-13 5-13 12c0 8 5 11 17 17l7 3c23 10 37 20 37 44 0 26-20 40-46 40-26 0-43-12-51-28z" fill="#000" />
    </svg>
  ),
  typescript: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#3178C6" rx="24" />
      <path d="M145 215v-24h-20v74h-18v-74h-20v-24h58v48zm80-11v22c-16 6-33 9-41 9-13 0-22-4-28-10s-9-16-9-28c0-14 5-26 13-34s19-13 33-15v-18c0-6-1-10-4-13s-7-5-13-5c-10 0-18 4-26 13l-14-14c11-11 26-17 41-17 13 0 23 4 29 9 9 8 14 19 14 35v47c5-1 10-2 15-3zm-41-56v14c-10 1-16 5-19 9s-4 10-4 17c0 7 2 12 4 15 3 4 8 5 15 5 6 0 14-2 24-6v-54H184z" fill="#fff" />
    </svg>
  ),
  python: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <defs>
        <radialGradient id="pyA" cx="0%" cy="0%"><stop offset="0%" stopColor="#387EB8"/><stop offset="100%" stopColor="#366994"/></radialGradient>
        <radialGradient id="pyB" cx="0%" cy="0%"><stop offset="0%" stopColor="#FFE052"/><stop offset="100%" stopColor="#FFC331"/></radialGradient>
      </defs>
      <path d="M127 0C64 0 64 11 64 27v36h65v10H45C18 73 0 60 0 97c0 0-3 37 25 57 20 15 38 11 38 11h23v-25s-1-28 25-28h43s32-5 32-33V39s5-29-27-35C146 1 141 0 127 0zM91 21c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7z" fill="url(#pyA)"/>
      <path d="M129 256c63 0 63-11 63-27v-37h-65v-10h75c27 0 40-27 40-59 0 0 3-37-25-57-20-15-38-11-38-11h-23v25s1 28-25 28h-43s-32 5-32 33v40s-5 29 27 35c10 3 15 4 28 4zm38-149c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7z" fill="url(#pyB)"/>
    </svg>
  ),
  java: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <path d="M85 194c18 5 48 2 70-7 0 0 7 12 0 26-13 21-78 28-115 0-7-5-6-11 0-14 3-2 10-4 14-5 9-2 20-2 31 0z" fill="#ED8B00"/>
      <path d="M90 177c20 11 50 9 67-2 3-2 5 0 2 3-7 12-25 20-43 21h-2c-14 0-26-6-29-9-2-2 0-6 5-13z" fill="#ED8B00"/>
      <path d="M134 1c8 0 16 8 16 17s-8 16-16 16-16-7-16-16 7-17 16-17z" fill="#ED8B00"/>
      <path d="M47 102s2-27 23-41c17-12 36-13 44-17 6-3 12-21 6-30 16 11 18 27 10 39-6 9-15 16-30 22-9 4-10 7-10 12-1 12-12 9-18 9-13 0-25 6-25 6z" fill="#ED8B00"/>
      <path d="M82 163s26-22 55-18c0 0-18-5-36-7l-7-1c-8-2-11-7-12-9-2-5 1-11 6-13 0 0-11 3-18 10-8 8-8 17 12 38z" fill="#5382A1"/>
      <path d="M90 186s12-5 8-18c0 0 2 14-4 18l-4 0zm49-59s1-19-14-31c12 2 22 6 22 17l-1 3-7 11zm-30 26c6-4 10-6 9-25-1-14-2-21 18-31 14-6 24-11 24-29 0-12-4-20-11-25-14 16-19 21-26 43-8 22-16 18-14 67z" fill="#5382A1"/>
    </svg>
  ),
  csharp: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#68217A" rx="24"/>
      <path d="M190 70c-9-6-18-10-29-12-11-2-24-2-36 2-11 4-23 10-32 20-10 10-16 21-21 34-3 11-5 23-5 36s2 25 5 36c5 13 11 24 21 34 9 10 21 16 32 20 12 4 25 4 36 2 11-2 20-6 29-12l-15-28c-8 5-17 7-27 6-10-1-20-6-27-14-7-8-11-18-14-28-2-10-4-21-4-32s2-22 4-32c3-10 7-20 14-28 7-8 17-13 28-14 9-1 18 1 26 6l15-28z" fill="#fff"/>
      <path d="M115 112h55v24h-55zm0-44h90v24h-90zm0 88h90v24h-90z" fill="#fff"/>
    </svg>
  ),
  sql: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#336791" rx="24" />
      <path d="M192 153c0 28-28 50-64 50s-64-22-64-50v-50c0 28 28 50 64 50s64-22 64-50v50zm0-76c0 28-28 50-64 50S64 105 64 77s28-50 64-50 64 22 64 50z" fill="#fff" opacity="0.8"/>
      <path d="M81 77c0 22 21 41 47 41s47-19 47-41-21-41-47-41-47 19-47 41z" fill="#fff"/>
    </svg>
  ),
  php: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#777BB4" rx="24"/>
      <path d="M49 148h18l3-14h18l-3 14h18l7-34h-18l-3 14H71l3-14H56l-7 34zm80 0h32c12 0 18-5 20-13l3-14c3-12-5-21-19-21h-18l-7 34h18l3-14h14l-2 10c-1 4-4 5-9 5h-19l-5 14h19zm72-28 2-12c1-5 4-8 9-8h20c5 0 8 4 7 9l-2 11c-1 5-5 8-10 8h-20c-4 0-7-3-6-8z" fill="#fff"/>
    </svg>
  ),
  go: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#00ADD8" rx="24"/>
      <path d="M77 67c4 1 7 3 7 8v3c0 16-13 28-25 25l-4 1c-7 0-12-4-15-9-2-4-3-10 3-14 6-4 11-9 11-15 0-3-2-5-6-5-7 0-13 6-20 10l-10-8c7-6 15-12 26-12 5 0 9 1 12 4 3 2 5 5 5 9 0 23-18 17-11 28 3 5 9 6 13 2 3-3 3-7 3-12v-1c-6-4-5-10 3-12l8-2v2zm39 1c25 0 30 17 28 29H97c0 8 6 11 14 11h32c0 10-4 24-24 24-20 0-32-14-30-32 2-19 16-32 30-32h-3zm60-2v61h16v-29c0-6 6-11 14-11s10 5 10 11v29h16v-31c0-18-11-31-28-31l-12 1h-16zm-97 14h-2c-6 0-10 4-11 11h24c0-7-4-11-12-11h1zm61 1v1z" fill="#fff"/>
    </svg>
  ),
  react: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <path d="M128 153c-13 0-24-11-24-25s11-25 24-25 24 11 24 25-11 25-24 25z" fill="#00D8FF"/>
      <path d="M128 96c20 0 39 3 55 9 12 4 24 10 32 18s14 16 14 24c0 7-6 16-14 23-8 8-19 15-32 19-16 6-35 9-55 9s-39-3-55-9c-12-4-24-11-32-19-8-8-14-16-14-23 0-8 6-16 14-24 8-8 19-14 32-18 16-6 35-9 55-9zM73 73c33-57 72-92 100-92s34 22 17 52c-8 16-22 35-42 54s-41 34-64 44c-23 9-45 12-59 11-14-2-27-9-19-24 4-9 16-22 31-37s33-30 36-39zM73 184c10 18 25 34 42 48s33 24 48 26c16 2 30-2 22-17-8-16-22-36-42-54s-41-35-64-44c-23-10-45-13-59-12s-27 9-19 24c4 9 16 22 31 37s33 30 36 39h5z" fill="none" stroke="#00D8FF" strokeWidth="8"/>
    </svg>
  ),
  nextjs: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#000" rx="24"/>
      <path d="M128 50c43 0 78 35 78 78s-35 78-78 78-78-35-78-78 35-78 78-78zm32 117H95l65-85v85z" fill="#fff"/>
    </svg>
  ),
  html5: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <path d="M20 0l21 240 87 24 87-24L236 0H20zm167 50H95l1 12h90l-3 28H99l1 12h79l-7 80-44 12-44-12-3-30h22l1 16 24 7 24-7 3-32H72l-7-84h128l-4 48z" fill="#E44D26"/>
    </svg>
  ),
  css3: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <path d="M20 0l21 240 87 24 87-24L236 0H20zm166 50H95l1 12h90l-3 28H99l1 12h79l-4 44-24 7-24-7-2-16h-22l3 32 44 12 44-12 6-68 1-10 1-14h-92l-1-12h92l2-18z" fill="#1572B6"/>
    </svg>
  ),
  tailwind: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <path d="M128 51c-34 0-55 17-64 51 13-17 28-23 45-19 9 2 16 9 24 17 12 14 27 29 58 29 34 0 55-17 64-51-13 17-28 23-45 19-9-2-16-9-24-17-12-14-27-29-58-29zM64 128c-34 0-55 17-64 51 13-17 28-23 45-19 9 2 16 9 24 17 12 14 27 29 58 29 34 0 55-17 64-51-13 17-28 23-45 19-9-2-16-9-24-17-12-14-27-29-58-29z" fill="#06B6D4"/>
    </svg>
  ),
  sass: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <path d="M128 0c71 0 128 57 128 128s-57 128-128 128S0 199 0 128 57 0 128 0z" fill="#CC6699"/>
      <path d="M176 163c-18 4-28-4-37-13-11-11-18-23-35 5 0 0-6 9-14 19-12 15-26 29-45 33-3 1-7 1-11 2-4-1-7 9-7 13l1 4c9 5 22 7 30 3 14-7 24-19 33-32 8-12 15-25 25-35 12-13 27-14 40-6 8 5 17 3 20-2 4-6 3-15 0-23v-2l-1-1v-1l-5-2c-2-1-4 17-11 24-2 2-5 3-8 4l2 3c14 15 28 5 39-12 5-8 8-18 11-29 0-5-5-11-11-11h-18c-5 4-8 10-11 16 0 0-1 0 0 0zm-20 25c-8 7-14 0-17-6-2-4-7-33 1-49 3-7 11-10 19-6 4 2 4 12 2 18-2 3-5 6-8 6-4 0-6-5-6-9 0-3 1-7 4-9-3-2-7-1-10 3-4 7-7 18-5 28 1 5 2 11 8 14 2 1 4 2 5 1s0-3 0-7h1l1 1c5 4 9 8 5 15z" fill="#fff"/>
    </svg>
  ),
  angular: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <path d="M128 10L11 52l18 154 99 40 99-40 18-154L128 10z" fill="#DD0031"/>
      <path d="M128 10L47 52 54 52 128 30l74 22 7 0L128 10z" fill="#C3002F"/>
      <path d="M128 30v162l74-30 14-116-88-16zm0 37l26 58H102l26-58z" fill="#fff"/>
    </svg>
  ),
  bootstrap: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#7952B3" rx="24"/>
      <path d="M80 62h52c23 0 43 7 50 22 5 10 5 23-3 33-6 8-16 12-26 13v1c12 2 23 7 27 19 4 11 2 24-6 33-8 10-22 14-35 14H80V62zm24 44h24c12 0 21-6 21-19s-9-18-21-18h-24v37zm0 53h28c14 0 24-7 24-20s-10-20-24-20h-28v40z" fill="#fff"/>
    </svg>
  ),
  nodejs: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <path d="M128 0c5 0 10 2 15 4l75 43c9 5 15 14 15 25v86c0 11-6 20-15 25l-75 43c-5 3-10 4-15 4s-10-1-15-4l-75-43c-9-5-15-14-15-25V72c0-11 6-20 15-25l75-43c5-3 10-4 15-4z" fill="#83CD29"/>
      <path d="M84 107c-4 0-7-2-8-6-4-11 2-22 11-26l35-15c9-4 20 2 22 12 2 9-5 18-14 19l-35 15c-3 1-7 1-11 1zm48 1c-3 0-6-1-8-2l-35-15c-8-3-12-13-9-21 3-8 12-12 20-9l35 15 33-15 8 3c4 2 7 6 7 10s-3 9-7 12l-35 21c-3 1-5 1-8 1h-1zm13 46c-4 0-7-2-8-5-4-11 2-22 12-26l35-15c9-4 20 2 22 12 2 9-5 18-14 19l-35 15h-12z" fill="#fff"/>
    </svg>
  ),
  nestjs: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#E0234E" rx="24"/>
      <path d="M128 40c-4 0-8 1-12 3L44 71c-8 5-13 13-13 22v47c0 9 5 18 13 22l72 41c4 2 8 3 12 3s8-1 12-3l72-41c8-4 13-13 13-22V93c0-9-5-17-13-22l-72-41c-4-2-8-3-12-3zm0 24 64 37v53l-64 37-64-37v-53l64-37z" fill="#fff"/>
      <path d="M160 116c-6 0-12 3-15 8l-17 29-17-29c-3-5-9-8-15-8-10 0-18 8-18 18s8 18 18 18c1 0 3 0 4-1l13 23v13c0 10 8 18 18 18s18-8 18-18v-13l13-23c1 1 3 1 4 1 10 0 18-8 18-18s-8-18-18-18h-4z" fill="#E0234E"/>
    </svg>
  ),
  django: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#092E20" rx="24"/>
      <path d="M128 44c3 0 6 1 9 2l62 36H88l31-36 9-2zM47 76v92l40 24V98L47 76zm162 0-40 22v94l40-24V76z" fill="#44B78B"/>
      <path d="M88 206 47 182V92l41 24v90zm0-90h80v53h-22v-18h-18v-18H88v54h58v20H88v-91zm67 37h20v18h22v-55h-20l-22 37z" fill="#fff"/>
    </svg>
  ),
  dotnet: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#512BD4" rx="24"/>
      <path d="M74 158c-8 0-15-2-20-6s-8-9-10-16c-2-7-2-15-2-22s0-15 2-22c2-7 5-12 10-16s12-6 20-6c8 0 15 2 20 6s8 9 10 16c2 7 2 15 2 22s0 15-2 22c-2 7-5 12-10 16s-12 6-20 6zm0-15c4 0 7-2 8-5 2-3 4-8 4-17s-2-14-4-17c-1-4-4-5-8-5s-7 2-8 5c-2 3-4 8-4 17s2 14 4 17c1 3 4 5 8 5zm35 14h-17l44-78h16l45 78h-17l-39-69-32 69zm-12-33h38v13H97v-13z" fill="#fff"/>
    </svg>
  ),
  postgresql: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#336791" rx="24"/>
      <path d="M192 66c-8-8-18-12-28-14-10-2-20-1-30 2-8 2-17 6-24 12l-2 2c8 0 16 2 23 5 7 3 13 9 17 15 4 7 6 15 6 23 0 19-13 31-22 38l5 10c7 9 15 17 22 27 6-1 12-4 17-8 8-7 13-16 16-26 3-11 3-23 0-34s-10-22-20-29l-2-1-2-1z" fill="#fff" opacity="0.9"/>
      <path d="M142 135c-9-7-20-16-20-32 0-7 2-14 6-20 4-7 10-12 17-16l4-2c-5 1-11 1-16 3-8 2-13 8-16 15-4 7-5 15-4 23s5 14 12 18c8 5 15 6 17 11z" fill="#fff" opacity="0.6"/>
      <path d="M81 186c9-14 18-28 30-40l-6-10c-9 6-16 14-22 23-12 18-10 27-2 27z" fill="#fff" opacity="0.6"/>
    </svg>
  ),
  mysql: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#00758F" rx="24"/>
      <path d="M128 40c-36 0-65 29-65 65v4c0 4-2 6-6 6H49c-5 0-9 4-9 9s4 9 9 9h7c3 0 5 2 5 5v28H45c-5 0-9 4-9 9s4 9 9 9h16v-46c0-4 2-6 6-6h7c4 0 7-2 9-6l12-24c4-8 16-8 20 0l12 24c2 4 5 6 9 6h7c4 0 6 2 6 6v46h16c5 0 9-4 9-9s-4-9-9-9h-16v-28c0-3 2-5 5-5h7c5 0 9-4 9-9s-4-9-9-9h-8c-4 0-6-2-6-6v-4c0-36-29-65-65-65z" fill="#fff"/>
      <path d="M192 133h-11c-5 0-9 4-9 9s4 9 9 9h19v28h16v-46z" fill="#fff"/>
    </svg>
  ),
  mongodb: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <path d="M128 0c-14 0-26 11-30 25-6 20-12 41-15 62-3 19-4 39-4 59s1 40 4 59c3 21 9 42 15 62 4 14 16 25 30 25s26-11 30-25c6-20 12-41 15-62 3-19 4-39 4-59s-1-40-4-59c-3-21-9-42-15-62C154 11 142 0 128 0z" fill="#47A248"/>
      <path d="M128 25c-2 0-4 2-5 4-5 17-10 35-13 53-3 17-4 34-4 52s2 35 4 52c3 19 8 36 13 53 1 2 3 4 5 4s4-2 5-4c5-17 10-34 13-53 3-17 4-34 4-52s-2-35-4-52c-3-18-8-36-13-53-1-2-3-4-5-4z" fill="#fff" opacity="0.3"/>
    </svg>
  ),
  graphql: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#E10098" rx="24"/>
      <path d="M128 16c6 0 12 3 15 9l81 46c3 6 3 13 0 18l-81 47c-3 6-9 9-15 9s-12-3-15-9L32 89c-3-5-3-12 0-18l81-46c3-6 9-9 15-9zm0 22-68 39 68 39 68-39-68-39zm-82 63 14 8V80l-14 8v13zm150 0 14-8v-13l-14 8v13zM60 97l14 8 14-8-14-8-14 8zm136 0-14 8-14-8 14-8 14 8zm-68 17 14 8 14-8-14-8-14 8z" fill="#fff"/>
    </svg>
  ),
  supabase: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <path d="M151 256H67C42 256 22 234 23 210L46 50C46 25 66 5 91 5h51l-38 95 47 36-23 115c0 3 3 6 6 6l3-1h14z" fill="#3ECF8E"/>
      <path d="M218 5h-84c-24 0-44 20-44 44l-23 163C66 221 80 236 98 241c4 1 8 2 12 2h78c25 0 47-22 46-47l-22-163C211 13 192-5 170 1h48v4z" fill="#3ECF8E"/>
    </svg>
  ),
  git: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <path d="M251 116l-51-51c-4-4-11-4-15 0l-11 11 19 19c4-1 10-1 14 3s4 10 3 14l18 18c4-1 10-1 14 3s4 11 1 16c-4 5-11 6-16 2s-6-11-2-16l-17-17v44c4 2 8 6 8 11s-3 9-8 11c-5 3-12 2-16-2s-4-11-1-16c2-3 6-5 10-6v-45c-4-2-7-5-9-9l-19 19c4 5 4 13-2 18s-13 5-18 1c-4-3-6-9-4-14s7-8 13-8c2 0 3 0 5 1l18-18-45-45-45 45 18 18c2-1 3-1 5-1 14 0 17 18 8 26s-18 8-26-2-8-19 2-26l19-19L5 131c-4-4-4-11 0-15l113-113c4-4 11-4 15 0l113 113c4 4 4 11 0 15l15-15z" fill="#F05133"/>
    </svg>
  ),
  docker: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#2496ED" rx="24"/>
      <path d="M225 109h-19c-5 0-9 4-9 9v18c0 5 4 9 9 9h19c5 0 9-4 9-9v-18c0-5-4-9-9-9zm-38 0h-19c-5 0-9 4-9 9v18c0 5 4 9 9 9h19c5 0 9-4 9-9v-18c0-5-4-9-9-9zm-39 0h-18c-5 0-9 4-9 9v18c0 5 4 9 9 9h18c6 0 10-4 10-9v-18c0-5-4-9-10-9zm-39 37H90c-5 0-9 4-9 9v19c0 5 4 9 9 9h19c5 0 9-4 9-9v-19c0-5-4-9-9-9zm-47-18H43c-5 0-9 4-9 9v18c0 5 4 9 9 9h19c5 0 9-4 9-9v-18c0-5-4-9-9-9zm86 37h-19c-5 0-9 4-9 9v19c0 5 4 9 9 9h19c5 0 9-4 9-9v-19c0-5-4-9-9-9z" fill="#fff"/>
      <path d="M148 91H90c-5 0-9 4-9 9v19c0 5 4 9 9 9h58c5 0 9-4 9-9v-19c0-5-4-9-9-9zM43 91H24c-5 0-9 4-9 9v19c0 5 4 9 9 9h19c5 0 9-4 9-9v-19c0-5-4-9-9-9z" fill="#fff"/>
      <path d="M218 146c-5-3-12-4-19-2-4-11-13-18-24-20l-4-1H37c-4 0-7 3-8 7-3 14 1 27 11 37 9 9 23 14 40 14l6-1h134l6 1c17 0 31-5 40-14 10-10 14-23 11-37-1-4-4-7-8-7h-4l-4 1-43 22z" fill="#fff"/>
    </svg>
  ),
  npm: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#CB3837" rx="24"/>
      <path d="M44 164V92h42v72h14v-72h14v72h14v-72h14v72h14v-72h14v72h14V92h14v72H44z" fill="#fff"/>
    </svg>
  ),
  postman: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#FF6C37" rx="24"/>
      <path d="M128 42c-15 0-28 5-39 15s-17 23-17 38c0 14 4 28 13 40 8 12 21 21 35 25l-5 18H87l5-18c-14-4-27-13-35-25s-13-26-13-40c0-15 6-28 17-38s24-15 39-15 28 6 39 17c11 10 17 24 17 40l-28-7c-4 0-8 2-9 6l-8 26c-2 5 1 11 7 12l36 8c6 1 11-3 12-9l8-26c1-4-1-8-5-10-4-1-8-1-11 2l22 5c3-16-2-31-14-42-11-11-25-17-40-17z" fill="#fff"/>
    </svg>
  ),
  linux: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <circle cx="128" cy="128" r="118" fill="#000"/>
      <path d="M128 10c-65 0-118 53-118 118s53 118 118 118 118-53 118-118S193 10 128 10zM70 148c-2-3-6-5-10-6s-9 1-13 4c-3 3-4 7-2 11s6 6 11 6c4 0 8-2 11-5s5-8 3-10zm12 18c-3-4-9-6-15-5s-11 5-14 10c-3 5-2 11 2 15s11 5 17 3 11-8 12-14c1-5-1-10-2-9zm14 22c-5-4-12-5-19-2s-11 8-12 15c-1 7 3 13 9 17s14 4 20 1 10-10 9-17-3-14-7-14zm22 20c-7-3-16-2-23 3s-10 12-7 20c2 7 9 13 17 14s16-2 21-8 6-15 2-22-4-9-10-7zm24 14c-9-2-18 2-24 9s-6 16-1 23c5 7 14 10 22 8s14-9 16-18c1-8-4-16-11-20l-2-2zm24 2c-10 0-19 5-24 14s-3 19 5 25c8 6 19 7 27 2s12-14 9-24c-3-9-11-16-17-17zm22-12c-10 2-18 10-19 20-1 11 5 20 15 24s22 0 29-7 8-19 1-27c-7-8-17-11-26-10zm18-22c-9 4-15 13-15 23 0 11 7 21 17 23s21-1 28-9 7-18-1-26c-7-8-18-13-27-11h-2zm12-30c-7 3-10 11-8 19 3 7 10 12 18 11s14-7 16-15c1-9-4-17-12-20s-14-1-14 5zm8-36c-4 4-6 10-4 16s7 10 13 12 14 0 18-5 5-12 2-18c-4-6-11-9-18-7s-11 2-11 2z" fill="#fff"/>
    </svg>
  ),
  aws: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#252F3E" rx="24"/>
      <path d="M80 180c32 24 79 28 116 12v-4c-3-1-7 0-10 2-33 14-75 10-103-12l-3 2zm118-14c-4-5-26-2-36-2-9 0-9-2-2-5 23-9 43-6 46-3s-2 16-17 22c-3 1-5 1-5-2 0-2 3-3 5-4s5-3 6-4c3-2 6-7 3-8zM45 163l3-2c31 19 71 23 104 12s54-34 63-63c3-11 5-22 5-34 0-3 2-5 5-5h3c-1 4-1 8-2 12-8 27-24 51-47 69s-50 28-79 27c-15 0-30-3-44-9l-5-3c-2-1-5-2-6-4z" fill="#FF9900"/>
    </svg>
  ),
  firebase: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <path d="M119 218 70 1l-56 108 105 109z" fill="#FFA000"/>
      <path d="M119 218 14 109l56-68 79 177h-30z" fill="#F57C00"/>
      <path d="M200 82 150 1l-36 175 86-94z" fill="#FFCA28"/>
      <path d="M200 82 114 176l5 42 81-136z" fill="#FFA000"/>
    </svg>
  ),
  figma: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#1E1E1E" rx="24"/>
      <path d="M96 256c21 0 38-17 38-38v-38H96c-21 0-38 17-38 38s17 38 38 38z" fill="#0ACF83"/>
      <path d="M58 128c0-21 17-38 38-38h38v76H96c-21 0-38-17-38-38z" fill="#A259FF"/>
      <path d="M58 52c0 21 17 38 38 38h38V14H96c-21 0-38 17-38 38z" fill="#F24E1E"/>
      <path d="M134 14v76h38c21 0 38-17 38-38s-17-38-38-38h-38z" fill="#FF7262"/>
      <path d="M210 128c0 21-17 38-38 38s-38-17-38-38 17-38 38-38 38 17 38 38z" fill="#1ABCFE"/>
    </svg>
  ),
  illustrator: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#330000" rx="24"/>
      <path d="M79 62h18l34 100h-21l-8-24H88l-7 24H60l19-62zm11 36-7 22h15l-8-22zm58 11h34v-8h-23v-4h20v-8h-20v-4h23v-8h-34v32zm-7 18h44v-8h-44v8z" fill="#FF9A00"/>
    </svg>
  ),
  latex: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#008080" rx="24"/>
      <text x="128" y="178" textAnchor="middle" fontFamily="serif" fontSize="140" fontWeight="bold" fill="#fff">L</text>
      <text x="162" y="140" textAnchor="middle" fontFamily="serif" fontSize="46" fill="#fff">A</text>
      <text x="155" y="158" textAnchor="middle" fontFamily="serif" fontSize="54" fill="#fff">T</text>
      <text x="165" y="182" textAnchor="middle" fontFamily="serif" fontSize="46" fill="#fff">E</text>
      <text x="158" y="206" textAnchor="middle" fontFamily="serif" fontSize="46" fill="#fff">X</text>
    </svg>
  ),
  markdown: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#000" rx="24"/>
      <path d="M56 170V86h24l32 40 32-40h24v84h-24v-50l-32 38-32-38v50H56zm144 0v-44h-24v44h-24V86h24l32 36 32-36h24v84h-24z" fill="#fff"/>
    </svg>
  ),
  vscode: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <path d="M248 195L193 237 61 178 0 201V55l61 23L193 19l55 42v134zM182 129l-40-30v56l40-26zm-136 4L59 96h-1l-12 37 12 37h1l-13-37z" fill="#0065A9"/>
      <path d="M46 133 59 96l-1-1L61 55 193 19v54l-51 38 38 28-15 11L61 178l-15-45z" fill="#007ACC"/>
      <path d="M142 111l51-38v-17L46 117l13 37h1l82 59v-74l-45 29-7-5 52-52z" fill="#1F9CF0"/>
    </svg>
  ),
  notion: ({ className, size = 24 }) => (
    <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
      <rect width="256" height="256" fill="#fff" rx="24"/>
      <path d="M70 66l90 15v110l-11 6-83-14V75l4-9zm91 15l22-14c3-2 6-2 9-1l16 2 2 3v128l-7 18-16 2-46 7V87l3-6h17zm-99 19v110l61 10 5-2V89l-66-9z" fill="#000"/>
    </svg>
  ),
};

export function getIcon(name: string) {
  return iconMap[name] || iconMap.javascript;
}

export const techIconKeys = Object.keys(iconMap);
