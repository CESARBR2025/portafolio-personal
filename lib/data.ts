export const siteConfig = {
  alias: "CesarBR",
  name: "César Iván Bárcenas Rosales",
  firstName: "César",
  title: "Ingeniero en Sistemas Computacionales | Desarrollador Fullstack",
  description:
    "Construyo aplicaciones web, sistemas robustos y herramientas digitales eficientes, con un enfoque en la confiabilidad, el rendimiento y escribir código limpio.",
  location: "México",
  remoteLabel: "Disponible Remoto",
  email: "cesar@example.com",
  github: "https://github.com/CesarBR",
  linkedin: "https://linkedin.com/in/cesarbr",
  avatar: "/images/avatar.jpg",
  available: true,
  stats: [
    { value: "2+", label: "años de experiencia" },
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
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "C#", icon: "csharp" },
      { name: "SQL", icon: "sql" },
      { name: "PHP", icon: "php" },
      { name: "C++", icon: "cplusplus" },
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
      { name: "Sass", icon: "sass" },
      { name: "Angular", icon: "angular" },
    ],
  },
  {
    title: "Backend & Frameworks",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Django", icon: "django" },
      { name: ".NET", icon: "dotnet" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
  {
    title: "Herramientas & DevOps",
    items: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "Linux", icon: "linux" },
      { name: "AWS", icon: "aws" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    title: "Diseño & Otros",
    items: [
      { name: "Figma", icon: "figma" },
      { name: "Illustrator", icon: "illustrator" },
      { name: "VS Code", icon: "vscode" },
      { name: "LaTeX", icon: "latex" },
      { name: "Markdown", icon: "markdown" },
      { name: "Notion", icon: "notion" },
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
    type: "Trabajo Remoto",
    year: "2025 — 2026",
    title: "Desarrollador Fullstack",
    subtitle: "Empresa Tecnológica (México)",
    description: "Desarrollé sistemas escalables con React, Node.js y PostgreSQL. Implementé CI/CD y microservicios que mejoraron la eficiencia del equipo en un 40%.",
    flags: ["mx"],
    tech: ["react", "nodejs", "postgresql", "docker"],
  },
  {
    type: "Trabajo Freelance",
    year: "2025",
    title: "Sistema de Gestión Empresarial",
    subtitle: "Cliente Empresarial",
    description: "Desarrollé un sistema integral de gestión con módulos de inventario, ventas, reportes automatizados y generación de PDF. Redujo los tiempos operativos en un 60%.",
    tech: ["nextjs", "typescript", "supabase", "tailwind"],
  },
  {
    type: "Educación",
    year: "2024",
    title: "Certificación AWS Cloud Practitioner",
    subtitle: "Amazon Web Services",
    description: "Obtuve la certificación oficial validando conocimientos en infraestructura cloud, servicios core de AWS, arquitectura y mejores prácticas de seguridad.",
    tech: ["aws"],
  },
  {
    type: "Voluntariado",
    year: "2024",
    title: "Mentor de Programación",
    subtitle: "Comunidad de Desarrollo Local",
    description: "Lideré sesiones de mentoría enseñando desarrollo web a 30+ estudiantes universitarios. Organicé un hackathon local con gran participación.",
    tech: ["javascript", "react", "git"],
  },
  {
    type: "Trabajo Freelance",
    year: "2023",
    title: "Plataforma E-Commerce",
    subtitle: "Tienda Online",
    description: "Diseñé y desarrollé una plataforma e-commerce completa con carrito de compras, pasarela de pagos Stripe y panel de administración personalizado.",
    tech: ["nextjs", "nodejs", "mongodb", "tailwind"],
    flags: ["mx"],
  },
  {
    type: "Educación",
    year: "2023 — Actualidad",
    title: "Ingeniería en Sistemas Computacionales",
    subtitle: "Universidad",
    description: "Formación académica con enfoque en arquitectura de software, bases de datos, análisis de algoritmos, patrones de diseño y desarrollo web fullstack.",
    tech: ["java", "python", "sql"],
  },
  {
    type: "Competición",
    year: "2023",
    title: "Hackathon Nacional de Innovación",
    subtitle: "Finalista entre 100+ equipos",
    description: "Desarrollé una solución digital innovadora en 48 horas compitiendo contra equipos de todo el país. Finalista en la categoría de impacto social.",
    tech: ["react", "nodejs", "figma"],
    flags: ["mx"],
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
    title: "Sistema de Gestión Empresarial",
    description: "Plataforma integral para gestión de inventarios, ventas y reportes automatizados con dashboard en tiempo real, generación de PDF y notificaciones por email. Arquitectura escalable con microservicios.",
    tech: ["nextjs", "typescript", "supabase", "tailwind"],
    links: [
      { label: "Código Fuente", url: "https://github.com/CesarBR" },
      { label: "Visitar Web", url: "https://vercel.com" },
    ],
    image: "/images/project1.jpg",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description: "Tienda online completa con carrito de compras, pasarela de pagos Stripe, panel de administración y dashboard de analytics. Optimizada para SEO y rendimiento con Next.js.",
    tech: ["nextjs", "nodejs", "mongodb", "tailwind"],
    links: [
      { label: "Código Fuente", url: "https://github.com/CesarBR" },
    ],
    image: "/images/project2.jpg",
    featured: true,
  },
  {
    title: "API REST Microservicios",
    description: "Arquitectura de microservicios con Node.js y Docker. Autenticación JWT, rate limiting, documentación Swagger y CI/CD con GitHub Actions.",
    tech: ["nodejs", "nestjs", "postgresql", "docker"],
    links: [
      { label: "Repo", url: "https://github.com/CesarBR" },
    ],
    image: "/images/project3.jpg",
    status: "En Desarrollo",
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de visualización de datos con gráficos interactivos, exportación de reportes y filtros dinámicos.",
    tech: ["react", "typescript", "tailwind", "postgresql"],
    links: [
      { label: "Repo", url: "https://github.com/CesarBR" },
      { label: "Web", url: "https://vercel.com" },
    ],
    image: "/images/project4.jpg",
  },
  {
    title: "Aplicación Móvil Cross-Platform",
    description: "App multiplataforma con notificaciones push, geolocalización y sincronización offline.",
    tech: ["react", "nodejs", "firebase", "typescript"],
    links: [
      { label: "Repo", url: "https://github.com/CesarBR" },
    ],
    image: "/images/project5.jpg",
  },
  {
    title: "Sistema de Automatización de Datos",
    description: "Scripts avanzados para automatización de procesos, procesamiento de datos masivos y reducción del 90% en tiempo de procesamiento manual.",
    tech: ["python", "sql", "docker", "aws"],
    links: [
      { label: "Repo", url: "https://github.com/CesarBR" },
    ],
    image: "/images/project6.jpg",
  },
];
