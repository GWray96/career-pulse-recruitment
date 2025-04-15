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
    <section className="relative bg-gradient-to-r from-deep-navy to-primary-700 pt-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/backgrounds/grid-pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        {/* Sliding container - Adjust height for different screen sizes */}
        <div 
          ref={containerRef}
          className="relative h-[650px] xs:h-[600px] sm:h-[550px] md:h-[500px] lg:h-[600px] xl:h-[550px] overflow-hidden"
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
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 mb-6 sm:mb-8 lg:mb-0">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4">
                  Sales Talent <span className="text-pulse-orange animate-pulse-heartbeat inline-block overflow-visible px-1">That Delivers</span>
                </h1>
                <p className="text-base xs:text-lg sm:text-xl text-white/90 mb-4 sm:mb-6 max-w-2xl font-body">
                  Specialized recruitment for sales roles. Find top-performing sales professionals who drive revenue and growth.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                    {/* Card content with responsive adjustments */}
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-pulse-orange flex items-center justify-center mr-2 sm:mr-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">Junior Sales Roles</h3>
                    </div>
                    <div className="mb-2 sm:mb-3">
                      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">£999</span>
                      <span className="text-white/80 ml-2 text-sm sm:text-base">fixed price</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-3">
                      One predictable fee for all junior sales positions. No surprises, no percentage calculations.
                    </p>
                    <Link 
                      href="/employer-pulse" 
                      className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 bg-white text-deep-navy rounded-lg text-xs sm:text-sm font-medium hover:bg-white/90 transition-colors duration-200"
                    >
                      Get Started
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* Second card with similar responsive adjustments */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-pulse-orange flex items-center justify-center mr-2 sm:mr-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">Senior Sales Roles</h3>
                    </div>
                    <div className="mb-2 sm:mb-3">
                      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">Just 10%</span>
                      <span className="text-white/80 ml-2 text-sm sm:text-base">flat fee</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-3">
                      Find proven sales professionals who consistently exceed targets and drive revenue growth.
                    </p>
                    <Link 
                      href="/employer-pulse" 
                      className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 bg-white text-deep-navy rounded-lg text-xs sm:text-sm font-medium hover:bg-white/90 transition-colors duration-200"
                    >
                      Learn More
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                <div className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 rounded-full text-white text-xs sm:text-sm">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5 text-pulse-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Sales talent guaranteed or your money back</span>
                </div>
              </div>
              
              <div className="hidden lg:block w-full lg:w-1/2 lg:pl-8 xl:pl-12 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[280px] xs:max-w-sm sm:max-w-md lg:mr-4 xl:mr-8">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-pulse-orange rounded-full opacity-70 blur-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 bg-deep-navy rounded-full opacity-70 blur-xl"></div>
                  
                  <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="bg-primary-50 p-2 sm:p-3 md:p-4 border-b border-gray-100">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-xs sm:text-sm md:text-base text-deep-navy">Cost Comparison</h3>
                        <span className="bg-pulse-orange/10 text-pulse-orange text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">Save up to 70%</span>
                      </div>
                    </div>
                    
                    <div className="p-3 sm:p-4 md:p-6">
                      <div className="mb-3 sm:mb-4 md:mb-6">
                        <h4 className="font-bold text-xs sm:text-sm md:text-base text-deep-navy mb-2 sm:mb-3">For a £50,000 senior sales role:</h4>
                        
                        <div className="space-y-2 sm:space-y-3 md:space-y-4">
                          <div className="flex items-start">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-500 mt-1 sm:mt-1.5 mr-2 sm:mr-3 flex-shrink-0"></div>
                            <div>
                              <div className="font-medium text-xs sm:text-sm md:text-base text-charcoal-grey">Traditional Agency</div>
                              <div className="flex justify-between">
                                <span className="text-light-grey text-xs">20-30% fee</span>
                                <span className="font-bold text-xs sm:text-sm text-red-500">£10,000 - £15,000</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-pulse-orange mt-1 sm:mt-1.5 mr-2 sm:mr-3 flex-shrink-0"></div>
                            <div>
                              <div className="font-medium text-xs sm:text-sm md:text-base text-charcoal-grey">Career Pulse</div>
                              <div className="flex justify-between">
                                <span className="text-light-grey text-xs">10% flat fee</span>
                                <span className="font-bold text-xs sm:text-sm text-pulse-orange">£5,000</span>
                              </div>
                              <div className="bg-green-50 text-green-700 text-xs font-medium px-1.5 sm:px-2 py-0.5 rounded mt-1 inline-block">
                                Save £5,000 - £10,000
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-2 sm:pt-3 md:pt-4 mb-3 sm:mb-4 md:mb-6">
                        <p className="text-xs sm:text-sm text-charcoal-grey mb-2 sm:mb-3">
                          Skip the inflated recruitment fees while getting the same high-quality sales candidates. Our specialized process delivers results without the markup.
                        </p>
                      </div>
                      
                      <Link 
                        href="/pricing"
                        className="block w-full py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 bg-pulse-orange hover:bg-accent-600 text-white text-center text-xs sm:text-sm md:text-base font-medium rounded-lg transition-colors duration-200"
                      >
                        View Full Pricing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Candidate View - with similar responsive updates */}
          <div 
            className={`absolute w-full transition-all duration-1000 ease-in-out ${
              activeView === 'candidate'
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            }`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 mb-8 sm:mb-10 lg:mb-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
                  Your Sales Career <span className="text-pulse-orange animate-pulse-heartbeat inline-block overflow-visible px-1">Accelerated</span>
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl font-body">
                  Connect with companies looking for top sales talent. Get matched with opportunities that align with your skills and commission goals.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pulse-orange flex items-center justify-center mr-3 sm:mr-4">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Sales Opportunities</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4">
                      Our expert recruiters understand your sales skills and career aspirations to match you with the perfect role.
                    </p>
                    <Link 
                      href="/talent-pulse" 
                      className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-deep-navy rounded-lg text-sm sm:text-base font-medium hover:bg-white/90 transition-colors duration-200"
                    >
                      Find Jobs
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pulse-orange flex items-center justify-center mr-3 sm:mr-4">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Sales Coaching</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4">
                      Get valuable insights and feedback to improve your sales pitch, prepare for interviews, and negotiate better commission structures.
                    </p>
                    <Link 
                      href="/candidate-pulse" 
                      className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-deep-navy rounded-lg text-sm sm:text-base font-medium hover:bg-white/90 transition-colors duration-200"
                    >
                      Get Advice
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-white text-xs sm:text-sm mb-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-pulse-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% free for sales professionals</span>
                </div>
              </div>
              
              <div className="hidden lg:block w-full lg:w-1/2 lg:pl-8 xl:pl-12 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm md:max-w-md lg:mr-4 xl:mr-8">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 bg-pulse-orange rounded-full opacity-70 blur-xl"></div>
                  <div className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 w-28 sm:w-40 h-28 sm:h-40 bg-deep-navy rounded-full opacity-70 blur-xl"></div>
                  
                  <div className="relative bg-white rounded-xl shadow-xl sm:shadow-2xl overflow-hidden">
                    <div className="bg-primary-50 p-3 sm:p-4 border-b border-gray-100">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-sm sm:text-base text-deep-navy">Sales Career Growth</h3>
                        <span className="bg-pulse-orange/10 text-pulse-orange text-xs px-2 py-1 rounded-full">Personalized</span>
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6">
                      <div className="mb-4 sm:mb-6">
                        <h4 className="font-bold text-sm sm:text-base text-deep-navy mb-3 sm:mb-4">How We Help You Succeed:</h4>
                        
                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex items-start">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary-50 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                              <span className="font-bold text-xs sm:text-sm text-pulse-orange">1</span>
                            </div>
                            <div>
                              <div className="font-medium text-sm sm:text-base text-charcoal-grey">Sales Resume Optimization</div>
                              <p className="text-xs sm:text-sm text-light-grey">Get your sales achievements noticed by highlighting your revenue impact and closing rates.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary-50 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                              <span className="font-bold text-xs sm:text-sm text-pulse-orange">2</span>
                            </div>
                            <div>
                              <div className="font-medium text-sm sm:text-base text-charcoal-grey">Sales Interview Preparation</div>
                              <p className="text-xs sm:text-sm text-light-grey">Personalized coaching to help you showcase your sales skills and close the deal.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary-50 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                              <span className="font-bold text-xs sm:text-sm text-pulse-orange">3</span>
                            </div>
                            <div>
                              <div className="font-medium text-sm sm:text-base text-charcoal-grey">Commission Negotiation</div>
                              <p className="text-xs sm:text-sm text-light-grey">Get the compensation structure you deserve with our negotiation strategies.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Link 
                        href="/candidate-pulse"
                        className="block w-full py-2 sm:py-3 px-3 sm:px-4 bg-pulse-orange hover:bg-accent-600 text-white text-center text-sm sm:text-base font-medium rounded-lg transition-colors duration-200"
                      >
                        Start Your Journey
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide indicators - smaller on mobile */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <div className="flex space-x-2">
            <button
              onClick={() => activeView !== 'employer' && toggleView()}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                activeView === 'employer' ? 'bg-pulse-orange scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label="Show employer view"
            ></button>
            <button
              onClick={() => activeView !== 'candidate' && toggleView()}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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