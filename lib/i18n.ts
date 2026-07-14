export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const translations: Record<string, Record<string, any>> = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      education: "Trayectoria",
      projects: "Proyectos",
      contact: "Contacto",
      cv: "CV",
      menu: "Menú",
      downloadCv: "Descargar CV",
    },
    hero: {
      roles: [
        "Desarrollador Fullstack.",
        "Ingeniero en Sistemas.",
        "Solucionador de Problemas.",
      ],
      bootText: "Initializing system...",
      greeting: "Hola, soy",
      rolePrefix: "Soy ",
      description:
        "Construyo aplicaciones web, sistemas robustos y herramientas digitales eficientes y escalables.",
      availableProjects: "Disponible para proyectos",
      availableHire: "Disponible para contratación",
      contactCta: "Ponerse en contacto",
      downloadCv: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      siteTitle:
        "Ingeniero en Sistemas Computacionales | Desarrollador Fullstack",
      line1:
        "Soy {name}, {title}. Me especializo en transformar ideas complejas en experiencias digitales intuitivas, rápidas y escalables.",
      line2:
        "Mi enfoque técnico se complementa con una metodología arquitectónica de análisis complejo, asegurando que cada aplicación sea como te la imaginaste.",
      currentStack: "Mi Stack Actual",
      techArsenal: "Mi Arsenal Tecnológico",
    },
    journey: {
      title: "Trayectoria",
      subtitle:
        "Mi camino profesional, logros académicos y experiencia colaborativa.",
      typeLabels: {
        "Trabajo Remoto": "Trabajo Remoto",
        Trabajo: "Trabajo",
        "Trabajo Freelance": "Freelance",
        "Trabajo Voluntariado": "Voluntariado",
        Voluntariado: "Voluntariado",
        "Voluntariado Universitario": "Voluntariado Universitario",
        Educación: "Educación",
        Competición: "Competición",
        Certificación: "Certificación",
      },
    },
    projects: {
      title: "Otros Proyectos Interesantes",
      whatNext: "¿Qué sigue?",
      workTogether: "Trabajemos juntos →",
      sourceCode: "Código Fuente",
      featuredTitle: "YouMindAG — Contexto para tu AI Coding Tool",
      featuredDesc: `Herramienta CLI open-source que inyecta contexto completo de arquitectura a cualquier proyecto en 30 segundos. Una línea (npx youmindag) y tu asistente AI entiende toda la estructura, dependencias y reglas del proyecto.

• +3,000 instalaciones en npm
• Plugin con 13 mecanismos de contexto para opencode
• Modo watch, dry-run y desinstalación segura
• Grafo de conocimiento basado en Graphify
• 100% open-source · MIT`,
    },
    contact: {
      label: "Contacto",
      title: "Trabajemos",
      titleAccent: "Juntos.",
      description:
        "Actualmente estoy abierto a nuevas oportunidades de trabajo y proyectos freelance. Ya sea que tengas una pregunta o simplemente quieras saludar, haré todo lo posible para responderte pronto.",
      contactMe: "Contáctame",
      viewCode: "Ver Código",
      connect: "Conectar",
      namePlaceholder: "Ej. César Bárcenas",
      emailPlaceholder: "email@ejemplo.com",
      messagePlaceholder:
        "Cuéntame sobre tu proyecto, ideas o pregunta...",
      sending: "Enviando...",
      sendMessage: "Enviar Mensaje",
      successMsg: "Hola, me gustaría conectar contigo.",
      successReply: "Gracias por contactarme. Te responderé pronto.",
      sent: "Enviado",
      allFieldsRequired: "Todos los campos son obligatorios.",
      errorSending: "Error al enviar el mensaje. Intenta de nuevo.",
    },
    footer: {
      description:
        "Desarrollador de Software especializado en crear soluciones digitales escalables, limpias y eficientes desde México hacia el mundo.",
      navigation: "Navegación",
      currentStatus: "Status Actual",
      available: "Disponible para contratación",
      notAvailable: "No disponible",
      copyright: "Todos los derechos reservados.",
      builtWith: "Hecho con Next.js y mucha lógica.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Journey",
      projects: "Projects",
      contact: "Contact",
      cv: "Resume",
      menu: "Menu",
      downloadCv: "Download CV",
    },
    hero: {
      roles: [
        "Fullstack Developer.",
        "Systems Engineer.",
        "Problem Solver.",
      ],
      bootText: "Loading system...",
      greeting: "Hi, I'm",
      rolePrefix: "I'm ",
      description:
        "I build web applications, robust systems, and efficient, scalable digital tools.",
      availableProjects: "Available for projects",
      availableHire: "Available for hire",
      contactCta: "Get in touch",
      downloadCv: "Download Resume",
    },
    about: {
      title: "About Me",
      siteTitle:
        "Computer Systems Engineer | Fullstack Developer",
      line1:
        "I'm {name}, a {title}. I specialize in turning complex ideas into intuitive, fast, and scalable digital experiences.",
      line2:
        "My technical approach is complemented by an architectural methodology of complex analysis, ensuring every application matches your vision.",
      currentStack: "My Current Stack",
      techArsenal: "My Tech Arsenal",
    },
    journey: {
      title: "Journey",
      subtitle:
        "My professional path, academic achievements, and collaborative experience.",
      typeLabels: {
        "Trabajo Remoto": "Remote Work",
        Trabajo: "Work",
        "Trabajo Freelance": "Freelance",
        "Trabajo Voluntariado": "Volunteer",
        Voluntariado: "Volunteer",
        "Voluntariado Universitario": "University Volunteer",
        Educación: "Education",
        Competición: "Competition",
        Certificación: "Certification",
      },
      timeline: [
        {
          year: "Jan 2026 — Present",
          title: "Fullstack Developer",
          subtitle: "Software Development Dept., Presidency of San Juan del Río, Querétaro",
          description: "Developed scalable systems with React, Node.js and PostgreSQL. Implemented CI/CD and microservices improving team efficiency by 40%.",
        },
        {
          year: "Oct — Dec 2025",
          title: "Fullstack Developer",
          subtitle: "Xelex Industrial, San Juan del Río, Querétaro",
          description: "Built internal management tools and IT support software. Implemented network and server architecture. Developed an automated payroll control system via email.",
        },
        {
          year: "Sep 2024 — Jun 2025",
          title: "Fullstack Developer",
          subtitle: "IMBERA SJR, San Juan del Río, Querétaro",
          description: "Migrated and eliminated TABLEAU software dependency for KPI analysis. Migrated to strategic dashboards on the international Solkos operational platform.",
        },
        {
          year: "December 14, 2025",
          title: "Computer Systems Engineering",
          subtitle: "ITSJR - Technological Institute of San Juan del Río",
          description: "Academic background focused on software architecture, databases, algorithm analysis, design patterns, and fullstack web development.",
        },
      ],
    },
    projects: {
      title: "More Interesting Projects",
      whatNext: "What's next?",
      workTogether: "Let's work together →",
      sourceCode: "Source Code",
      featuredTitle: "YouMindAG — Context for your AI Coding Tool",
      featuredDesc: `Open-source CLI tool that injects full architecture context into any project in 30 seconds. One line (npx youmindag) and your AI assistant understands the entire structure, dependencies, and project rules.

• +3,000 npm installs
• Plugin with 13 context mechanisms for opencode
• Watch mode, dry-run, and safe uninstall
• Knowledge graph powered by Graphify
• 100% open-source · MIT`,
    },
    contact: {
      label: "Contact",
      title: "Let's",
      titleAccent: "Work Together.",
      description:
        "I'm currently open to new job opportunities and freelance projects. Whether you have a question or just want to say hi, I'll do my best to get back to you soon.",
      contactMe: "Contact Me",
      viewCode: "View Code",
      connect: "Connect",
      namePlaceholder: "e.g. César Bárcenas",
      emailPlaceholder: "email@example.com",
      messagePlaceholder:
        "Tell me about your project, ideas, or question...",
      sending: "Sending...",
      sendMessage: "Send Message",
      successMsg: "Hi, I'd like to connect with you.",
      successReply: "Thanks for reaching out. I'll get back to you soon.",
      sent: "Sent",
      allFieldsRequired: "All fields are required.",
      errorSending: "Error sending message. Please try again.",
    },
    footer: {
      description:
        "Software Developer specialized in creating scalable, clean, and efficient digital solutions from Mexico to the world.",
      navigation: "Navigation",
      currentStatus: "Current Status",
      available: "Available for hire",
      notAvailable: "Not available",
      copyright: "All rights reserved.",
      builtWith: "Built with Next.js and lots of logic.",
    },
  },
};

export function t(locale: string, key: string): string {
  const keys = key.split(".");
  let value: any = translations[locale];
  for (const k of keys) {
    if (value == null) return key;
    value = value[k];
  }
  return value ?? key;
}

export function tObj<T>(locale: string, key: string): T {
  const keys = key.split(".");
  let value: any = translations[locale];
  for (const k of keys) {
    if (value == null) return undefined as T;
    value = value[k];
  }
  return value as T;
}
