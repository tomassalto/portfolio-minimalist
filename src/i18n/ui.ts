import GitHubIcon from "../components/icons/GitHub.astro";
import AstroIcon from "../components/icons/stack/AstroIcon.astro";
import CSSIcon from "../components/icons/stack/CSS.astro";
import ExpressIcon from "../components/icons/stack/Express.astro";
import GitIcon from "../components/icons/stack/Git.astro";
import HtmlIcon from "../components/icons/stack/Html.astro";
import JavaScriptIcon from "../components/icons/stack/JavaScript.astro";
import LaravelIcon from "../components/icons/stack/Laravel.astro";
import MySQLIcon from "../components/icons/stack/MySQL.astro";
import NextJSIcon from "../components/icons/stack/NextJS.astro";
import NodeJSIcon from "../components/icons/stack/NodeJS.astro";
import NpmIcon from "../components/icons/stack/Npm.astro";
import PHPIcon from "../components/icons/stack/PHP.astro";
import ReactJSIcon from "../components/icons/stack/ReactJS.astro";
import TailwindIcon from "../components/icons/stack/Tailwind.astro";
import TypeScriptIcon from "../components/icons/stack/TypeScript.astro";
import VSCodeIcon from "../components/icons/stack/VSCode.astro";

export const languages = {
  es: "ES",
  en: "US",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "layout.title": "Porfolio de Tomás Salto - Desarrollador y Programador Web",
    "layout.description":
      "Contratá a Tomás para crear tu aplicación web o móvil. Desarrollador Web. Especializado en crear aplicaciones únicas.",
    "nav.home": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.skills": "Tecnologias",
    "nav.contact": "Contacto",
    "hero.badge": "Disponible para trabajar",
    "hero.title": "Hola, soy Tomás",
    "hero.bio":
      "Estudiante de la Tecnicatura Unviersitaria en Desarrollo Web. <strong>Desarrollador y Programador Web</strong> de <span class='text-sky-400'><strong> Neuquén, Argentina.</strong></span> Especializado en el desarrollo de aplicaciones web únicas.",
    "hero.mail": "Contáctame",
    "hero.linkedin": "LinkedIn",
    "exp.title": "Experiencia laboral",
    "projects.title": "Proyectos",
    "skills.title": "Tecnologias",
    "about.title": "Sobre mí",
    "about.bio": `<p>Me llamo Tomás. Empecé en la programación de forma autodidacta en Youtube. Actualmente estoy <strong> en el ultimo año de mi Tecnicatura Universitaria</strong>.</p><p>Algunos de mis éxitos incluyen <strong>colaborar con ADUS/IPVU para el desarrollo de una App de gestión de viviendas en la Provincia de  <span class='text-sky-400'> Neuquén</span></strong>.</p><p>Como Desarrollador Web, he logrado desarrollar un E-commerce con PHP vanilla desde cero creando asi <strong> <em class="italic"> sistema de Login, compras y su respectivo carrito, cambio de estado de compras, integracion con Symfony Mailer y DomPDF para envio de mails y pdf con su respectivo comprobante.</em></strong> Aprendiendo asi las bases de la Prógramación sin la necesidad de Frameworks.</p>`,
    "footer.rights": "Casi todos los derechos reservados",
    exp: [
      {
        title: "Programador PHP",
        date: "Septiembre 2022 - Diciembre 2022",
        company: "Eximo Software",
        description:
          "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
      },
    ],
    projects: [
      {
        title: "SVGL - A beautiful library with SVG logos",
        description:
          "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
        link: "https://svgl.vercel.app/",
        github: "https://github.com/pheralb/svgl",
        image: "../../public/musictime.png",
        tags: ["nextjs", "tailwindcss"],
      },
      {
        title: "AdventJS - Retos de programación con JavaScript y TypeScript",
        description:
          "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
        link: "https://adventjs.dev",
        image: "../../public/musictime.png",
        tags: ["nextjs", "tailwindcss"],
      },
    ],
    skills: [
      {
        frontend: [
          { name: "HTML", icon: HtmlIcon },
          { name: "CSS", icon: CSSIcon },
          { name: "JavaScript", icon: JavaScriptIcon },
          { name: "ReactJS", icon: ReactJSIcon },
          { name: "TailwindCSS", icon: TailwindIcon },
        ],
        backend: [
          { name: "PHP", icon: PHPIcon },
          { name: "NodeJS", icon: NodeJSIcon },
          { name: "Laravel", icon: LaravelIcon },
          { name: "ExpressJS", icon: ExpressIcon },
          { name: "MySQL", icon: MySQLIcon },
          { name: "Next.js", icon: NextJSIcon },
        ],
        learning: [
          { name: "Astro", icon: AstroIcon },
          { name: "TypeScript", icon: TypeScriptIcon },
        ],
        tools: [
          { name: "Git", icon: GitIcon },
          { name: "GitHub", icon: GitHubIcon },
          { name: "VSCode", icon: VSCodeIcon },
          { name: "Npm", icon: NpmIcon },
        ],
      },
    ],
  },
  en: {
    "layout.title": `Tomás's Portfolio - Web Developer and Programmer`,
    "layout.description":
      "Hire Tomás to build your web or mobile application. Web Developer. Specialized in creating unique applications.",
    "nav.home": "Experience",
    "nav.projects": "Projects",
    "nav.about": "About me",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.badge": "Open to work",
    "hero.title": `Hey, I'm Tomás`,
    "hero.bio":
      "Student of the University Technical Degree in Web Development. <strong>Web Developer and Programmer</strong> from <span class='text-sky-400'><strong>Neuquén, Argentina.</strong></span> Specialized in the development of unique web applications.",
    "hero.mail": "Contact me",
    "hero.linkedin": "LinkedIn",
    "exp.title": "Professional Experience",
    "projects.title": "Projects",
    "skills.title": "Skills",
    "about.title": "About me",
    "about.bio": `<p>My name is Tomás. I started programming self-taught through Youtube. Currently, I am <strong>in the last year of my University Technical Degree</strong>.</p><p>Some of my achievements include <strong>collaborating with ADUS/IPVU for the development of a housing management App in the Province of <span class='text-sky-400'>Neuquén</span></strong>.</p><p>As a Web Developer, I have successfully developed an E-commerce with vanilla PHP from scratch, thus creating <strong><em class="italic">login system, shopping functionalities including cart, order status change, integration with Symfony Mailer and DomPDF for sending emails and PDFs with respective receipts.</em></strong> Thus learning the foundations of programming without the need for frameworks.</p>`,
    "footer.rights": "Almost all rights reserved",
    exp: [
      {
        title: "PHP Developer",
        date: "September 2022 - December 2022",
        company: "Eximo Software",
        description:
          "Responsible for the platform, components, and utilities for the creation and development of web applications. Achieved a 30% improvement in software delivery. Implementation of continuous integration and deployment measures with A/B testing across more than 15 teams.",
      },
    ],
    projects: [
      {
        title: "SVGL - A beautiful library with SVG logos",
        description:
          "Library of SVG logos from the most popular brands. +10k visits per month. +2K SVGs downloaded. Created from scratch with Next.js, React, and Tailwind CSS.",
        link: "https://svgl.vercel.app/",
        github: "https://github.com/pheralb/svgl",
        image: "/projects/svgl.webp",
        tags: ["nextjs", "tailwindcss"],
      },
      {
        title:
          "AdventJS - Programming challenges with JavaScript and TypeScript",
        description:
          "Free platform with programming challenges. Over 1 million visits in a month. +50K challenges completed. Created from scratch with Next.js, React, and Tailwind CSS.",
        link: "https://adventjs.dev",
        image: "/projects/adventjs.webp",
        tags: ["nextjs", "tailwindcss"],
      },
    ],
    skills: [
      {
        frontend: [
          { name: "HTML", icon: HtmlIcon },
          { name: "CSS", icon: CSSIcon },
          { name: "JavaScript", icon: JavaScriptIcon },
          { name: "ReactJS", icon: ReactJSIcon },
          { name: "TailwindCSS", icon: TailwindIcon },
        ],
        backend: [
          { name: "PHP", icon: PHPIcon },
          { name: "NodeJS", icon: NodeJSIcon },
          { name: "Laravel", icon: LaravelIcon },
          { name: "ExpressJS", icon: ExpressIcon },
          { name: "MySQL", icon: MySQLIcon },
          { name: "Next.js", icon: NextJSIcon },
        ],
        learning: [
          { name: "Astro", icon: AstroIcon },
          { name: "TypeScript", icon: TypeScriptIcon },
        ],
        tools: [
          { name: "Git", icon: GitIcon },
          { name: "GitHub", icon: GitHubIcon },
          { name: "VSCode", icon: VSCodeIcon },
          { name: "Npm", icon: NpmIcon },
        ],
      },
    ],
  },
} as const;
