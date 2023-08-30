import { useTranslation } from "react-i18next";
import { MailOutline } from "react-ionicons";

const Contacts = () => {
    const { t } = useTranslation();

    return (
        <div className="md:w-1/2 mx-auto border-b-2 border-palette-400 dark:border-palette-800 pb-10">
            <div className="flex flex-col justify-center items-center gap-10 text-center">
                <h2 className="text-center">{t('Contact Details')}</h2>
                <div>
                    <p>{t("I'm based in")}:</p>
                    <a href="https://www.google.com/maps/place/Novi+Ligure" target="_blank">
                        <p>Novi Ligure (AL), Italia</p>
                    </a>
                </div>
                <div>
                    <p>{t("For job opportunities, please send an email to")}:</p>
                    <div className="flex justify-center items-center gap-2">
                        <MailOutline></MailOutline>
                        <a href="mailto:andrea.ragalzi.job@gmail.com">
                            <p>andrea.ragalzi.job@gmail.com</p>
                        </a>
                    </div>
                </div>
                <div>
                    <p>{t("If you wish to discuss technical issues, write to")}:</p>
                    <a href="mailto:andrea.ragalzi.code@gmail.com">
                        <p>andrea.ragalzi.code@gmail.com</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
