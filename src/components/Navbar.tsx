'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Reset expanded section when closing menu
    if (isMenuOpen) {
      setExpandedSection(null);
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-soft' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and primary nav */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="group flex items-center"
                aria-label="Career Pulse Home"
              >
                <div className="relative w-10 h-10 mr-2">
                  <Image
                    src="/images/icons/career-pulse-logo-large.png"
                    alt="Career Pulse Logo"
                    fill
                    sizes="40px"
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-xl sm:text-2xl font-montserrat font-bold text-primary transition-colors duration-200 group-hover:text-primary-dark">
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
                  For Candidates
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1" role="menu">
                    <Link href="/talent-pulse" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Talent Pulse
                    </Link>
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
                    <Link href="/employer-pulse" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Employer Pulse
                    </Link>
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
              <div className="relative group">
                <button 
                  className="nav-link text-gray-500 hover:text-primary transition-colors duration-200"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Extra Pulse
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1" role="menu">
                    <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Blog
                    </Link>
                    <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Resources
                    </Link>
                    <Link href="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      FAQ
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
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
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
          {/* Mobile menu header */}
          <div className="px-4 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-lg font-montserrat font-bold text-primary">
                Career Pulse
              </span>
            </div>
            <button
              onClick={toggleMenu}
              className="p-1 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
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
          
          {/* Mobile menu content */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {/* Quick actions */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <Link 
                  href="/job-search" 
                  className="flex flex-col items-center justify-center p-3 bg-primary-50 rounded-lg text-center hover:bg-primary-100 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  <svg className="w-6 h-6 text-primary mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Find Jobs</span>
                </Link>
                <Link 
                  href="/employer-form" 
                  className="flex flex-col items-center justify-center p-3 bg-primary-50 rounded-lg text-center hover:bg-primary-100 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  <svg className="w-6 h-6 text-primary mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Post a Job</span>
                </Link>
              </div>
              
              {/* Main navigation */}
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
              
              {/* For Candidates section */}
              <div className="border-t border-gray-200 pt-3">
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => toggleSection('candidates')}
                  aria-expanded={expandedSection === 'candidates'}
                >
                  <span>For Candidates</span>
                  <svg 
                    className={`h-5 w-5 transform transition-transform duration-200 ${expandedSection === 'candidates' ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${expandedSection === 'candidates' ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="pl-4 space-y-1 mt-1">
                    <Link 
                      href="/talent-pulse" 
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Talent Pulse
                    </Link>
                    <Link 
                      href="/job-search" 
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Browse All Jobs
                    </Link>
                    <Link 
                      href="/featured-jobs" 
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Featured Jobs
                    </Link>
                    <Link 
                      href="/remote-jobs" 
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Remote Jobs
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* For Employers section */}
              <div className="border-t border-gray-200 pt-3">
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => toggleSection('employers')}
                  aria-expanded={expandedSection === 'employers'}
                >
                  <span>For Employers</span>
                  <svg 
                    className={`h-5 w-5 transform transition-transform duration-200 ${expandedSection === 'employers' ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${expandedSection === 'employers' ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="pl-4 space-y-1 mt-1">
                    <Link 
                      href="/employer-pulse" 
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Employer Pulse
                    </Link>
                    <Link 
                      href="/employer-form" 
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Post a Job
                    </Link>
                    <Link 
                      href="/employer-dashboard" 
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Employer Dashboard
                    </Link>
                    <Link 
                      href="/pricing" 
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Pricing Plans
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Extra Pulse section */}
              <div className="border-t border-gray-200 pt-3">
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => toggleSection('extra')}
                  aria-expanded={expandedSection === 'extra'}
                >
                  <span>Extra Pulse</span>
                  <svg 
                    className={`h-5 w-5 transform transition-transform duration-200 ${expandedSection === 'extra' ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${expandedSection === 'extra' ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="pl-4 space-y-1 mt-1">
                    <Link 
                      href="/blog" 
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/resources" 
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Resources
                    </Link>
                    <Link 
                      href="/faq" 
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile menu footer */}
          <div className="px-4 py-4 border-t border-gray-200">
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