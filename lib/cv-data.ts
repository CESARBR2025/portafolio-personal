export const translations: Record<string, Record<string, string>> = {
  es: {
    experience: "Experiencia Profesional",
    education: "Educación",
    technologies: "Tecnologías",
    about: "Perfil Profesional",
    contact: "Contacto",
    footer: "Generado desde portafolio",
    featuredProject: "Proyecto Destacado",
    openSource: "Open Source",
    additionalSkills: "Skills Adicionales",
  },
  en: {
    experience: "Professional Experience",
    education: "Education",
    technologies: "Technologies",
    about: "Professional Profile",
    contact: "Contact",
    footer: "Generated from portfolio",
    featuredProject: "Featured Project",
    openSource: "Open Source",
    additionalSkills: "Additional Skills",
  },
};

export const additionalSkills: Record<string, string[]> = {
  es: [
    "Liderazgo técnico y mentoría de equipos de desarrollo full-stack",
    "Análisis, diseño y arquitectura de sistemas y bases de datos",
    "Desarrollo full-stack con JavaScript, TypeScript, React y Node.js",
    "Implementación de CI/CD, microservicios y despliegue en la nube",
    "Gestión de proyectos tecnológicos y coordinación interdepartamental",
  ],
  en: [
    "Technical leadership and mentoring of full-stack development teams",
    "Systems analysis, design, and database architecture",
    "Full-stack development with JavaScript, TypeScript, React, and Node.js",
    "CI/CD implementation, microservices, and cloud deployment",
    "Technology project management and cross-department coordination",
  ],
};

export const techList = [
  "JavaScript", "TypeScript", "Python", "SQL",
  "React", "Next.js", "HTML5", "CSS3", "Tailwind",
  "Node.js", "NestJS", "Django", "PostgreSQL", "GraphQL", "Supabase",
  "Docker", "Linux", "Firebase", "AWS",
  "Git", "GitHub Actions", "Postman", "Figma",
];

export const techNames: Record<string, string> = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  python: "Python",
  java: "Java",
  sql: "SQL",
  react: "React",
  nextjs: "Next.js",
  html5: "HTML5",
  css3: "CSS3",
  tailwind: "Tailwind",
  nodejs: "Node.js",
  nestjs: "NestJS",
  django: "Django",
  postgresql: "PostgreSQL",
  mongodb: "MongoDB",
  graphql: "GraphQL",
  supabase: "Supabase",
  docker: "Docker",
  git: "Git",
  github: "GitHub",
  postman: "Postman",
  linux: "Linux",
  firebase: "Firebase",
  figma: "Figma",
  aws: "AWS",
  graphify: "Graphify",
  npm: "npm",
  csharp: "C#",
  obsidian: "Obsidian",
  vscode: "VS Code",
  notion: "Notion",
  markdown: "Markdown",
};

export const languages = [
  { name: "Español", level: "Nativo", levelEn: "Native" },
  { name: "Inglés", level: "Técnico (lectura/escritura)", levelEn: "Technical (reading/writing)" },
];
