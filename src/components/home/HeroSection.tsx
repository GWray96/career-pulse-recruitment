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
      
      <div className="container mx-auto px-4 py-24 sm:py-28 md:py-32 lg:py-36 xl:py-40 relative z-10">
        {/* Sliding container - Adjust height for different screen sizes */}
        <div 
          ref={containerRef}
          className="relative min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] xl:min-h-[750px] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Employer View */}
          <div 
            className={`absolute w-full transition-all duration-1000 ease-in-out ${
              activeView === 'employer'
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'
            }`}
          >
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Mobile-optimized banner */}
              <div className="inline-flex items-center px-3 py-2 bg-pulse-orange/20 rounded-full text-white text-sm sm:text-base mb-4 sm:mb-6">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-pulse-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Limited Time Offer: Save 50% on Your First Hire</span>
              </div>

              {/* Mobile-optimized heading */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4">
                Hire Top Sales Talent <span className="text-pulse-orange animate-pulse-heartbeat inline-block overflow-visible px-1">In Half The Time</span>
              </h1>

              {/* Mobile-optimized description */}
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl font-body">
                Specialized recruitment for sales roles. Find revenue-driving professionals who consistently exceed targets.
              </p>

              {/* Mobile-optimized CTA section */}
              <div className="w-full max-w-sm sm:max-w-md mb-8 sm:mb-10">
                <Link 
                  href="/employer-pulse" 
                  className="block w-full px-6 py-4 bg-pulse-orange hover:bg-accent-600 text-white text-center text-lg sm:text-xl font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Start Hiring Now
                </Link>
                <p className="text-white/80 text-sm sm:text-base mt-3">No commitment required. Get started in minutes.</p>
              </div>

              {/* Mobile-optimized pricing cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pulse-orange flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">Junior Sales Roles</h3>
                  <div className="text-center mb-3">
                    <span className="text-3xl sm:text-4xl font-bold text-white">£999</span>
                    <span className="text-white/80 ml-2 text-base">fixed price</span>
                  </div>
                  <p className="text-base text-white/80 mb-4 text-center">
                    One predictable fee for all junior sales positions.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pulse-orange flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">Senior Sales Roles</h3>
                  <div className="text-center mb-3">
                    <span className="text-3xl sm:text-4xl font-bold text-white">Just 10%</span>
                    <span className="text-white/80 ml-2 text-base">flat fee</span>
                  </div>
                  <p className="text-base text-white/80 mb-4 text-center">
                    Find proven sales professionals who drive revenue growth.
                  </p>
                </div>
              </div>

              {/* Mobile-optimized social proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex -space-x-2">
                  <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/1.jpg" alt="Client" />
                  <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/2.jpg" alt="Client" />
                  <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/3.jpg" alt="Client" />
                </div>
                <p className="text-white/80 text-base sm:text-lg">Trusted by 200+ companies</p>
              </div>
            </div>
          </div>

          {/* Candidate View */}
          <div 
            className={`absolute w-full transition-all duration-1000 ease-in-out ${
              activeView === 'candidate'
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            }`}
          >
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Mobile-optimized banner */}
              <div className="inline-flex items-center px-3 py-2 bg-pulse-orange/20 rounded-full text-white text-sm sm:text-base mb-4 sm:mb-6">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-pulse-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Exclusive Sales Opportunities Available Now</span>
              </div>

              {/* Mobile-optimized heading */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4">
                Your Sales Career <span className="text-pulse-orange animate-pulse-heartbeat inline-block overflow-visible px-1">Accelerated</span>
              </h1>

              {/* Mobile-optimized description */}
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl font-body">
                Connect with companies actively hiring top sales talent. Get matched with opportunities that align with your skills.
              </p>

              {/* Mobile-optimized CTA section */}
              <div className="w-full max-w-sm sm:max-w-md mb-8 sm:mb-10">
                <Link 
                  href="/candidate-pulse" 
                  className="block w-full px-6 py-4 bg-pulse-orange hover:bg-accent-600 text-white text-center text-lg sm:text-xl font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Find Your Next Role
                </Link>
                <p className="text-white/80 text-sm sm:text-base mt-3">100% free for sales professionals</p>
              </div>

              {/* Mobile-optimized feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pulse-orange flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">Sales Opportunities</h3>
                  <p className="text-base text-white/80 mb-4 text-center">
                    Expert recruiters match you with perfect roles.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pulse-orange flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">Sales Coaching</h3>
                  <p className="text-base text-white/80 mb-4 text-center">
                    Get expert advice on interviews and negotiations.
                  </p>
                </div>
              </div>

              {/* Mobile-optimized social proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex -space-x-2">
                  <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/4.jpg" alt="Client" />
                  <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/5.jpg" alt="Client" />
                  <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/6.jpg" alt="Client" />
                </div>
                <p className="text-white/80 text-base sm:text-lg">Join 1,000+ successful sales professionals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators - larger on mobile for better touch targets */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <div className="flex space-x-3">
            <button
              onClick={() => activeView !== 'employer' && toggleView()}
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-300 ${
                activeView === 'employer' ? 'bg-pulse-orange scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label="Show employer view"
            ></button>
            <button
              onClick={() => activeView !== 'candidate' && toggleView()}
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-300 ${
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