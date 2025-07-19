
'use client';

import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Check local storage for dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode functionality
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('dark-mode', String(newMode));
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="bg-indigo-600 w-full p-6 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to My Academic Homepage</h1>
        <p className="mt-2 text-lg">Assistant Professor | Researcher | Educator</p>
      </header>

      <main className="flex flex-col items-center py-10">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-800 text-white px-4 py-2 mb-4 rounded focus:outline-none transition duration-300 transform hover:bg-gray-700"
        >
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 max-w-xl text-center text-gray-700 dark:text-gray-300">
          I'm an assistant professor, passionate about teaching and research in my field. On this website, you'll find information about my projects, publications, and how to get in touch.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="font-semibold text-xl">Research Interests</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Explore my interests in this space.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="font-semibold text-xl">Publications</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Read about my contributions to the field.</p>
          </div>
        </div>
      </main>

      <footer className="mt-10 p-4 border-t border-gray-200 dark:border-gray-700 text-center">
        <p className="text-gray-600 dark:text-gray-400">&copy; 2023 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
