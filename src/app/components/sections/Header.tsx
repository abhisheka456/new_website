// components/sections/Header.tsx
import DarkModeToggle from '../DarkModeToggle';

const Header = ({ darkMode, toggleDarkMode }: { 
  darkMode: boolean; 
  toggleDarkMode: () => void;
}) => (
  <header className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Dr. Jane Smith
      </h1>
      <p className="text-lg md:text-xl mt-1 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        Assistant Professor of Computer Science
      </p>
    </div>
    
    <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
  </header>
);

export default Header;