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
            <div className="block text-center sm:flex sm:gap-10 mx-auto mb-10 xl:w-3/4">
                <div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center sm:block sm:ps-10">
                    <img src={profileImage} className="rounded-lg w-96" alt="" />
                </div>

                <div className="w-full sm:w-3/4 text-left px-5">
                    <p>{t('Bio')}</p>
                </div>
            </div>
            <div className="mx-auto py-10 border-y-2 border-palette-400 dark:border-palette-800 bg-palette-100 dark:bg-palette-900 pt-10 xl:w-3/4">
                <div className="flex flex-wrap justify-center gap-2 mx-auto">
                    <img src={arduinoSVG} alt="Arduino" className='w-20'/>
                    <img src={bashSVG} alt="Bash" className='w-20'/>
                    <img src={bootstrapSVG} alt="Bootstrap" className='w-20'/>
                    <img src={cSVG} alt="C Language" className='w-20'/>
                    <img src={cssSVG} alt="CSS" className='w-20'/>
                    <img src={flaskSVG} alt="Flask" className='w-20'/>
                    <img src={gitSVG} alt="Git" className='w-20'/>
                    <img src={htmlSVG} alt="HTML" className='w-20'/>
                    <img src={javaSVG} alt="Java" className='w-20'/>
                    <img src={javascriptSVG} alt="JS" className='w-20'/>
                    <img src={linuxSVG} alt="Linux" className='w-20'/>
                    <img src={mysqlSVG} alt="MySQL" className='w-20'/>
                    <img src={postgresqlSVG} alt="PostgreSQL" className='w-20'/>
                    <img src={postmanSVG} alt="Postman" className='w-20'/>
                    <img src={pythonSVG} alt="Python" className='w-20'/>
                    <img src={reactSVG} alt="React" className='w-20'/>
                    <img src={reduxSVG} alt="Redux" className='w-20'/>
                    <img src={raspberrySVG} alt="Raspberry" className='w-20'/>
                    <img src={sassSVG} alt="SASS" className='w-20'/>
                    <img src={springSVG} alt="Spring Boot" className='w-20'/>
                    <img src={sqliteSVG} alt="SQLite" className='w-20'/>
                    <img src={tailwindSVG} alt="TailwindCSS" className='w-20'/>
                    <img src={typescriptSVG} alt="TS" className='w-20'/>
                </div>
            </div>
        </>
    );
};

export default Bio;
