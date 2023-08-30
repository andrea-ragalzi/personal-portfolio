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
            "I'm based in" : "I'm based in",
            "For job opportunities, please send an email to:" : "For job opportunities, please send an email to:",
            "If you wish to discuss technical issues, write to" : "If you wish to discuss technical issues, write to",
        }
    },
    it: {
        translation: {
            "Projects": "Progetti",
            "About Me": "Chi Sono",
            "Contacts": "Contatti",
            "Follow Me": "Seguimi",
            "Bio": `Ciao a tutti! Sono Andrea, un sviluppatore di 29 anni
            con una formazione nell'industria automobilistica.
            Dopo tre anni di esperienza in quel settore, ho deciso di
            intraprendere una nuova avventura nel mondo dello sviluppo web.
            Ho appena completato con successo un Bootcamp intensivo di
            6 mesi, che mi ha fornito una formazione completa come
            sviluppatore web Full Stack. Ora sono entusiasta di mettere
            in pratica le mie nuove competenze ed esplorare tutte le
            possibilità che lo sviluppo web ha da offrire!
            Sono pronto ad affrontare questa nuova sfida e contribuire
            attivamente a progetti interessanti. Se sei interessato a
            collaborare o connetterti, non esitare a contattarmi!`,
            "Contact Details": "Dettagli Contatto",
            "I'm based in": "Mi trovo a",
            "For job opportunities, please send an email to": "Per opportunità di lavoro, ti prego di inviare un'email a",
            "If you wish to discuss technical issues, write to": "Se desideri discutere di argomenti tecnici, scrivi a",
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
            "If you wish to discuss technical issues, write to": "Si desea tratar cuestiones técnicas, escriba a"
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