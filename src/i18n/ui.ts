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
    "nav.skills": "Tecnologías",
    "nav.contact": "Contacto",
    "hero.badge": "Disponible para trabajar",
    "hero.title": "Hola, soy Tomás",
    "hero.bio":
      "Técnico en Desarrollo Web. <strong>Desarrollador y Programador Web</strong> de <span class='text-sky-400'><strong> Neuquén, Argentina.</strong></span> Especializado en el desarrollo de aplicaciones web únicas.",
    "hero.mail": "Contáctame",
    "hero.linkedin": "LinkedIn",
    "exp.title": "Experiencia laboral",
    "projects.title": "Proyectos",
    "skills.title": "Tecnologias",
    "skills.tools": "Herramientas",
    "skills.learn": "Aprendiendo",
    "about.title": "Sobre mí",
    "about.bio": `<p>Me llamo Tomás. Hace 4 años me adentré en el mundo de la programación de forma autodidacta en Youtube. Hoy soy <strong> Técnico en Desarrollo Web</strong> graduado en la  <span class='text-sky-400'> Universidad Nacional del Comahue, Argentina.</span></p><p>Algunos de mis éxitos incluyen <strong>colaborar con ADUS/IPVU para el desarrollo de una App de gestión de viviendas en la Provincia de  <span class='text-sky-400'> Neuquén</span></strong>.</p><p>Como Desarrollador Web, he logrado desarrollar un E-commerce con PHP vanilla desde cero creando asi un <strong> <em class="italic"> sistema de Login, compras y su respectivo carrito, cambio de estado de compras, integracion con Symfony Mailer y DomPDF para envio de mails y pdf con su respectivo comprobante.</em></strong> Aprendiendo asi las bases de la Programación sin la necesidad de Frameworks.</p>`,
    "footer.rights": "Casi todos los derechos reservados",
    exp: [
      {
        title: "Desarrollador Front-end",
        date: "May 2024 - Oct 2024",
        company: "Neowyze",
        description:
          "En mi rol de desarrollador front-end, he creado páginas web desde cero en Astro, React y Tailwind. Por otro lado, también me dediqué al proceso de migrar existentes páginas web desde HTML, CSS, TypeScript y JavaScript a Astro y Tailwind para mejorar y optimizar la calidad de código. También me corresponde hacer los cambios que pide el cliente y manejar mis actividades en Jira para mantener un proceso ordenado y eficiente.",
      },
      {
        title: "Desarrollador PHP",
        date: "Sept 2022 - Dic 2022",
        company: "Eximo Software",
        description:
          "Como desarrollador PHP, mi enfoque principal era crear la parte front-end y back-end de las aplicaciones. En el front-end, diseñaba y desarrollaba formularios y páginas de usuario. Luego, en el back-end, me encargaba de conectar esos formularios con la lógica de negocio y la base de datos SQL para almacenar y recuperar datos de manera segura.",
      },
    ],
    projects: [
      {
        title: "Psique-Connect",
        description:
          "Psique-Connect es una plataforma que conecta a pacientes con psicólogos de forma personalizada, permitiendo establecer preferencias para encontrar profesionales adecuados. Además, ofrece a los psicólogos herramientas para gestionar perfiles, consultas y horarios, asegurando opciones accesibles y adaptadas para todos.",
        github: "https://github.com/tomassalto/psique-connect",
        image: "/psique-connect.png",
        tags: ["laravel", "react", "astro", "tailwindcss", "mysql"],
      },
      {
        title: "MusicTime - Tienda onlines de discos de música",
        description:
          "MusicTime es una aplicación web creada desde cero utilizando PHP Vanilla. Ofrece un carrito de compras, gestión de estados, inicio de sesión y operaciones CRUD con una base de datos MySQL.",
        github: "https://github.com/tomassalto/TpFinalSalto",
        image: "/musictime.png",
        tags: ["php", "mysql"],
      },
      {
        title: "Tu Crédito Online",
        description:
          "Tu Crédito Online es un sitio web que ofrece opciones de préstamos para ayudar a los usuarios a cumplir sus necesidades financieras de manera eficiente y confiable.",
        image: "/tucredito.png",
        link: "https://tucredito-online.netlify.app",
        github: "https://github.com/tomassalto/TuCredito-Online",
        tags: ["astro", "react", "tailwindcss"],
      },
      {
        title: "Code",
        description:
          "Code es una plataforma diseñada para la venta de placas decorativas para el hogar, con opciones de personalización y una interfaz amigable.",
        link: "https://code-tomassalto.netlify.app/",
        github: "https://github.com/tomassalto/code",
        image: "/code.png",
        tags: ["react", "nextjs", "tailwindcss"],
      },
      {
        title: "Metalúrgica",
        description:
          "Metalúrgica es un sitio que proporciona servicios y detalles sobre fabricación de estructuras, soldaduras, reparaciones, pulido y acabado para proyectos industriales y particulares.",
        image: "/metalurgica.png",
        tags: ["astro", "react", "tailwindcss"],
      },
      {
        title: "VioFit",
        description:
          "VioFit es un centro de rehabilitación y entrenamiento que ofrece información sobre servicios y reservas a través de una interfaz moderna y accesible.",
        link: "https://viofit.netlify.app/",
        github: "https://github.com/tomassalto/Viofit",
        image: "/viofit.png",
        tags: ["astro", "react", "tailwindcss"],
      },
      {
        title: "Cars Drives",
        description:
          "Cars Drives es una plataforma dedicada a la venta y consulta de información detallada sobre automóviles, diseñada para facilitar la experiencia del usuario.",
        github: "https://github.com/tomassalto/brothers-drive-cars",
        image: "/bdc.png",
        tags: ["astro", "react", "tailwindcss"],
      },
      {
        title: "Spot - ify",
        description:
          "Spot - ify es una aplicación web creada desde cero utilizando Astro, Tailwind, Svelte y React. Ofrece transmisión de música, cambio de canciones, control de volumen y más.",
        link: "https://tomassalto-spotify-clone.netlify.app/",
        github: "https://github.com/tomassalto/spotify-clone",
        image: "/spotify-clone.png",
        tags: ["astro", "tailwindcss", "svelte", "react"],
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
        link: "tomassalto-todoapp.netlify.app",
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
        title: "Front-end Developer",
        date: "May 2024 - Oct 2024",
        company: "Neowyze",
        description:
          "As a front-end developer, I handle various tasks, including creating web pages from scratch using Astro, React, and Tailwind. I also migrate existing pages from HTML, CSS, TypeScript, JavaScript, and to Astro/React and Tailwind, aiming to improve and optimize the code. Additionally, I make changes and enhancements as requested by clients and organize my tasks in Jira to maintain an efficient and orderly workflow.",
      },
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
        title: "Psique-Connect",
        description:
          "Psique-Connect is a platform that connects patients with psychologists through a personalized matching system. It allows users to set preferences to find the most suitable professionals while providing psychologists with tools to manage profiles, appointments, and schedules, ensuring accessible and tailored options for everyone.",
        github: "https://github.com/tomassalto/psique-connect",
        image: "/psique-connect.png",
        tags: ["laravel", "react", "astro", "tailwindcss", "mysql"],
      },
      {
        title: "MusicTime - Ecommerce",
        description:
          "MusicTime is a web application built from scratch using PHP Vanilla. It features a shopping cart, state management, user login, and CRUD operations with a MySQL database.",
        github: "https://github.com/tomassalto/TpFinalSalto",
        image: "/musictime.png",
        tags: ["php", "mysql"],
      },
      {
        title: "Tu Crédito Online",
        description:
          "Tu Crédito Online is a website offering loan options to help users meet their financial needs efficiently and reliably.",
        link: "https://tucredito-online.netlify.app",
        github: "https://github.com/tomassalto/TuCredito-Online",
        image: "/tucredito.png",
        tags: ["astro", "react", "tailwindcss"],
      },
      {
        title: "Code",
        description:
          "Code is a platform designed for selling decorative plaques for homes, with customization options and a user-friendly interface.",
        link: "https://code-tomassalto.netlify.app",
        github: "https://github.com/tomassalto/code",
        image: "/code.png",
        tags: ["react", "nextjs", "tailwindcss"],
      },
      {
        title: "Metalúrgica",
        description:
          "Metalúrgica is a site providing services and details about the manufacturing of structures, welding, repairs, polishing, and finishing for industrial and private projects.",
        link: "https://code-tomassalto.netlify.app",
        github: "https://github.com/tomassalto/code",
        image: "/metalurgica.png",
        tags: ["astro", "react", "tailwindcss"],
      },
      {
        title: "VioFit",
        description:
          "VioFit is a rehabilitation and training center offering information about services and reservations through a modern and accessible interface.",
        link: "https://viofit.netlify.app/",
        github: "https://github.com/tomassalto/viofit",
        image: "/viofit.png",
        tags: ["astro", "react", "tailwindcss"],
      },
      {
        title: "Cars Drives",
        description:
          "Cars Drives is a platform dedicated to the sale and detailed consultation of automobiles, designed to enhance the user experience.",
        github: "https://github.com/tomassalto/brothers-drive-cars",
        image: "/bdc.png",
        tags: ["astro", "react", "tailwindcss"],
      },
      {
        title: "Spot - ify",
        description:
          "Spot - ify is a web application created from scratch using Astro, Tailwind, Svelte, and React. It offers music streaming, song switching, volume control, and more.",
        github: "https://github.com/tomassalto/spotify-clone",
        link: "https://tomassalto-spotify-clone.netlify.app/",
        image: "/spotify-clone.png",
        tags: ["astro", "tailwind", "svelte", "react"],
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
        link: "tomassalto-todoapp.netlify.app",
        github: "https://github.com/tomassalto/pwa2024",
        image: "/todoapp.png",
        tags: ["react", "tailwindcss"],
      },
    ],
  },
} as const;
