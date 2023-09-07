import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ProjectDetailProps {
    title: string;
    videoURL: string;
    description: string;
    technologies: string;
    repoURL: string;
    isActive: boolean;
}

const ProjectDetail = ({
    title,
    videoURL,
    description,
    technologies,
    repoURL,
    isActive,
}: ProjectDetailProps) => {
    const { t } = useTranslation();
    const [videoLoading, setVideoLoading] = useState(true);
    const isMobile = window.innerWidth <= 1280;

    const handleVideoLoad = () => {
        setVideoLoading(false);
    };

    return (
        <div
            className={`flex justify-center items-center text-center ${isActive || isMobile ? "active" : "project-hidden"
                }`}
        >
            <div className="flex flex-col gap-5">
                <h2 className="text-center">{title}</h2>
                <div>
                    {videoLoading && <p>{t("Loading video")}...</p>}
                    <iframe
                        height={videoLoading ? "0" : ""}
                        className="mx-auto w-full sm:w-3/4"
                        src={videoURL}
                        title="YouTube video player"
                        allow="web-share"
                        allowFullScreen
                        onLoad={handleVideoLoad}
                    ></iframe>
                </div>
                <p className="text-left mx-5 md:mx-20 lg:mx-32 xl:mx-44 mb-5 description">
                    {t(description)}
                    <br className="mb-2" />
                    {t("Technologies: ")}
                    <span className="italic">{technologies}</span>
                </p>
                <Link className="text-2xl" to={repoURL} target="_blank">
                    <span className="font-bold">{t("See on GitHub")}</span>
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetail;