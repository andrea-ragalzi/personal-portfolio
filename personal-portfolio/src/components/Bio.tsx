import { useTranslation } from 'react-i18next';
import profileImage from '../assets/profile.jpg';
import arduinoSVG from '../assets/skills/arduino.svg';
import bashSVG from '../assets/skills/bash.svg';
import bootstrapSVG from '../assets/skills/bootstrap.svg';
import cSVG from '../assets/skills/c.svg';
import cssSVG from '../assets/skills/css.svg';
import flaskSVG from '../assets/skills/flask.svg';
import gitSVG from '../assets/skills/git.svg';
import htmlSVG from '../assets/skills/html.svg';
import javaSVG from '../assets/skills/java.svg';
import javascriptSVG from '../assets/skills/javascript.svg';
import linuxSVG from '../assets/skills/linux.svg';
import mysqlSVG from '../assets/skills/mysql.svg';
import postgresqlSVG from '../assets/skills/postgresql.svg';
import postmanSVG from '../assets/skills/postman.svg';
import pythonSVG from '../assets/skills/python.svg';
import reactSVG from '../assets/skills/react.svg';
import reduxSVG from '../assets/skills/redux.svg';
import raspberrySVG from '../assets/skills/raspberry.svg';
import sassSVG from '../assets/skills/sass.svg';
import springSVG from '../assets/skills/spring.svg';
import sqliteSVG from '../assets/skills/sqlite.svg';
import tailwindSVG from '../assets/skills/tailwind.svg';
import typescriptSVG from '../assets/skills/typescript.svg';



const Bio = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="block text-center sm:flex sm:gap-10 mt-10 sm:mt-20 lg:w-2/3 mx-auto mb-10">
                <div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center sm:block sm:ps-10">
                    <img src={profileImage} className="rounded-lg w-96" alt="" />
                </div>

                <div className="w-full sm:w-3/4 text-left px-5">
                    <p>{t('Bio')}</p>
                </div>
            </div>
            <div className="md:w-2/3 xl:w-1/2 mx-auto py-10 border-y-2 border-palette-400 dark:border-palette-800 pt-10">
                <div className="flex flex-wrap justify-center gap-2 mx-auto">
                    <img src={arduinoSVG} alt="Python" className='w-20'/>
                    <img src={bashSVG} alt="Python" className='w-20'/>
                    <img src={bootstrapSVG} alt="Python" className='w-20'/>
                    <img src={cSVG} alt="Python" className='w-20'/>
                    <img src={cssSVG} alt="Python" className='w-20'/>
                    <img src={flaskSVG} alt="Python" className='w-20'/>
                    <img src={gitSVG} alt="Python" className='w-20'/>
                    <img src={htmlSVG} alt="Python" className='w-20'/>
                    <img src={javaSVG} alt="Python" className='w-20'/>
                    <img src={javascriptSVG} alt="Python" className='w-20'/>
                    <img src={linuxSVG} alt="Python" className='w-20'/>
                    <img src={mysqlSVG} alt="Python" className='w-20'/>
                    <img src={postgresqlSVG} alt="Python" className='w-20'/>
                    <img src={postmanSVG} alt="Python" className='w-20'/>
                    <img src={pythonSVG} alt="Python" className='w-20'/>
                    <img src={reactSVG} alt="Python" className='w-20'/>
                    <img src={reduxSVG} alt="Python" className='w-20'/>
                    <img src={raspberrySVG} alt="Python" className='w-20'/>
                    <img src={sassSVG} alt="Python" className='w-20'/>
                    <img src={springSVG} alt="Python" className='w-20'/>
                    <img src={sqliteSVG} alt="Python" className='w-20'/>
                    <img src={tailwindSVG} alt="Python" className='w-20'/>
                    <img src={typescriptSVG} alt="Python" className='w-20'/>
                </div>
            </div>
        </>
    );
};

export default Bio;
