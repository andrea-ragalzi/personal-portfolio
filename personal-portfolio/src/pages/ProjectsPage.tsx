import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectDetail from "../components/ProjectDetail";
import projects from "../data/projects.ts";
import { useState } from "react";

const ProjectsPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
        console.log("Enter");
    };

    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <div className="flex flex-col w-full xl:w-3/4">
                <Navbar />
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`border-b-2 border-palette-400 dark:border-palette-800 mb-10 pb-5`}
                        onMouseEnter={() => handleMouseEnter(index)}
                    >
                        <ProjectDetail
                            title={project.title}
                            videoURL={project.videoURL}
                            description={project.description}
                            technologies={project.technologies}
                            repoURL={project.repoURL}
                            isActive={index === activeIndex}
                        />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default ProjectsPage;