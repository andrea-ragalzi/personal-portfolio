import { SetStateAction, useState } from 'react';
import { MenuOutline, CloseOutline, SunnyOutline, MoonOutline } from 'react-ionicons';
import Dropdown from 'react-dropdown';
import { Accordion, AccordionItem } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../hooks/useThemeSwitcher';
import { LANGUAGES } from '../constants';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [language, setLanguage] = useState('🏴󠁧󠁢󠁥󠁮󠁧󠁿');
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [theme, setTheme] = useThemeSwitcher();
  const { i18n, t } = useTranslation();


  const handleLanguageChange = (selectedOption: { value: SetStateAction<string> }) => {
    setLanguage(selectedOption.value);
    i18n.changeLanguage(selectedOption.value as string);
  };

  const handleThemeChange = () => {
    setTheme((prevTheme: string) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };


  const handleAccordionToggle = () => {
    setIsAccordionOpen(prevState => !prevState);
  };

  return (
    <nav className={isAccordionOpen ? 'expand-nav' : ''}>
      <div className="mx-auto px-4 flex justify-between">
        {/* Logo */}
        <div className="flex">
          <Link to="/"><img src="/public/logo.png" alt="Logo" className="" /></Link>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/projects"><p>{t("Projects")}</p></Link>
          </li>
          <li>
            <p>
              <Link to="/about"><p>{t("About Me")}</p></Link>
            </p>
          </li>
          <li>
            <p>
              <Link to="/contacts"><p>{t("Contacts")}</p></Link>
            </p>
          </li>
        </ul>

        <div className='flex '>
          <div onClick={handleThemeChange}>
            {theme === 'light' ? <SunnyOutline
              height={'35px'}
              width={'35px'}
            /> : <MoonOutline
              height={'35px'}
              width={'35px'}
            />}
          </div>

          <div className='text-3xl z-50'>
            <Dropdown
              options={LANGUAGES.map(({ label, code }) => ({ label, value: code }))}
              onChange={handleLanguageChange}
              value={i18n.language}
              controlClassName="dropdown-menu no-arrow"
            />
          </div>

        </div>

        <div className='md:hidden'>
          {isAccordionOpen ? (
            <CloseOutline
              onClick={handleAccordionToggle}
              height={'35px'}
              width={'35px'} />
          ) : (
            <MenuOutline
              height={'35px'}
              width={'35px'}
              onClick={handleAccordionToggle}
            />
          )}
        </div>
      </div>
      {isAccordionOpen && (
        <div>
          <Accordion className='flex-col justify-center items-center'>
            <AccordionItem title="Projects">
              <Link to="/progects"><p>Projects</p></Link>
            </AccordionItem>
            <AccordionItem title="AboutMe">
              <Link to="/about"><p>About Me</p></Link>
            </AccordionItem>
            <AccordionItem title="Contacts">
              <Link to="/contacts"><p>Contacts</p></Link>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
