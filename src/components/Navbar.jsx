import { h1 } from 'framer-motion/client';
import React, { useState, useEffect } from 'react';

const Navbar = ({present}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Add scroll listener to handle the background transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center"
      >
        {present ? (<h1 className="text-3xl font-extrabold text-indigo-400 hover:text-white transition-transform transform hover:scale-105">
          LegalEdgeAI
        </h1>):<h1></h1>}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors">
            Home
          </a>
          <a href="#features" className="text-gray-400 hover:text-indigo-400 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-400 hover:text-indigo-400 transition-colors">
            How It Works
          </a>
          <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">
            Contact
          </a>
        </nav>
        <button
          className="md:hidden focus:outline-none text-gray-400"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={navbarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          navbarOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <nav className="px-6 py-4 bg-gray-900 text-lg space-y-4">
          <a href="#home" className="block text-gray-400 hover:text-indigo-400 transition-colors">
            Home
          </a>
          <a href="#features" className="block text-gray-400 hover:text-indigo-400 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="block text-gray-400 hover:text-indigo-400 transition-colors">
            How It Works
          </a>
          <a href="#contact" className="block text-gray-400 hover:text-indigo-400 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;