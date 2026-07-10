export const siteConfig = {
  name: "CesarBR",
  fullName: "César Iván Bárcenas Rosales",
  tagline: "Ingeniero en Sistemas Computacionales | Desarrollador Fullstack",
  description:
    "Construyo aplicaciones web, sistemas robustos y herramientas digitales eficientes, con un enfoque en la confiabilidad, el rendimiento y escribir código limpio.",
  location: "México",
  remote: "Disponible Remoto",
  email: "cesar@example.com",
  github: "https://github.com/CesarBR",
  linkedin: "https://linkedin.com/in/cesarbr",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  available: true,
  yearsExperience: "2+",
  status: "Disponible para proyectos",
  workingGlobally: "Trabajando globalmente",
};

export const roles = [
  "Desarrollador Fullstack",
  "Ingeniero de Software",
  "Backend Developer",
  "Frontend Developer",
];

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export interface TechCategory {
  title: string;
  items: string[];
}

export const techCategories: TechCategory[] = [
  {
    title: "Lenguajes de Programación",
    items: [
      "javascript", "typescript", "python", "java", "csharp",
      "sql", "php", "go",
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      "react", "nextjs", "html5", "css3", "tailwind",
      "sass", "angular", "bootstrap",
    ],
  },
  {
    title: "Backend & Frameworks",
    items: [
      "nodejs", "nestjs", "django", "dotnet", "postgresql",
      "mysql", "mongodb", "graphql", "supabase",
    ],
  },
  {
    title: "Herramientas & DevOps",
    items: ["git", "docker", "npm", "postman", "linux", "aws", "firebase"],
  },
  {
    title: "Diseño & Otros",
    items: ["figma", "illustrator", "latex", "markdown", "vscode", "notion"],
  },
];

export interface TimelineItem {
  type: "Trabajo Remoto" | "Trabajo Freelance" | "Educación" | "Voluntariado" | "Competición" | "Certificación";
  year: string;
  title: string;
  subtitle: string;
  description: string;
  flags?: string[];
  tech: string[];
  image?: string;
}

export const timelineData: TimelineItem[] = [
  {
    type: "Trabajo Remoto",
    year: "2025",
    title: "Desarrollador Fullstack",
    subtitle: "Empresa Tecnológica (México)",
    description:
      "Desarrollé sistemas web escalables utilizando React, Node.js y PostgreSQL. Implementé CI/CD pipelines y microservicios para mejorar la eficiencia del equipo.",
    flags: ["mx"],
    tech: ["react", "nodejs", "postgresql", "docker"],
  },
  {
    type: "Trabajo Freelance",
    year: "2025",
    title: "Sistema de Gestión Empresarial",
    subtitle: "Cliente Empresarial",
    description:
      "Desarrollé un sistema integral de gestión para una empresa mediana, incluyendo módulos de inventario, ventas y reportes automatizados con generación de PDF.",
    tech: ["nextjs", "typescript", "supabase", "tailwind"],
  },
  {
    type: "Educación",
    year: "2024",
    title: "Certificación AWS Cloud Practitioner",
    subtitle: "Amazon Web Services",
    description:
      "Obtuve la certificación oficial de AWS Cloud Practitioner, validando mis conocimientos en fundamentos de infraestructura en la nube, servicios core de AWS, arquitectura y mejores prácticas.",
    tech: ["aws"],
  },
  {
    type: "Voluntariado",
    year: "2024",
    title: "Mentor de Programación",
    subtitle: "Comunidad de Desarrollo Local",
    description:
      "Lideré sesiones de mentoría enseñando desarrollo web a estudiantes universitarios. Proceso que culminó en un hackathon local con 50+ participantes.",
    tech: ["javascript", "react", "git"],
  },
  {
    type: "Trabajo Freelance",
    year: "2023",
    title: "Plataforma E-commerce",
    subtitle: "Tienda Online",
    description:
      "Diseñé y desarrollé una plataforma de e-commerce completa con carrito de compras, pasarela de pagos y panel de administración personalizado.",
    tech: ["nextjs", "nodejs", "mongodb", "tailwind"],
    flags: ["mx"],
  },
  {
    type: "Educación",
    year: "2023",
    title: "Ingeniería en Sistemas Computacionales",
    subtitle: "Universidad",
    description:
      "Formación académica con enfoque en arquitectura de software, bases de datos, análisis de algoritmos, patrones de diseño y desarrollo web fullstack.",
    tech: ["java", "python", "sql"],
  },
  {
    type: "Competición",
    year: "2023",
    title: "Hackathon de Innovación",
    subtitle: "Competencia Nacional",
    description:
      "Participé en un hackathon nacional desarrollando una solución digital innovadora en 48 horas. Finalista entre más de 100 equipos participantes.",
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
}

export const projects: Project[] = [
  {
    title: "Sistema de Gestión Empresarial",
    description:
      "Plataforma integral para la gestión de inventarios, ventas y reportes automatizados. Incluye dashboard en tiempo real, generación de PDF y notificaciones por correo electrónico.",
    tech: ["nextjs", "typescript", "supabase", "tailwind"],
    links: [
      { label: "Código Fuente", url: "https://github.com/CesarBR/proyecto-1" },
      { label: "Visitar Web", url: "https://proyecto-1.vercel.app" },
    ],
    image: "/images/project-mockup.svg",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Tienda online completa con carrito de compras, pasarela de pagos integrada, panel de administración y dashboard de analytics. Optimizada para SEO y rendimiento.",
    tech: ["nextjs", "nodejs", "mongodb", "tailwind"],
    links: [
      { label: "Código Fuente", url: "https://github.com/CesarBR/ecommerce" },
    ],
    image: "/images/project-mockup.svg",
  },
  {
    title: "API REST Microservicios",
    description:
      "Arquitectura de microservicios con Node.js y Docker. Incluye autenticación JWT, rate limiting, documentación Swagger y despliegue automatizado con CI/CD.",
    tech: ["nodejs", "nestjs", "postgresql", "docker"],
    links: [
      { label: "Repo", url: "https://github.com/CesarBR/microservices-api" },
    ],
    image: "/images/project-mockup.svg",
    status: "En Desarrollo",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Panel de visualización de datos con gráficos interactivos, exportación de reportes y filtros dinámicos. Construido con React y D3.js.",
    tech: ["react", "typescript", "tailwind", "postgresql"],
    links: [
      { label: "Repo", url: "https://github.com/CesarBR/dashboard" },
      { label: "Web", url: "https://dashboard-demo.vercel.app" },
    ],
    image: "/images/project-mockup.svg",
  },
  {
    title: "Aplicación Móvil React Native",
    description:
      "App multiplataforma con notificaciones push, geolocalización, chat en tiempo real y sincronización offline. Publicada en App Store y Google Play.",
    tech: ["react", "nodejs", "firebase", "typescript"],
    links: [
      { label: "Repo", url: "https://github.com/CesarBR/mobile-app" },
    ],
    image: "/images/project-mockup.svg",
  },
  {
    title: "Sistema de Automatización",
    description:
      "Scripts avanzados para automatización de procesos empresariales, procesamiento de datos masivos y generación de reportes. Reducción del 90% en tiempo de procesamiento manual.",
    tech: ["python", "sql", "docker", "aws"],
    links: [
      { label: "Repo", url: "https://github.com/CesarBR/automation" },
    ],
    image: "/images/project-mockup.svg",
  },
];
