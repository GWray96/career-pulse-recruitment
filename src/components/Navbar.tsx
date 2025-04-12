'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-soft' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and primary nav */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="group"
                aria-label="Career Pulse Home"
              >
                <span className="text-2xl font-montserrat font-bold text-primary transition-colors duration-200 group-hover:text-primary-dark">
                  Career Pulse
                </span>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-12 sm:flex sm:space-x-8">
              <Link 
                href="/" 
                className={`nav-link relative ${
                  activeItem === 'home' ? 'text-primary' : 'text-gray-500'
                }`}
                onClick={() => setActiveItem('home')}
                aria-current={activeItem === 'home' ? 'page' : undefined}
              >
                Home
                {activeItem === 'home' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-200" />
                )}
              </Link>
              <div className="relative group">
                <button 
                  className="nav-link text-gray-500 hover:text-primary transition-colors duration-200"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Find Jobs
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1" role="menu">
                    <Link href="/job-search" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Browse All Jobs
                    </Link>
                    <Link href="/featured-jobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Featured Jobs
                    </Link>
                    <Link href="/remote-jobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Remote Jobs
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button 
                  className="nav-link text-gray-500 hover:text-primary transition-colors duration-200"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  For Employers
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1" role="menu">
                    <Link href="/employer-form" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Post a Job
                    </Link>
                    <Link href="/employer-dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Employer Dashboard
                    </Link>
                    <Link href="/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Pricing Plans
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA and Mobile menu button */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/book-call" 
              className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Book a Call
            </Link>
            <button
              onClick={toggleMenu}
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${
          isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } sm:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out`}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={toggleMenu} />
        <div className="relative flex flex-col w-full max-w-xs h-full bg-white shadow-xl">
          <div className="px-4 pt-5 pb-6 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 text-base font-medium text-primary hover:bg-gray-50 rounded-md"
              onClick={() => {
                setActiveItem('home');
                toggleMenu();
              }}
            >
              Home
            </Link>
            <div className="space-y-1">
              <button
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => {/* Toggle submenu */}}
              >
                Find Jobs
              </button>
              <div className="pl-4 space-y-1">
                <Link 
                  href="/job-search" 
                  className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={toggleMenu}
                >
                  Browse All Jobs
                </Link>
                <Link 
                  href="/featured-jobs" 
                  className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={toggleMenu}
                >
                  Featured Jobs
                </Link>
                <Link 
                  href="/remote-jobs" 
                  className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={toggleMenu}
                >
                  Remote Jobs
                </Link>
              </div>
            </div>
            <div className="space-y-1">
              <button
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => {/* Toggle submenu */}}
              >
                For Employers
              </button>
              <div className="pl-4 space-y-1">
                <Link 
                  href="/employer-form" 
                  className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={toggleMenu}
                >
                  Post a Job
                </Link>
                <Link 
                  href="/employer-dashboard" 
                  className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={toggleMenu}
                >
                  Employer Dashboard
                </Link>
                <Link 
                  href="/pricing" 
                  className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={toggleMenu}
                >
                  Pricing Plans
                </Link>
              </div>
            </div>
            <Link 
              href="/book-call" 
              className="block w-full px-3 py-2 text-base font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-200 rounded-md text-center"
              onClick={toggleMenu}
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 