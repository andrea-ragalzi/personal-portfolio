interface Project {
    title: string;
    videoURL: string;
    description: string;
    repoURL: string;
    technologies: string;
}

const projects: Project[] = [
    {
        title: "Vegarden",
        videoURL: "https://www.youtube.com/embed/ZHgwI0IVvvA",
        repoURL: "https://github.com/andrea-ragalzi/vegarden",
        description: "Vegarden is a social blogging network focused on promoting veganism and creating a community of people interested in vegan philosophy. This project aims to create a space where users, known as Zenytes, can express themselves, share experiences, and contribute to the vegan community through their personal blogs.",
        technologies: "TypeScript, React, Bootstrap, Sass, Java, Spring Boot and PostgreSQL"
    },
    {
        title: "Personal Blog",
        videoURL: "https://www.youtube.com/embed/paMQPpgDbXY",
        description: "Personal Blog is a lightweight and easily customizable application that allows for quick blog creation. In the demo a blog for a developer was created. The admin can manage articles by creating, updating, and deleting them. Articles support markdown, and there are also dedicated pages for a biography and contact information. The application is in Italian.",
        repoURL: "https://github.com/andrea-ragalzi/personal-blog",
        technologies: "HTML, CSS, Bootstrap, Python, Flask and SQLite"
    },
    {
        title: "LinkedIn Clone",
        videoURL: "https://www.youtube.com/embed/dr6h5FhwBF0",
        description: "LinkedIn Clone is a social networking application that replicates the functionality of LinkedIn. It provides users with the ability to create, modify, and delete posts, as well as customize their profiles. The application utilizes the Strive API to interact with a server-side database.",
        repoURL: "https://github.com/andrea-ragalzi/buildWeek3",
        technologies: "TypeScript, React, Bootstrap and Sass"
    },
    {
        title: "Crudazon",
        videoURL: "https://www.youtube.com/embed/k4Bf_elSHGo",
        description: "Crudazon is a demo application that allows you to create, update, and delete products. The Home page displays the available products, and the BackOffice page enables these operations. The application utilizes the Strive API to interact with a server-side database.",
        repoURL: "https://github.com/andrea-ragalzi/epicode/tree/main/week7/project",
        technologies: "HTML, CSS and JavaScript"
    },
    {
        title: "Epicode Benchmark",
        videoURL: "https://www.youtube.com/embed/bbj4i_CbKD0",
        description: "Epicode Benchmark is a clone application of the benchmark on the Epicode platform for students. In this project, the ability to select the difficulty of the timed quiz has been added. At the end, the result is displayed, indicating whether the student has passed or not.",
        repoURL: "https://github.com/andrea-ragalzi/buildWeek1",
        technologies: "HTML, CSS and JavaScript"
    }
];

export default projects;