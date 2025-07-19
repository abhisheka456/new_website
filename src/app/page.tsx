// app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Header from './components/sections/Header';
import About from './components/sections/About';
import Research from './components/sections/Research';
import Publications from './components/sections/Publications';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialMode = savedMode !== null ? savedMode === 'true' : systemPrefersDark;
    
    setDarkMode(initialMode);
    document.documentElement.classList.toggle('dark', initialMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('dark-mode', String(newMode));
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <div className="min-h-screen">
      {/* Floating Elements */}
      <div className="fixed top-20 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-30 animate-pulse blur-xl -z-10"></div>
      <div className="fixed bottom-40 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 opacity-30 animate-ping blur-xl -z-10"></div>
      <div className="fixed top-1/3 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 opacity-40 animate-pulse blur-xl -z-10"></div>
      
      <div className="container mx-auto px-4 py-8">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <div className="space-y-16 mt-12">
          <About />
          <Research />
          <Publications />
          <Contact />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}