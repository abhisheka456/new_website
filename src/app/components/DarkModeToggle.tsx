// components/DarkModeToggle.tsx
const DarkModeToggle = ({ darkMode, toggleDarkMode }: { 
  darkMode: boolean; 
  toggleDarkMode: () => void;
}) => (
  <button
    onClick={toggleDarkMode}
    className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-105 transition-transform"
    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    {darkMode ? (
      <div className="h-8 w-8 bg-yellow-400 rounded-full"></div>
    ) : (
      <div className="h-8 w-8 bg-indigo-600 rounded-full"></div>
    )}
  </button>
);

export default DarkModeToggle;