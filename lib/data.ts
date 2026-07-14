export const siteConfig = {
  alias: "CesarBR",
  name: "César Iván Bárcenas Rosales",
  firstName: "César",
  title: "Ingeniero en Sistemas Computacionales | Desarrollador Fullstack",
  description:
    "Soy Ingeniero en Sistemas Computacionales con experiencia en el desarrollo de soluciones para los sectores público y privado. Creando sistemas de alto impacto enfocados en la escalabilidad y la eficiencia operativa.",
  location: "México",
  remoteLabel: "Disponible Remoto",
  email: "barcenasrosalescesarivan@gmail.com",
  github: "https://github.com/CESARBR2025",
  linkedin: "https://www.linkedin.com/in/cesar-ivan-barcenas-rosales-a74a83378/",
  avatar: "/images/profilef-2.png",
  available: true,
  stats: [
    { value: "1.3", label: "años de experiencia" },
    { value: "10+", label: "proyectos" },
    { value: "8+", label: "tecnologías" },
  ],
};

export const roles = [
  "Desarrollador Fullstack.",
  "Ingeniero de Software.",
  "Solucionador de Problemas.",
];

export const navLinks = [
  { href: "home", label: "Inicio" },
  { href: "about", label: "Sobre mí" },
  { href: "education", label: "Trayectoria" },
  { href: "projects", label: "Proyectos" },
  { href: "contact", label: "Contacto" },
];

export interface TechCategory {
  title: string;
  items: { name: string; icon: string }[];
}

export const techCategories: TechCategory[] = [
  {
    title: "Lenguajes de Programación",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "SQL", icon: "sql" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Tailwind", icon: "tailwind" },
    ],
  },
  {
    title: "Backend & Frameworks",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Django", icon: "django" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
  {
    title: "Herramientas & DevOps",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "Linux", icon: "linux" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    title: "Diseño & Otros",
    items: [
      { name: "Figma", icon: "figma" },
      { name: "Obsidian", icon: "obsidian" },
      { name: "VS Code", icon: "vscode" },
      { name: "Markdown", icon: "markdown" },
      { name: "Notion", icon: "notion" },
    ],
  },
  {
    title: "En proceso de aprendizaje",
    items: [
      { name: "AWS", icon: "aws" },
    ],
  },
];

export interface TimelineEntry {
  type: "Trabajo Remoto" | "Trabajo" | "Trabajo Freelance" | "Trabajo Voluntariado" | "Voluntariado" | "Voluntariado Universitario" | "Educación" | "Competición" | "Certificación";
  year: string;
  title: string;
  subtitle: string;
  description: string;
  flags?: string[];
  tech: string[];
  image?: string;
}

export const timelineData: TimelineEntry[] = [
  {
    type: "Trabajo",
    year: "Ene 2026 — Actualidad",
    title: "Desarrollador Fullstack",
    subtitle: "Depto. de Desarrollo de Software, Presidencia de San Juan del Río, Querétaro",
    description: "Desarrollé sistemas escalables con React, Node.js y PostgreSQL. Implementé CI/CD y microservicios que mejoraron la eficiencia del equipo en un 40%.",
    flags: ["mx"],
    tech: ["nextjs", "typescript", "postgresql", "supabase", "obsidian"],
  },
  {
    type: "Trabajo",
    year: "Oct — Dic 2025",
    title: "Desarrollador Fullstack",
    subtitle: "Xelex Industrial, San Juan del Río, Querétaro",
    description: "Implementación de herramientas internas para la gestión de la empresa. Desarrollo de software para mesa de TI. Implementación de arquitectura para redes y servidores. Desarrollo de herramienta para control de nómina vía correo electrónico.",
    flags: ["mx"],
    tech: ["react", "typescript", "postgresql", "docker"],
  },
  {
    type: "Trabajo",
    year: "Sep 2024 — Jun 2025",
    title: "Desarrollador Fullstack",
    subtitle: "IMBERA SJR, San Juan del Río, Querétaro",
    description: "Migración y eliminación de dependencia de software TABLEAU para análisis de KPIs. Migración a dashboards estratégicos en plataforma operacional internacional Consola Solkos.",
    flags: ["mx"],
    tech: ["python", "react", "django", "postgresql"],
  },
  {
    type: "Educación",
    year: "14 de diciembre del 2025",
    title: "Ingeniería en Sistemas Computacionales",
    subtitle: "ITSJR - Instituto Tecnológico de San Juan del Río",
    description: "Formación académica con enfoque en arquitectura de software, bases de datos, análisis de algoritmos, patrones de diseño y desarrollo web fullstack.",
    tech: ["python", "sql", "postgresql", "typescript"],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  links: { label: string; url: string }[];
  image: string;
  featured?: boolean;
  status?: string;
  video?: boolean;
}

export const projects: Project[] = [
  {
    title: "YouMindAG — Contexto para tu AI Coding Tool",
    description: `Herramienta CLI open-source que inyecta contexto completo de arquitectura a cualquier proyecto en 30 segundos. Una línea (npx youmindag) y tu asistente AI entiende toda la estructura, dependencias y reglas del proyecto.

• +3,000 instalaciones en npm
• Plugin con 13 mecanismos de contexto para opencode
• Modo watch, dry-run y desinstalación segura
• Grafo de conocimiento basado en Graphify
• 100% open-source · MIT`,
    tech: ["nodejs", "javascript", "npm", "graphify"],
    links: [
      { label: "Código Fuente", url: "https://github.com/CESARBR2025/youmindag" },
      { label: "npm", url: "https://www.npmjs.com/package/youmindag" },
    ],
    image: "/images/flayer-youmind.png",
    featured: true,
  },
];
