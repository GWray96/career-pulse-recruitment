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
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and primary nav */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/icons/career-pulse-logo.png"
                  alt="Career Pulse Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
                <span className="ml-2 text-xl font-montserrat font-bold text-primary">
                  Career Pulse
                </span>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/job-search"
                className="text-gray-900 hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary transition-colors duration-200"
              >
                Find Jobs
              </Link>
              <Link
                href="/employer-form"
                className="text-gray-900 hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary transition-colors duration-200"
              >
                Post a Job
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
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
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="text-gray-900 hover:text-primary block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-primary hover:bg-gray-50 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/job-search"
            className="text-gray-900 hover:text-primary block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-primary hover:bg-gray-50 transition-colors duration-200"
          >
            Find Jobs
          </Link>
          <Link
            href="/employer-form"
            className="text-gray-900 hover:text-primary block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-primary hover:bg-gray-50 transition-colors duration-200"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 