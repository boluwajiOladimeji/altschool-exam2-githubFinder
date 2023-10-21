import { createContext, useContext, useEffect, useState } from 'react';

function checkTheme() {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;

  const theme = JSON.parse(localStorage.getItem('theme'));

  if (theme === true) {
    return true;
  }

  if (theme === false) {
    return false;
  }

  return prefersDarkMode;
}

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => checkTheme());

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    localStorage.setItem('theme', JSON.stringify(!isDarkTheme));
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    checkTheme();
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Theme Context was used outside of Theme Context Provider');
  }
  return context;
};

export { useThemeContext, ThemeContextProvider };
