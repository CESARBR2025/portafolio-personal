"use client";

import { getIcon } from "@/lib/icons";

export default function TechMarquee() {
  const icons = [
    "javascript", "typescript", "python", "java", "csharp", "sql", "php", "go",
    "react", "nextjs", "html5", "css3", "tailwind", "sass", "angular", "bootstrap",
    "nodejs", "nestjs", "django", "dotnet", "postgresql", "mysql", "mongodb", "graphql", "supabase",
    "git", "docker", "npm", "postman", "linux", "aws", "firebase",
    "figma", "latex", "markdown", "vscode", "notion",
  ];

  const duplicated = [...icons, ...icons];

  return (
    <div className="relative overflow-hidden py-4 my-6 select-none">
      <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
        {duplicated.map((icon, i) => {
          const Icon = getIcon(icon);
          return (
            <div
              key={`${icon}-${i}`}
              className="flex flex-col items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-primary-muted/30 transition-colors flex-shrink-0"
            >
              <Icon size={32} className="grayscale hover:grayscale-0 transition-all duration-300" />
              <span className="text-[10px] text-muted uppercase tracking-wider">
                {icon === "csharp" ? "C#" : icon === "nextjs" ? "Next.js" : icon === "nestjs" ? "NestJS" : icon === "nodejs" ? "Node.js" : icon === "vscode" ? "VS Code" : icon === "dotnet" ? ".NET" : icon.charAt(0).toUpperCase() + icon.slice(1)}
              </span>
            </div>
          );
        })}
      </div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
}
