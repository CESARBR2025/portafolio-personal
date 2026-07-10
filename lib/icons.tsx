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
  flutter: `${CDN_BASE}/flutter/flutter-original.svg`,
  expo: `${CDN_BASE}/expo/expo-original.svg`,
};

export function IconImage({ name, size = 24, className = "" }: { name: string; size?: number; className?: string }) {
  const src = iconMap[name];
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
