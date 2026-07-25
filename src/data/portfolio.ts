import type { FeaturedProjectConfig, ProjectCategory } from "@/types";

export const categoryLabels: Record<
  ProjectCategory,
  { es: string; en: string }
> = {
  react: { es: "React", en: "React" },
  laravel: { es: "Laravel", en: "Laravel" },
  php: { es: "PHP", en: "PHP" },
  "javascript-typescript": {
    es: "JavaScript / TypeScript",
    en: "JavaScript / TypeScript",
  },
  astro: { es: "Astro", en: "Astro" },
  "full-stack": { es: "Full Stack", en: "Full Stack" },
};

// Add `demoUrl` to a featured item to show the Deploy button in featured cards.
export const featuredProjects: FeaturedProjectConfig[] = [
  {
    repo: "pallet-control",
    nameOverride: "Pallet Control",
    featured: true,
    order: 1,
    demoUrl: "https://pallet-control.onrender.com/",
    categories: ["laravel", "php", "full-stack"],
    image: "/featuredProjects/pallet-control.png",
    technologies: ["Laravel", "PHP", "MySQL", "APIs"],
    summaryOverride: {
      es: "Muestra trabajo sobre logica de negocio real, trazabilidad operativa y un backend pensado para uso interno serio.",
      en: "Shows real business-logic work, operational traceability, and a backend designed for serious internal use.",
    },
    descriptionOverride: {
      es: "Aplicacion full stack para control operativo y gestion de procesos. Sirve para demostrar que puedo trabajar mas alla de una interfaz prolija y resolver software cercano a negocio real.",
      en: "Full-stack application for operational control and process management. It shows that I can go beyond polished interfaces and solve software closer to real business operations.",
    },
  },
  {
    repo: "mi-cole-nqn",
    nameOverride: "MiColeNQN",
    featured: true,
    order: 2,
    demoUrl: "https://mi-cole-nqn.onrender.com/",
    categories: ["react", "javascript-typescript", "full-stack"],
    image: "/featuredProjects/mi-cole-nqn.png",
    technologies: ["React", "TypeScript", "APIs"],
    summaryOverride: {
      es: "Refuerza senal de producto, UX y organizacion de frontend en una base tecnica mas actual.",
      en: "Strengthens the product, UX, and frontend organization signal on a more current technical base.",
    },
    descriptionOverride: {
      es: "Aplicacion moderna con foco en experiencia de usuario, estructura de interfaz y decisiones de frontend mas maduras que proyectos anteriores.",
      en: "Modern application focused on user experience, interface structure, and more mature frontend decisions than earlier projects.",
    },
  },
  {
    repo: "MangaVault",
    nameOverride: "MangaVault",
    featured: true,
    order: 3,
    demoUrl: "https://manga-vault-plum.vercel.app/",
    categories: ["react", "javascript-typescript", "full-stack"],
    image: "/featuredProjects/mangaVault.png",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "Ollama",
    ],
    summaryOverride: {
      es: "Muestra arquitectura full stack real, modelado de datos propio, pipeline de analisis y una base extensible mas alla del consumo de APIs.",
      en: "Shows real full-stack architecture, custom data modeling, an analysis pipeline, and an extensible base beyond simple API consumption.",
    },
    descriptionOverride: {
      es: "Aplicacion full stack para gestionar una biblioteca local de manga y comics con reader web, backend propio y pipeline OCR/LLM. Destaca por su arquitectura, servido local de assets y separacion entre demo publica segura y uso privado.",
      en: "Full-stack application for managing a local manga and comics library with a web reader, custom backend, and OCR/LLM pipeline. It stands out for its architecture, local asset serving, and the separation between a safe public demo and private personal use.",
    },
  },
  {
    repo: "commitgpt",
    nameOverride: "CommitGPT",
    featured: true,
    order: 4,
    categories: ["javascript-typescript"],
    image: "/featuredProjects/commitgpt.png",
    technologies: ["JavaScript", "Node.js", "CLI", "Git"],
    summaryOverride: {
      es: "Demuestra interes por tooling, automatizacion y mejora del flujo de trabajo del desarrollador.",
      en: "Shows genuine interest in tooling, automation, and improving developer workflow.",
    },
    descriptionOverride: {
      es: "Herramienta utilitaria enfocada en productividad y DX. Es valiosa porque muestra criterio practico para mejorar procesos, no solo construir interfaces.",
      en: "Utility project focused on productivity and DX. It is valuable because it shows practical judgment around improving processes, not only building interfaces.",
    },
  },
  {
    repo: "psique-connect",
    nameOverride: "Psique Connect",
    featured: true,
    order: 5,
    categories: ["laravel", "react", "astro", "full-stack"],
    image: "/psique-connect.png",
    technologies: ["Laravel", "React", "Astro", "Tailwind CSS", "MySQL"],
    summaryOverride: {
      es: "Sirve como referencia de producto completo con frontend, backend, matching, perfiles y flujos reales.",
      en: "Works as a complete product reference with frontend, backend, matching, profiles, and real user flows.",
    },
    descriptionOverride: {
      es: "Proyecto mas integral para mostrar combinacion de frontend, backend y modelado de funcionalidades reales dentro de una experiencia de producto mas amplia.",
      en: "More complete product used to show the combination of frontend, backend, and real feature modeling inside a broader product experience.",
    },
  },
];

type RepoOverride = {
  demoUrl?: string;
  technologies?: string[];
  categories?: ProjectCategory[];
};

// Add `demoUrl` here when a repository needs a manual deploy URL override.
export const repoOverrides: Record<string, RepoOverride> = {
  "TuCredito-Online": {
    demoUrl: "https://tomassaltodev.netlify.app/",
    technologies: ["Astro", "React", "Tailwind CSS"],
    categories: ["astro", "react", "javascript-typescript"],
  },
  pwa2024: {
    demoUrl: "https://tomassalto-todoapp.netlify.app/",
    technologies: ["React", "Tailwind CSS"],
    categories: ["react", "javascript-typescript"],
  },
  "sistema-gestion-tareas-frontend": {
    categories: ["react", "javascript-typescript"],
  },
  "gestion-tareas-backend": {
    categories: ["php", "full-stack"],
  },
  "saas-inventory": {
    categories: ["php", "laravel", "full-stack"],
  },
  "mi-cole-nqn": {
    categories: ["react", "javascript-typescript", "full-stack"],
    technologies: ["React", "TypeScript", "APIs"],
  },
  MangaVault: {
    categories: ["react", "javascript-typescript", "full-stack"],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "Ollama",
    ],
  },
  commitgpt: {
    categories: ["javascript-typescript"],
    technologies: ["JavaScript", "Node.js", "CLI", "Git"],
  },
  "pallet-control": {
    categories: ["laravel", "php", "full-stack"],
    technologies: ["Laravel", "PHP", "MySQL", "APIs"],
  },
  "psique-connect": {
    categories: ["laravel", "react", "astro", "full-stack"],
    technologies: ["Laravel", "React", "Astro", "Tailwind CSS", "MySQL"],
  },
};
