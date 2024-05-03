import GitHub from "@/components/icons/GitHub.astro";

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
    "skills.tools": "Herramientas",
    "skills.learn": "Aprendiendo",
    "about.title": "Sobre mí",
    "about.bio": `<p>Me llamo Tomás. Empecé en la programación de forma autodidacta en Youtube. Actualmente estoy <strong> en el ultimo año de mi Tecnicatura Universitaria</strong>.</p><p>Algunos de mis éxitos incluyen <strong>colaborar con ADUS/IPVU para el desarrollo de una App de gestión de viviendas en la Provincia de  <span class='text-sky-400'> Neuquén</span></strong>.</p><p>Como Desarrollador Web, he logrado desarrollar un E-commerce con PHP vanilla desde cero creando asi <strong> <em class="italic"> sistema de Login, compras y su respectivo carrito, cambio de estado de compras, integracion con Symfony Mailer y DomPDF para envio de mails y pdf con su respectivo comprobante.</em></strong> Aprendiendo asi las bases de la Prógramación sin la necesidad de Frameworks.</p>`,
    "footer.rights": "Casi todos los derechos reservados",
    exp: [
      {
        title: "Programador PHP",
        date: "Sept 2022 - Dic 2022",
        company: "Eximo Software",
        description:
          "Como programador PHP, mi enfoque principal era crear la parte front-end y back-end de las aplicaciones. En el front-end, diseñaba y desarrollaba formularios y páginas de usuario. Luego, en el back-end, me encargaba de conectar esos formularios con la lógica de negocio y la base de datos SQL para almacenar y recuperar datos de manera segura.",
      },
    ],
    projects: [
      {
        title: "MusicTime - Tienda onlines de discos de música",
        description:
          "MusicTime es una aplicación web creada desde cero utilizando PHP Vanilla. Ofrece un carrito de compras, gestión de estados, inicio de sesión y operaciones CRUD con una base de datos MySQL.",
        github: "https://github.com/tomassalto/TpFinalSalto",
        image: "/musictime.png",
        tags: ["php"],
      },
      {
        title: "Chat with your PDF",
        description:
          "Chat with Your PDF, está desarrollada utilizando Astro, TypeScript y Svelte. Los usuarios pueden cargar archivos PDF, y la inteligencia artificial integrada de OpenIA lee el contenido. Además, los usuarios pueden hacer preguntas relacionadas con el PDF, y la IA proporciona respuestas relevantes.",
        link: "https://chatpdf-tomassalto.netlify.app/",
        github: "https://github.com/tomassalto/chatPDF",
        image: "/chatpdf.png",
        tags: ["astro", "svelte", "typescript"],
      },
      {
        title: "CursosApp",
        description:
          "CursosApp es una aplicacíon web en donde se simula la inscripción de cursos de programacíon. Es un Crud creado en Laravel y React.js, la base de datos está hecha con MySQL.",
        github: "https://github.com/tomassalto/gestionCursos-laravel-react",
        image: "/cursosapp.png",
        tags: ["laravel", "react", "mysql"],
      },
      {
        title: "Todo App",
        description:
          "Aplicación web de uso diario para crear tareas que tengo que completar durante el día, contiene un filtro para buscarlas dinámicamente.",
        github: "https://github.com/tomassalto/pwa2024",
        image: "/todoapp.png",
        tags: ["react", "tailwindcss"],
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
    "skills.learn": "Learning",
    "skills.tools": "Tools",
    "about.title": "About me",
    "about.bio": `<p>My name is Tomás. I started programming self-taught through Youtube. Currently, I am <strong>in the last year of my University Technical Degree</strong>.</p><p>Some of my achievements include <strong>collaborating with ADUS/IPVU for the development of a housing management App in the Province of <span class='text-sky-400'>Neuquén</span></strong>.</p><p>As a Web Developer, I have successfully developed an E-commerce with vanilla PHP from scratch, thus creating <strong><em class="italic">login system, shopping functionalities including cart, order status change, integration with Symfony Mailer and DomPDF for sending emails and PDFs with respective receipts.</em></strong> Thus learning the foundations of programming without the need for frameworks.</p>`,
    "footer.rights": "Almost all rights reserved",
    exp: [
      {
        title: "PHP Developer",
        date: "Sept 2022 - Dec 2022",
        company: "Eximo Software",
        description:
          "As a PHP programmer, my primary responsibilities included creating both the front-end and back-end of applications. On the front-end, I designed and developed user-friendly forms and pages. Subsequently, on the back-end, I connected these forms to business logic and an SQL database for secure data storage and retrieval.",
      },
    ],
    projects: [
      {
        title: "MusicTime - Ecommerce",
        description:
          "MusicTime is a web application built from scratch using PHP Vanilla. It features a shopping cart, state management, user login, and CRUD operations with a MySQL database.",
        github: "https://github.com/tomassalto/TpFinalSalto",
        image: "/musictime.png",
        tags: ["php"],
      },
      {
        title: "Chat with your PDF",
        description:
          "Chat with Your PDF, is built using Astro, TypeScript, and Svelte. Users can upload PDF files, and the integrated OpenIA artificial intelligence reads the content. Additionally, users can ask questions related to the PDF, and the AI provides relevant answers.",
        link: "https://chatpdf-tomassalto.netlify.app/",
        github: "https://github.com/tomassalto/chatPDF",
        image: "/chatpdf.png",
        tags: ["astro", "svelte", "typescript"],
      },
      {
        title: "CursosApp",
        description:
          "CursosApp is a web application that simulates course registration for programming. It’s a CRUD (Create, Read, Update, Delete) system created using Laravel and React.js, with a MySQL database.",
        github: "https://github.com/tomassalto/gestionCursos-laravel-react",
        image: "/cursosapp.png",
        tags: ["laravel", "react", "mysql"],
      },
      {
        title: "Todo App",
        description:
          "Daily-use web application for creating tasks that I need to complete during the day, with a dynamic search filter.",
        github: "https://github.com/tomassalto/pwa2024",
        image: "/todoapp.png",
        tags: ["react", "tailwindcss"],
      },
    ],
  },
} as const;
