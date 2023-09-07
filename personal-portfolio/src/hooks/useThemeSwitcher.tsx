import { useEffect, useState } from 'react';

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem('theme');
		return savedTheme || LIGHT_THEME;
	});

	const activeTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(activeTheme);
		root.classList.add(theme);

		localStorage.setItem('theme', theme);
	}, [theme, activeTheme]);

	return [activeTheme, setTheme];
};

export default useThemeSwitcher;
