'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [activeView, setActiveView] = useState<'employer' | 'candidate'>('employer');
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-switch between views every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      toggleView();
    }, 10000);
    
    return () => clearInterval(interval);
  }, [activeView]);

  const toggleView = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveView(activeView === 'employer' ? 'candidate' : 'employer');
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 500);
  };

  // Handle touch events for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe && activeView === 'employer') {
      toggleView();
    } else if (isRightSwipe && activeView === 'candidate') {
      toggleView();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            activeView === 'employer' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: "url('/images/backgrounds/linkedin-sales-solutions-1A8yP_5msac-unsplash.jpg')"
          }}
        />
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            activeView === 'candidate' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: "url('/images/backgrounds/christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/95 to-primary-700/95" />
      </div>
      
      <div className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />

        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Mobile-optimized banner */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm sm:text-base font-medium mb-6 sm:mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              Trusted by 500+ companies
            </div>

            {/* Mobile-optimized heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {activeView === 'employer' ? (
                <>
                  Find Your Perfect
                  <span className="text-blue-600"> Candidate </span>
                  Today
                </>
              ) : (
                <>
                  Find Your Dream
                  <span className="text-blue-600"> Job </span>
                  Today
                </>
              )}
            </h1>

            {/* Mobile-optimized description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
              {activeView === 'employer' ? (
                <>
                  AI-powered recruitment platform that helps you find and hire the best talent faster than ever.
                </>
              ) : (
                <>
                  AI-powered job search platform that helps you find and land your dream job faster than ever.
                </>
              )}
            </p>

            {/* Mobile-optimized CTA */}
            <div className="sm:hidden mt-8 space-y-4">
              <Link
                href="/employer-pulse"
                className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Start Hiring Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/candidate-pulse"
                className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                Find Jobs
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
              <p className="text-sm text-gray-500 text-center">
                No credit card required • 14-day free trial
              </p>
            </div>

            {/* Desktop CTA */}
            <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="/employer-pulse"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg w-full sm:w-auto"
              >
                Start Hiring Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/candidate-pulse"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors w-full sm:w-auto"
              >
                Find Jobs
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
            </div>
            <p className="hidden sm:block mt-4 text-sm text-gray-500 text-center">
              No credit card required • 14-day free trial
            </p>

            {/* Mobile-optimized pricing cards - hidden on mobile, visible on sm and above */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10 lg:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border border-white/20">
                <div className="flex items-center justify-center mb-3 md:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-pulse-orange flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-2 md:mb-3">Junior Sales Roles</h3>
                <div className="text-center mb-3 md:mb-4">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">£999</span>
                  <span className="text-white/80 ml-2 text-base md:text-lg">fixed price</span>
                </div>
                <p className="text-base md:text-lg text-white/80 mb-4 text-center">
                  One predictable fee for all junior sales positions.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border border-white/20">
                <div className="flex items-center justify-center mb-3 md:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-pulse-orange flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-2 md:mb-3">Senior Sales Roles</h3>
                <div className="text-center mb-3 md:mb-4">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">Just 10%</span>
                  <span className="text-white/80 ml-2 text-base md:text-lg">flat fee</span>
                </div>
                <p className="text-base md:text-lg text-white/80 mb-4 text-center">
                  Find proven sales professionals who drive revenue growth.
                </p>
              </div>
            </div>

            {/* Mobile-optimized social proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <div className="flex -space-x-2 md:-space-x-3">
                <img className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/1.jpg" alt="Client" />
                <img className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/2.jpg" alt="Client" />
                <img className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/3.jpg" alt="Client" />
              </div>
              <p className="text-white/80 text-base sm:text-lg md:text-xl">Trusted by 200+ companies</p>
            </div>
          </div>
        </div>

        {/* Slide indicators - larger on mobile for better touch targets */}
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
          <div className="flex space-x-3 md:space-x-4">
            <button
              onClick={() => activeView !== 'employer' && toggleView()}
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                activeView === 'employer' ? 'bg-pulse-orange scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label="Show employer view"
            ></button>
            <button
              onClick={() => activeView !== 'candidate' && toggleView()}
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                activeView === 'candidate' ? 'bg-pulse-orange scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label="Show candidate view"
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
} 