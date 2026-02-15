'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <h1 className={`font-display text-3xl lg:text-4xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-moss-800' : 'text-white'
            } group-hover:text-moss-600`}>
              Yardie
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className={`text-sm font-medium tracking-wide transition-colors hover:text-moss-600 ${
                isScrolled ? 'text-stone-700' : 'text-white/90'
              }`}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className={`text-sm font-medium tracking-wide transition-colors hover:text-moss-600 ${
                isScrolled ? 'text-stone-700' : 'text-white/90'
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              className={`text-sm font-medium tracking-wide transition-colors hover:text-moss-600 ${
                isScrolled ? 'text-stone-700' : 'text-white/90'
              }`}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="bg-moss-700 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-moss-800 transition-all hover:shadow-lg"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-stone-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 space-y-4 animate-fade-in">
            <Link
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-medium ${
                isScrolled ? 'text-stone-700' : 'text-white/90'
              }`}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-medium ${
                isScrolled ? 'text-stone-700' : 'text-white/90'
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-medium ${
                isScrolled ? 'text-stone-700' : 'text-white/90'
              }`}
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block bg-moss-700 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-moss-800 transition-all"
            >
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
