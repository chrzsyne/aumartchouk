'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1a202c]/95 dark:bg-[#1a202c]/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
            aria-label="Go to home"
          >
            Aurèle Martchouk
          </button>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-zinc-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-zinc-700">
            <div className="flex flex-col gap-4 pt-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-zinc-300 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-zinc-300 hover:text-white transition-colors text-left"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-zinc-300 hover:text-white transition-colors text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-zinc-300 hover:text-white transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-zinc-300 hover:text-white transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-zinc-300 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

