'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CareerPulseLogo from './CareerPulseLogo';

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <CareerPulseLogo variant={isScrolled ? 'default' : 'light'} />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 ml-10">
          <Link 
            href="/" 
            className={`relative font-medium transition-colors duration-200 ${
              isScrolled
                ? (activeItem === 'home' ? 'text-pulse-orange' : 'text-deep-navy hover:text-pulse-orange')
                : 'text-white hover:text-pulse-orange'
            }`}
            onClick={() => setActiveItem('home')}
            aria-current={activeItem === 'home' ? 'page' : undefined}
          >
            Home
            {activeItem === 'home' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pulse-orange" />
            )}
          </Link>
          
          <div className="relative group">
            <button 
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-deep-navy hover:text-pulse-orange' : 'text-white hover:text-pulse-orange'
              }`}
              aria-haspopup="true"
              aria-expanded="false"
            >
              For Candidates
            </button>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2 rounded-md bg-white" role="menu">
                <Link href="/talent-pulse" className="block px-4 py-2 text-sm text-deep-navy hover:bg-gray-100 hover:text-pulse-orange" role="menuitem">
                  Talent Pulse
                </Link>
                <Link href="/job-search" className="block px-4 py-2 text-sm text-deep-navy hover:bg-gray-100 hover:text-pulse-orange" role="menuitem">
                  Browse All Jobs
                </Link>
                <Link href="/featured-jobs" className="block px-4 py-2 text-sm text-deep-navy hover:bg-gray-100 hover:text-pulse-orange" role="menuitem">
                  Featured Jobs
                </Link>
                <Link href="/remote-jobs" className="block px-4 py-2 text-sm text-deep-navy hover:bg-gray-100 hover:text-pulse-orange" role="menuitem">
                  Remote Jobs
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <button 
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-deep-navy hover:text-pulse-orange' : 'text-white hover:text-pulse-orange'
              }`}
              aria-haspopup="true"
              aria-expanded="false"
            >
              For Employers
            </button>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2 rounded-md bg-white" role="menu">
                <Link href="/employer-pulse" className="block px-4 py-2 text-sm text-deep-navy hover:bg-gray-100 hover:text-pulse-orange" role="menuitem">
                  Employer Pulse
                </Link>
                <Link href="/employer-form" className="block px-4 py-2 text-sm text-deep-navy hover:bg-gray-100 hover:text-pulse-orange" role="menuitem">
                  Post a Job
                </Link>
                <Link href="/employer-dashboard" className="block px-4 py-2 text-sm text-deep-navy hover:bg-gray-100 hover:text-pulse-orange" role="menuitem">
                  Employer Dashboard
                </Link>
                <Link href="/pricing" className="block px-4 py-2 text-sm text-deep-navy hover:bg-gray-100 hover:text-pulse-orange" role="menuitem">
                  Pricing Plans
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <button 
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-deep-navy hover:text-pulse-orange' : 'text-white hover:text-pulse-orange'
              }`}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Resources
            </button>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2 rounded-md bg-white" role="menu">
                <Link href="/blog" className="block px-4 py-2 text-sm text-deep-navy hover:bg-gray-100 hover:text-pulse-orange" role="menuitem">
                  Blog
                </Link>
                <Link href="/resources" className="block px-4 py-2 text-sm text-deep-navy hover:bg-gray-100 hover:text-pulse-orange" role="menuitem">
                  Resources
                </Link>
                <Link href="/faq" className="block px-4 py-2 text-sm text-deep-navy hover:bg-gray-100 hover:text-pulse-orange" role="menuitem">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA and Mobile menu button */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/contact"
            className={`hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              isScrolled
                ? 'bg-pulse-orange text-white hover:bg-accent-600'
                : 'bg-white text-deep-navy hover:bg-white/90'
            }`}
          >
            Contact Us
          </Link>
          <button
            onClick={toggleMenu}
            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none lg:hidden ${
              isScrolled ? 'text-deep-navy hover:bg-gray-100' : 'text-white hover:bg-deep-navy-700'
            }`}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${
          isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out`}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={toggleMenu} />
        <div className="relative flex flex-col w-full max-w-xs h-full bg-white shadow-xl">
          {/* Mobile menu header */}
          <div className="px-4 py-4 border-b border-gray-200 flex items-center justify-between">
            <CareerPulseLogo variant="default" size="small" />
            <button
              onClick={toggleMenu}
              className="p-1 rounded-md text-deep-navy hover:text-pulse-orange hover:bg-gray-100 focus:outline-none"
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
            <div className="px-4 pt-4 pb-6 space-y-1">
              {/* Quick actions */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <Link 
                  href="/job-search" 
                  className="flex flex-col items-center justify-center p-3 bg-primary-50 rounded-lg text-center hover:bg-primary-100 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  <svg className="w-6 h-6 text-pulse-orange mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-sm font-medium text-deep-navy">Find Jobs</span>
                </Link>
                <Link 
                  href="/employer-form" 
                  className="flex flex-col items-center justify-center p-3 bg-primary-50 rounded-lg text-center hover:bg-primary-100 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  <svg className="w-6 h-6 text-pulse-orange mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span className="text-sm font-medium text-deep-navy">Post a Job</span>
                </Link>
              </div>
              
              {/* Main navigation */}
              <Link 
                href="/" 
                className="block px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
                onClick={() => {
                  setActiveItem('home');
                  toggleMenu();
                }}
              >
                Home
              </Link>
              
              {/* For Candidates section */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
                  onClick={() => toggleSection('candidates')}
                  aria-expanded={expandedSection === 'candidates'}
                >
                  <span>For Candidates</span>
                  <svg 
                    className={`h-5 w-5 text-light-grey transform transition-transform duration-200 ${expandedSection === 'candidates' ? 'rotate-180' : ''}`}
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
                      className="block px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Talent Pulse
                    </Link>
                    <Link 
                      href="/job-search" 
                      className="block px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Browse All Jobs
                    </Link>
                    <Link 
                      href="/featured-jobs" 
                      className="block px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Featured Jobs
                    </Link>
                    <Link 
                      href="/remote-jobs" 
                      className="block px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Remote Jobs
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* For Employers section */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
                  onClick={() => toggleSection('employers')}
                  aria-expanded={expandedSection === 'employers'}
                >
                  <span>For Employers</span>
                  <svg 
                    className={`h-5 w-5 text-light-grey transform transition-transform duration-200 ${expandedSection === 'employers' ? 'rotate-180' : ''}`}
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
                      className="block px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Employer Pulse
                    </Link>
                    <Link 
                      href="/employer-form" 
                      className="block px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Post a Job
                    </Link>
                    <Link 
                      href="/employer-dashboard" 
                      className="block px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Employer Dashboard
                    </Link>
                    <Link 
                      href="/pricing" 
                      className="block px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Pricing Plans
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Resources section */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
                  onClick={() => toggleSection('resources')}
                  aria-expanded={expandedSection === 'resources'}
                >
                  <span>Resources</span>
                  <svg 
                    className={`h-5 w-5 text-light-grey transform transition-transform duration-200 ${expandedSection === 'resources' ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${expandedSection === 'resources' ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="pl-4 space-y-1 mt-1">
                    <Link 
                      href="/blog" 
                      className="block px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/resources" 
                      className="block px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Resources
                    </Link>
                    <Link 
                      href="/faq" 
                      className="block px-3 py-2 text-base font-medium text-deep-navy hover:text-pulse-orange hover:bg-gray-50 rounded-md"
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
              href="/contact" 
              className="block w-full px-3 py-2 text-base font-medium text-white bg-pulse-orange hover:bg-accent-600 transition-colors duration-200 rounded-md text-center"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 