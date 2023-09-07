import draw from './../assets/draw.svg';
import cv_pdf_eng from './../assets/pdf/CV_RAGALZI_EN_230821.pdf';
import cv_pdf_ita from './../assets/pdf/CV_RAGALZI_IT_230821.pdf';
import cv_pdf_esp from './../assets/pdf/CV_RAGALZI_ES_230821.pdf';
import { useTranslation } from 'react-i18next';

const Banner = () => {
    const { i18n } = useTranslation();

    const handleResumeDownload = () => {
        let selectedResumePDF = "";

        if (i18n.language === "en") {
            selectedResumePDF = cv_pdf_eng;
        } else if (i18n.language === "it") {
            selectedResumePDF = cv_pdf_ita;
        } else if (i18n.language === "es") {
            selectedResumePDF = cv_pdf_esp;
        }

        const a = document.createElement('a');
        a.href = selectedResumePDF;
        a.download = `CV_RAGALZI_${i18n.language.toUpperCase()}_230821.pdf`;
        a.click();
    };

    return (
        <div className="flex flex-col sm:justify-evenly items-center sm:flex-row mt-12">
            <div className="mb-10 sm:order-1 flex flex-col justify-center items-center">
                <h2 className="mb-2">Andrea Ragalzi</h2>
                <p className="mb-14">software & web developer</p>
                <div className='flex flex-col mb-14 gap-5'>
                    <button onClick={handleResumeDownload}>
                        CV
                    </button>
                </div>
            </div>
            <div className="mb-10 sm:order-2 sm:w-2/5 px-5">
                <img src={draw} alt="Hero SVG" />
            </div>
        </div>
    );
};

export default Banner;
