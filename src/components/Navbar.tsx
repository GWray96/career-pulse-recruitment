'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-soft fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and primary nav */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative w-14 h-14">
                  <Image
                    src="/images/icons/career-pulse-logo-large.png"
                    alt="Career Pulse Logo"
                    fill
                    sizes="(max-width: 768px) 56px, 56px"
                    className="object-contain transition-transform duration-200 group-hover:scale-105"
                    priority
                    quality={100}
                  />
                </div>
                <span className="text-xl font-montserrat font-bold text-primary">
                  Career Pulse
                </span>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/job-search" className="nav-link">
                Find Jobs
              </Link>
              <Link href="/employer-form" className="nav-link">
                Post a Job
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
              aria-expanded="false"
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
        className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden transition-all duration-200 ease-in-out`}
      >
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/" className="nav-link-mobile">
            Home
          </Link>
          <Link href="/job-search" className="nav-link-mobile">
            Find Jobs
          </Link>
          <Link href="/employer-form" className="nav-link-mobile">
            Post a Job
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 