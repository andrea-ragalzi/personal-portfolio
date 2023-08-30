import { useTranslation } from "react-i18next";
import { LogoGithub, LogoLinkedin, LogoTwitter } from "react-ionicons";

const socialLinks = [
    {
        id: 1,
        icon: <LogoGithub />,
        url: 'https://github.com/andrea-ragalzi',
    },
    {
        id: 2,
        icon: <LogoTwitter />,
        url: 'https://twitter.com/andrea_ragalzi',
    },
    {
        id: 3,
        icon: <LogoLinkedin />,
        url: 'https://www.linkedin.com/in/andrea-ragalzi',
    }
];

const AppFooter = () => {
    const { t } = useTranslation();

    return (
            <footer className="mt-10 mb-10 sm:mb-0">
                <div className="flex flex-col justify-center items-center sm:mb-28">
                    <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
                        {t("Follow Me")}
                    </p>
                    <ul className="flex gap-4 sm:gap-8 mb-10">
                        {socialLinks.map((link) => (
                            <a
                                href={link.url}
                                target="__blank"
                                key={link.id}
                                className="text-palette-400 hover:text-palette-500 dark:text-palette-400 dark:hover:palette-400 cursor-pointer rounded-lg bg-palette-200 dark:bg-ternary-dark hover:bg-palette-400 shadow-sm p-4 duration-300"
                            >
                                <i>
                                    {link.icon}
                                </i>
                            </a>
                        ))}
                    </ul>
                     <p className="text-palette-900 dark:text-palette-200">&copy; {new Date().getFullYear()} Andrea Ragalzi</p>
                </div>
            </footer>
    );
};

export default AppFooter;