export const languages = {
  es: "ES",
  en: "EN",
} as const;

export const defaultLang = "es";

export type Language = keyof typeof languages;

export const ui = {
  es: {
    "layout.title": "Tomás Salto | Portfolio de Desarrollador Web",
    "layout.description":
      "Portfolio profesional de Tomás Salto, desarrollador Front-end, PHP/Laravel y Full Stack con proyectos reales, foco en producto y experiencia construyendo aplicaciones web.",
    "nav.experience": "Experiencia",
    "nav.featured": "Destacados",
    "nav.projects": "Repositorios",
    "nav.about": "Sobre mí",
    "nav.skills": "Stack",
    "nav.contact": "Contacto",
    "nav.cv": "Descargar CV",
    "theme.toggle": "Cambiar tema",
    "hero.badge": "Disponible para entrevistas",
    "hero.kicker": "Portfolio profesional",
    "hero.title": "Desarrollador web orientado a producto, performance y ejecución.",
    "hero.summary":
      "Construyo interfaces claras, herramientas internas y aplicaciones full stack con Astro, React, PHP, Laravel, MySQL y APIs, con foco en mantenibilidad y entrega real.",
    "hero.location": "Neuquén, Argentina",
    "hero.primary": "Ver proyectos destacados",
    "hero.secondary": "Descargar CV",
    "hero.email": "Email",
    "hero.github": "GitHub",
    "hero.linkedin": "LinkedIn",
    "hero.metricYears": "4+ años programando de forma activa",
    "hero.metricProjects": "Proyectos reales con deploy y código público",
    "hero.metricRoles": "Perfil Front-end, PHP/Laravel y Full Stack",
    "featured.title": "Proyectos destacados",
    "featured.copy":
      "Selección curada para mostrar mejor criterio técnico, producto y amplitud de stack.",
    "projects.title": "Repositorios recientes",
    "projects.copy":
      "Integración build-time con GitHub para mantener el portfolio actualizado sin carga manual repositorio por repositorio.",
    "projects.filterAll": "Todos",
    "projects.updated": "Última actualización",
    "projects.updatedUnavailable": "No disponible",
    "projects.summary": "Resumen",
    "projects.stack": "Tecnologías",
    "projects.whatItShows": "Qué demuestra",
    "projects.empty": "No hay proyectos para ese filtro todavía.",
    "projects.code": "GitHub",
    "projects.deploy": "Deploy",
    "projects.featuredBadge": "Destacado",
    "projects.viewAll": "Ver todos los proyectos en GitHub",
    "exp.title": "Experiencia profesional",
    "about.title": "Sobre mí",
    "about.copy":
      "<p>Soy técnico en desarrollo web y llevo varios años construyendo proyectos propios, sitios para clientes y aplicaciones con lógica real de negocio. Mi foco no está en acumular tecnologías, sino en resolver problemas con una base sólida de frontend, backend y despliegue.</p><p>Tuve experiencia profesional creando interfaces en Astro, React y Tailwind, migrando sitios existentes y aplicando cambios de cliente con criterio de mantenimiento. También trabajé con PHP y SQL para conectar formularios, lógica de negocio y persistencia.</p><p>Hoy busco oportunidades donde pueda aportar velocidad, criterio y capacidad de ejecución como Front-end, PHP/Laravel o Full Stack Developer.</p>",
    "skills.title": "Stack y herramientas",
    "skills.tools": "Herramientas",
    "skills.learn": "Actualmente profundizando",
    "footer.copy":
      "Portfolio generado con Astro, Tailwind y datos de GitHub en build time.",
    exp: [
      {
        title: "Desarrollador Front-end",
        date: "Mayo 2024 - Octubre 2024",
        company: "Neowyze",
        description:
          "Desarrollo de sitios y landings en Astro, React y Tailwind; migración de páginas existentes desde HTML, CSS y JavaScript; mantenimiento orientado a calidad de código, performance y requerimientos de cliente.",
      },
      {
        title: "Desarrollador PHP",
        date: "Septiembre 2022 - Diciembre 2022",
        company: "Eximo Software",
        description:
          "Implementación de formularios, vistas y conexiones con lógica de negocio y base de datos SQL. Trabajo sobre frontend y backend con foco en flujos administrativos y persistencia segura.",
      },
    ],
  },
  en: {
    "layout.title": "Tomás Salto | Web Developer Portfolio",
    "layout.description":
      "Professional portfolio of Tomás Salto, a Front-end, PHP/Laravel, and Full Stack developer with real projects, product focus, and hands-on experience building web applications.",
    "nav.experience": "Experience",
    "nav.featured": "Featured",
    "nav.projects": "Repositories",
    "nav.about": "About",
    "nav.skills": "Stack",
    "nav.contact": "Contact",
    "nav.cv": "Download CV",
    "theme.toggle": "Toggle theme",
    "hero.badge": "Open to work",
    "hero.kicker": "Professional portfolio",
    "hero.title": "Web developer focused on product, performance, and practical delivery.",
    "hero.summary":
      "I build clear interfaces, internal tools, and maintainable full-stack applications with Astro, React, PHP, Laravel, MySQL, and APIs.",
    "hero.location": "Neuquén, Argentina",
    "hero.primary": "See featured projects",
    "hero.secondary": "Download CV",
    "hero.email": "Email",
    "hero.github": "GitHub",
    "hero.linkedin": "LinkedIn",
    "hero.metricYears": "4+ years coding consistently",
    "hero.metricProjects": "Real projects with deploys and public code",
    "hero.metricRoles": "Front-end, PHP/Laravel, and Full Stack profile",
    "featured.title": "Featured projects",
    "featured.copy":
      "A curated selection that best represents technical range, product thinking, and stack breadth.",
    "projects.title": "Recent repositories",
    "projects.copy":
      "Build-time GitHub integration keeps the portfolio updated without manually editing every repository card.",
    "projects.filterAll": "All",
    "projects.updated": "Last updated",
    "projects.updatedUnavailable": "Unavailable",
    "projects.summary": "Summary",
    "projects.stack": "Technologies",
    "projects.whatItShows": "What it shows",
    "projects.empty": "There are no projects for that filter yet.",
    "projects.code": "GitHub",
    "projects.deploy": "Deploy",
    "projects.featuredBadge": "Featured",
    "projects.viewAll": "View all projects on GitHub",
    "exp.title": "Professional experience",
    "about.title": "About me",
    "about.copy":
      "<p>I am a web development graduate who has spent the last several years building personal products, client-facing sites, and applications with real business logic. My goal is not to collect technologies, but to solve problems with a solid frontend, backend, and deployment foundation.</p><p>I gained professional experience building interfaces with Astro, React, and Tailwind, migrating legacy pages, and shipping client-requested changes with maintainability in mind. I also worked with PHP and SQL to connect forms, business logic, and persistence.</p><p>I am currently looking for roles where I can contribute speed, judgment, and execution as a Front-end, PHP/Laravel, or Full Stack Developer.</p>",
    "skills.title": "Stack and tools",
    "skills.tools": "Tools",
    "skills.learn": "Currently deepening",
    "footer.copy":
      "Portfolio powered by Astro, Tailwind, and build-time GitHub data.",
    exp: [
      {
        title: "Front-end Developer",
        date: "May 2024 - October 2024",
        company: "Neowyze",
        description:
          "Built websites and landing pages with Astro, React, and Tailwind; migrated existing pages from HTML, CSS, and JavaScript; and handled client changes with a focus on code quality, performance, and maintainability.",
      },
      {
        title: "PHP Developer",
        date: "September 2022 - December 2022",
        company: "Eximo Software",
        description:
          "Implemented forms, views, and connections between business logic and SQL databases. Worked across frontend and backend with a focus on admin workflows and secure persistence.",
      },
    ],
  },
} as const;
