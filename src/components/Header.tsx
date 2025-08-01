'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#parcours', label: 'Parcours' },
    { href: '#alternance', label: 'Professionnel' },
    { href: '#formations', label: 'Formations' },
    { href: '#projets', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm border-b border-gray-200 dark:border-gray-700' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Link */}
          <div className="flex items-center space-x-3">
            <Link 
              href="#accueil"
              className={`font-semibold transition-colors duration-300 hover:opacity-80 ${
                isScrolled 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-white'
              }`}
            >
              Dan LAINE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isScrolled 
                    ? 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-200 ${
              isScrolled 
                ? 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white' 
                : 'text-white/90 hover:text-white'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-200 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'
              }`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-200 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-200 ${
                isMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className={`py-4 space-y-2 border-t transition-colors duration-300 ${
            isScrolled 
              ? 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700' 
              : 'bg-white/95 backdrop-blur-sm border-white/20'
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800' 
                    : 'text-gray-900 hover:text-gray-700 hover:bg-white/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
} 