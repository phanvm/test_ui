// ThemeToggler.js

import React, { useEffect, useState } from 'react';

const DarkThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <>
      <div className="switch-box" onClick={toggleTheme} title='Dark/Light Mode'>
        <i className="ri-sun-line"></i>
        <i className="ri-moon-fill"></i>
      </div>
    </>
  );
};

export default DarkThemeToggler;
