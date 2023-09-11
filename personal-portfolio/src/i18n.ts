import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "Projects": "Projects",
            "About Me": "About Me",
            "Contacts": "Contacts",
            "Follow Me": "Follow Me",
            "Bio": `Hi everyone! I'm Andrea, a 29-year-old developer with a
            background in the automotive industry. After three years of
            experience in that field, I've decided to embark on a new
            adventure in the world of web development.
            I've just successfully completed an intensive 6-month Bootcamp,
            which provided me with comprehensive training as a Full
            Stack Web Developer. Now, I'm excited to put my newly
            acquired skills into practice and explore all the
            possibilities that web development has to offer!
            I'm ready to dive into this new challenge and actively
            contribute to exciting projects. If you're interested in
            collaborating or connecting, feel free to reach out!`,
            "Contact Details": "Contact Details",
            "I'm based in": "I'm based in",
            "For job opportunities, please send an email to:": "For job opportunities, please send an email to:",
            "If you wish to discuss technical issues, write to": "If you wish to discuss technical issues, write to",
            "Loading video": "Loading video",
            "Vegarden is a social blogging network focused on promoting veganism and creating a community of people interested in vegan philosophy. This project aims to create a space where users, known as Zenytes, can express themselves, share experiences, and contribute to the vegan community through their personal blogs.": "Vegarden is a social blogging network focused on promoting veganism and creating a community of people interested in vegan philosophy. This project aims to create a space where users, known as Zenytes, can express themselves, share experiences, and contribute to the vegan community through their personal blogs.",
            "A LinkedIn clone that allows you to create, modify, and delete posts, as well as customize your profile.": "A LinkedIn clone that allows you to create, modify, and delete posts, as well as customize your profile.",
            "Crudazon is a demo application that allows you to create, update, and delete products. The Home page displays the available products, and the BackOffice page enables these operations. The application utilizes the Strive API to interact with a server-side database.": "Crudazon is a demo application that allows you to create, update, and delete products. The Home page displays the available products, and the BackOffice page enables these operations. The application utilizes the Strive API to interact with a server-side database.",
            "Epicode Benchmark is a clone application of the benchmark on the Epicode platform for students. In this project, the ability to select the difficulty of the timed quiz has been added. At the end, the result is displayed, indicating whether the student has passed or not.": "Epicode Benchmark is a clone application of the benchmark on the Epicode platform for students. In this project, the ability to select the difficulty of the timed quiz has been added. At the end, the result is displayed, indicating whether the student has passed or not.",
            "Personal Blog is a lightweight and easily customizable application that allows for quick blog creation. In the demo, a blog for a developer was created. The admin can manage articles by creating, updating, and deleting them. Articles support markdown, and there are also dedicated pages for a biography and contact information. The application is in Italian.": "Personal Blog is a lightweight and easily customizable application that allows for quick blog creation. In the demo, a blog for a developer was created. The admin can manage articles by creating, updating, and deleting them. Articles support markdown, and there are also dedicated pages for a biography and contact information. The application is in Italian.",
            "Technologies: ": "Technologies: ",
            "See on GitHub": "See on GitHub",
            "Are you lost?": "Are you lost?"
        }
    },
    it: {
        translation: {
            "Projects": "Progetti",
            "About Me": "Chi Sono",
            "Contacts": "Contatti",
            "Follow Me": "Seguimi",
            "Bio": `Ciao a tutti! Sono Andrea, uno sviluppatore di 29 anni
            con una formazione nell'industria automobilistica.
            Dopo tre anni di esperienza in quel settore, ho deciso di
            intraprendere una nuova avventura nel mondo dello sviluppo web.
            Ho appena completato con successo un Bootcamp intensivo di
            6 mesi, che mi ha fornito una formazione completa come
            sviluppatore web Full Stack. Ora sono entusiasta di mettere
            in pratica le mie nuove competenze ed esplorare tutte le
            possibilità che lo sviluppo web ha da offrire!
            Sono pronto ad affrontare questa nuova sfida e a contribuire
            attivamente a progetti interessanti. Se sei interessato a
            collaborare o a connetterti, non esitare a contattarmi!`,
            "Contact Details": "Dettagli Contatto",
            "I'm based in": "Mi trovo a",
            "For job opportunities, please send an email to": "Per opportunità di lavoro, ti prego di inviare un'email a",
            "If you wish to discuss technical issues, write to": "Se desideri discutere di argomenti tecnici, scrivi a",
            "Loading video": "Caricamento video",
            "Vegarden is a social blogging network focused on promoting veganism and creating a community of people interested in vegan philosophy. This project aims to create a space where users, known as Zenytes, can express themselves, share experiences, and contribute to the vegan community through their personal blogs.": "Vegarden è un social blogging network focalizzato sulla promozione del veganesimo e sulla creazione di una comunità di persone interessate alla filosofia vegana. Questo progetto mira a creare uno spazio in cui gli utenti, chiamati Zenytes, possano esprimersi, condividere esperienze e contribuire alla comunità vegana attraverso i loro blog personali.",
            "LinkedIn Clone is a social networking application that replicates the functionality of LinkedIn. It provides users with the ability to create, modify, and delete posts, as well as customize their profiles. The application utilizes the Strive API to interact with a server-side database.": "LinkedIn Clone è un'applicazione di social networking che replica la funzionalità di LinkedIn. Permette agli utenti di creare, modificare ed eliminare post, nonché personalizzare i loro profili. L'applicazione utilizza l'API di Strive per interagire con un database lato server.",
            "Crudazon is a demo application that allows you to create, update, and delete products. The Home page displays the available products, and the BackOffice page enables these operations. The application utilizes the Strive API to interact with a server-side database.": "Crudazon è un'applicazione demo che consente di creare, aggiornare ed eliminare dei prodotti. La Home mostra i prodotti disponibili e la pagina di BackOffice permette le operazioni. L'applicazione utilizza l'API di Strive per interagire con un server-side database.",
            "Epicode Benchmark is a clone application of the benchmark on the Epicode platform for students. In this project, the ability to select the difficulty of the timed quiz has been added. At the end, the result is displayed, indicating whether the student has passed or not.": "Epicode Benchmark è un'applicazione clone del benchmark sulla piattaforma Epicode per gli studenti. In questo progetto è stata aggiunta la possibilità di selezionare la difficoltà del quiz a tempo. Alla fine viene mostrato il risultato e viene indicato se lo studente è stato promosso o meno.",
            "Personal Blog is a lightweight and easily customizable application that allows for quick blog creation. In the demo a blog for a developer was created. The admin can manage articles by creating, updating, and deleting them. Articles support markdown, and there are also dedicated pages for a biography and contact information. The application is in Italian.": "Personal Blog è un'applicazione leggera e facilmente personalizzabile che consente di creare un blog in modo rapido. Nella demo è stato creato un blog per uno sviluppatore. L'amministratore può gestire gli articoli, creandoli, aggiornandoli ed eliminandoli. Gli articoli supportano il markdown e ci sono anche pagine dedicate alla biografia e ai contatti. L'applicazione è in italiano.",
            "Technologies: ": "Tecnologie: ",
            "See on GitHub": "Vedi su GitHub",
            "Are you lost?": "Ti sei perso?"
        }
    },
    es: {
        translation: {
            "Projects": "Projetos",
            "About Me": "Sobre mi",
            "Contacts": "Contatos",
            "Follow Me": "Sígueme",
            "Bio": `¡Hola a todos! Soy Andrea, un desarrollador de 29 años
            con experiencia en la industria automotriz.
            Después de tres años de experiencia en ese campo, decidí
            embarcarme en una nueva aventura en el mundo del desarrollo web.
            Acabo de completar con éxito un Bootcamp intensivo de 6 meses,
            que me brindó una capacitación integral como desarrollador web Full Stack.
            ¡Ahora estoy emocionado de poner en práctica mis habilidades recién
            adquiridas y explorartodas las posibilidades que el desarrollo web
            tiene para ofrecer! Estoy listo para sumergirme en este nuevo
            desafío y contribuir activamente a proyectos emocionantes.
            Si estás interesado en colaborar o conectarte,
            ¡no dudes en ponerte en contacto!`,
            "Contact Details": "Detalles de contacto",
            "I'm based in": "Estoy en",
            "For job opportunities, please send an email to": "Para oportunidades de trabajo, por favor envíeme un email a",
            "If you wish to discuss technical issues, write to": "Si desea tratar cuestiones técnicas, escriba a",
            "Loading video": "Cargando video",
            "Vegarden is a social blogging network focused on promoting veganism and creating a community of people interested in vegan philosophy. This project aims to create a space where users, known as Zenytes, can express themselves, share experiences, and contribute to the vegan community through their personal blogs.": "Vegarden es una red social de blogs enfocada en promover el veganismo y crear una comunidad de personas interesadas en la filosofía vegana. Este proyecto tiene como objetivo crear un espacio donde los usuarios, conocidos como Zenytes, puedan expresarse, compartir experiencias y contribuir a la comunidad vegana a través de sus blogs personales.",
            "A LinkedIn clone that allows you to create, modify, and delete posts, as well as customize your profile.": "Un clon de LinkedIn que permite crear, modificar y eliminar publicaciones, así como personalizar su perfil.",
            "Crudazon is a demo application that allows you to create, update, and delete products. The Home page displays the available products, and the BackOffice page enables these operations. The application utilizes the Strive API to interact with a server-side database.": "Crudazon es una aplicación de demostración que permite crear, actualizar y eliminar productos. La página de inicio muestra los productos disponibles y la página de BackOffice permite realizar estas operaciones. La aplicación utiliza la API de Strive para interactuar con una base de datos en el lado del servidor.",
            "LinkedIn Clone is a social networking application that replicates the functionality of LinkedIn. It provides users with the ability to create, modify, and delete posts, as well as customize their profiles. The application utilizes the Strive API to interact with a server-side database.": "LinkedIn Clone es una aplicación de redes sociales que replica la funcionalidad de LinkedIn. Proporciona a los usuarios la capacidad de crear, modificar y eliminar publicaciones, así como personalizar sus perfiles. La aplicación utiliza la API de Strive para interactuar con una base de datos en el lado del servidor.",
            "Epicode Benchmark is a clone application of the benchmark on the Epicode platform for students. In this project, the ability to select the difficulty of the timed quiz has been added. At the end, the result is displayed, indicating whether the student has passed or not.": "Epicode Benchmark es una aplicación clon del benchmark en la plataforma Epicode para estudiantes. En este proyecto se ha añadido la posibilidad de seleccionar la dificultad del cuestionario cronometrado. Al final se muestra el resultado y se indica si el estudiante ha aprobado o no.",
            "Personal Blog is a lightweight and easily customizable application that allows for quick blog creation. In the demo a blog for a developer was created. The admin can manage articles by creating, updating, and deleting them. Articles support markdown, and there are also dedicated pages for a biography and contact information. The application is in Italian.": "Personal Blog es una aplicación ligera y fácilmente personalizable que permite crear un blog de forma rápida. En la demostración se creó un blog para un desarrollador. El administrador puede gestionar los artículos creándolos, actualizándolos y eliminándolos. Los artículos admiten markdown y también hay páginas dedicadas a la biografía y la información de contacto. La aplicación está en italiano.",
            "Technologies: ": "Tecnologías: ",
            "See on GitHub": "Ver en GitHub",
            "Are you lost?": "¿Estás perdido?"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;