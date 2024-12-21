import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Mode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is stored in localStorage
    const storedMode = localStorage.getItem('dark-mode');
    if (storedMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark'); // Apply dark mode class to the document
    } else {
      document.documentElement.classList.remove('dark'); // Ensure it's removed if not in dark mode
    }
  }, []);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('dark-mode', newMode); // Save the new mode to localStorage

    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleMode}
      className="p-2 text-lg rounded-md transition-colors"
      title="Toggle Dark Mode"
    >
      {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
    </button>
  );
};

export default Mode;
