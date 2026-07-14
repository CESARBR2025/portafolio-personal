import Image from "next/image";

type IconProps = { size?: number; className?: string };

const CDN_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const iconMap: Record<string, string> = {
  javascript: `${CDN_BASE}/javascript/javascript-original.svg`,
  typescript: `${CDN_BASE}/typescript/typescript-original.svg`,
  python: `${CDN_BASE}/python/python-original.svg`,
  java: `${CDN_BASE}/java/java-original.svg`,
  csharp: `${CDN_BASE}/csharp/csharp-original.svg`,
  cplusplus: `${CDN_BASE}/cplusplus/cplusplus-original.svg`,
  php: `${CDN_BASE}/php/php-original.svg`,
  sql: `${CDN_BASE}/azuresqldatabase/azuresqldatabase-original.svg`,
  go: `${CDN_BASE}/go/go-original.svg`,
  react: `${CDN_BASE}/react/react-original.svg`,
  nextjs: `${CDN_BASE}/nextjs/nextjs-original.svg`,
  html5: `${CDN_BASE}/html5/html5-original.svg`,
  css3: `${CDN_BASE}/css3/css3-original.svg`,
  tailwind: `${CDN_BASE}/tailwindcss/tailwindcss-original.svg`,
  sass: `${CDN_BASE}/sass/sass-original.svg`,
  angular: `${CDN_BASE}/angular/angular-original.svg`,
  bootstrap: `${CDN_BASE}/bootstrap/bootstrap-original.svg`,
  nodejs: `${CDN_BASE}/nodejs/nodejs-original.svg`,
  nestjs: `${CDN_BASE}/nestjs/nestjs-original.svg`,
  django: `${CDN_BASE}/django/django-plain.svg`,
  dotnet: `${CDN_BASE}/dot-net/dot-net-original.svg`,
  postgresql: `${CDN_BASE}/postgresql/postgresql-original.svg`,
  mongodb: `${CDN_BASE}/mongodb/mongodb-original.svg`,
  mysql: `${CDN_BASE}/mysql/mysql-original.svg`,
  graphql: `${CDN_BASE}/graphql/graphql-plain.svg`,
  supabase: `${CDN_BASE}/supabase/supabase-original.svg`,
  git: `${CDN_BASE}/git/git-original.svg`,
  github: `${CDN_BASE}/github/github-original.svg`,
  docker: `${CDN_BASE}/docker/docker-original.svg`,
  npm: `${CDN_BASE}/npm/npm-original-wordmark.svg`,
  postman: `${CDN_BASE}/postman/postman-original.svg`,
  linux: `${CDN_BASE}/linux/linux-original.svg`,
  aws: `${CDN_BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
  firebase: `${CDN_BASE}/firebase/firebase-original.svg`,
  figma: `${CDN_BASE}/figma/figma-original.svg`,
  illustrator: `${CDN_BASE}/illustrator/illustrator-plain.svg`,
  latex: `${CDN_BASE}/latex/latex-original.svg`,
  markdown: `${CDN_BASE}/markdown/markdown-original.svg`,
  vscode: `${CDN_BASE}/vscode/vscode-original.svg`,
  notion: `${CDN_BASE}/notion/notion-original.svg`,
  obsidian: `${CDN_BASE}/obsidian/obsidian-original.svg`,
  pandas: `${CDN_BASE}/pandas/pandas-original.svg`,
  flutter: `${CDN_BASE}/flutter/flutter-original.svg`,
  expo: `${CDN_BASE}/expo/expo-original.svg`,

};

export function IconImage({ name, size = 24, className = "" }: { name: string; size?: number; className?: string }) {
  const src = iconMap[name];

  if (name === "graphify") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`}>
        <circle cx="5" cy="12" r="2" className="text-indigo-400"/>
        <circle cx="12" cy="6" r="2" className="text-indigo-400"/>
        <circle cx="12" cy="18" r="2" className="text-indigo-400"/>
        <circle cx="19" cy="12" r="2" className="text-indigo-400"/>
        <line x1="12" y1="6" x2="5" y2="12" className="text-indigo-400"/>
        <line x1="12" y1="6" x2="19" y2="12" className="text-indigo-400"/>
        <line x1="5" y1="12" x2="12" y2="18" className="text-indigo-400"/>
        <line x1="19" y1="12" x2="12" y2="18" className="text-indigo-400"/>
      </svg>
    );
  }

  if (name === "obsidian") {
    return (
      <svg width={size} height={size} viewBox="0 0 256 256" className={`shrink-0 ${className}`}>
        <rect width="256" height="256" fill="#7C3AED" rx="24"/>
        <path d="M128 32L60 68l20 64-20 44 68 48 68-48-20-44 20-64L128 32z" fill="#D8B4FE"/>
        <path d="M128 52L76 80l14 48-14 32 52 36 52-36-14-32 14-48L128 52z" fill="#7C3AED"/>
        <path d="M128 84l-10 32v32l10 10 10-10v-32l-10-32z" fill="#D8B4FE"/>
      </svg>
    );
  }

  if (!src) return null;
  return (
    <Image
      src={src}
      alt={name}
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      unoptimized
    />
  );
}

export function getIcon(name: string): string {
  return iconMap[name] || iconMap.javascript;
}
