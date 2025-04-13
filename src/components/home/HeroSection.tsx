'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [activeView, setActiveView] = useState<'employer' | 'candidate'>('employer');
  const [isAnimating, setIsAnimating] = useState(false);

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

  return (
    <section className="relative bg-gradient-to-r from-deep-navy to-primary-700 pt-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/backgrounds/grid-pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* View toggle buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 inline-flex">
            <button
              onClick={() => activeView !== 'employer' && toggleView()}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeView === 'employer'
                  ? 'bg-pulse-orange text-white shadow-md'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              For Employers
            </button>
            <button
              onClick={() => activeView !== 'candidate' && toggleView()}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeView === 'candidate'
                  ? 'bg-pulse-orange text-white shadow-md'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              For Job Seekers
            </button>
          </div>
        </div>
        
        {/* Sliding container */}
        <div className="relative h-[600px] md:h-[550px] overflow-hidden">
          {/* Employer View */}
          <div 
            className={`absolute w-full transition-all duration-1000 ease-in-out ${
              activeView === 'employer'
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                  Flat Fee Recruitment <span className="text-pulse-orange animate-pulse-heartbeat inline-block">That Delivers</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl font-body">
                  No hidden fees. No fluff. Just effective recruitment at a fraction of the cost.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-pulse-orange flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">Skilled Roles</h3>
                    </div>
                    <div className="mb-4">
                      <span className="text-3xl md:text-4xl font-bold text-white">Just 10%</span>
                      <span className="text-white/80 ml-2 text-lg">flat fee</span>
                    </div>
                    <p className="text-white/80 text-sm mb-4">
                      Industry experts typically charge 20-30%. We deliver the same quality for a fraction of the cost.
                    </p>
                    <Link 
                      href="/employer-pulse" 
                      className="inline-flex items-center px-4 py-2 bg-white text-deep-navy rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
                    >
                      Get Started
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-pulse-orange flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">Unskilled Roles</h3>
                    </div>
                    <div className="mb-4">
                      <span className="text-3xl md:text-4xl font-bold text-white">£999</span>
                      <span className="text-white/80 ml-2 text-lg">fixed price</span>
                    </div>
                    <p className="text-white/80 text-sm mb-4">
                      One predictable fee for all unskilled hires. No surprises, no percentage calculations.
                    </p>
                    <Link 
                      href="/employer-pulse" 
                      className="inline-flex items-center px-4 py-2 bg-white text-deep-navy rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
                    >
                      Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white text-sm">
                  <svg className="w-5 h-5 mr-2 text-pulse-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Satisfaction guaranteed or your money back</span>
                </div>
              </div>
              
              <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-pulse-orange rounded-full opacity-70 blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-deep-navy rounded-full opacity-70 blur-xl"></div>
                  
                  <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                    <div className="bg-primary-50 p-4 border-b border-gray-100">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-deep-navy">Cost Comparison</h3>
                        <span className="bg-pulse-orange/10 text-pulse-orange text-xs px-2 py-1 rounded-full">Save up to 70%</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-6">
                        <h4 className="font-bold text-deep-navy mb-4">For a £50,000 role:</h4>
                        
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="w-3 h-3 rounded-full bg-red-500 mt-1.5 mr-3 flex-shrink-0"></div>
                            <div>
                              <div className="font-medium text-charcoal-grey">Traditional Agency</div>
                              <div className="flex justify-between">
                                <span className="text-light-grey text-sm">20-30% fee</span>
                                <span className="font-bold text-red-500">£10,000 - £15,000</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-3 h-3 rounded-full bg-pulse-orange mt-1.5 mr-3 flex-shrink-0"></div>
                            <div>
                              <div className="font-medium text-charcoal-grey">Career Pulse</div>
                              <div className="flex justify-between">
                                <span className="text-light-grey text-sm">10% flat fee</span>
                                <span className="font-bold text-pulse-orange">£5,000</span>
                              </div>
                              <div className="bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded mt-1 inline-block">
                                Save £5,000 - £10,000
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-4 mb-6">
                        <p className="text-sm text-charcoal-grey mb-4">
                          Skip the inflated recruitment fees while getting the same high-quality candidates. Our streamlined process delivers results without the markup.
                        </p>
                      </div>
                      
                      <Link 
                        href="/pricing"
                        className="block w-full py-3 px-4 bg-pulse-orange hover:bg-accent-600 text-white text-center font-medium rounded-lg transition-colors duration-200"
                      >
                        View Full Pricing
                      </Link>
                    </div>
                  </div>
                </div>
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
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                  Your Career <span className="text-pulse-orange animate-pulse-heartbeat inline-block">Accelerated</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl font-body">
                  Connect with top employers who value your skills and experience. Get matched with opportunities that align with your career goals.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-pulse-orange flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">Job Matching</h3>
                    </div>
                    <p className="text-white/80 text-sm mb-4">
                      Our expert recruiters understand your skills and career aspirations to match you with the perfect role.
                    </p>
                    <Link 
                      href="/talent-pulse" 
                      className="inline-flex items-center px-4 py-2 bg-white text-deep-navy rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
                    >
                      Find Jobs
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-pulse-orange flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">Career Coaching</h3>
                    </div>
                    <p className="text-white/80 text-sm mb-4">
                      Get valuable insights and feedback to improve your CV, prepare for interviews, and negotiate offers.
                    </p>
                    <Link 
                      href="/candidate-pulse" 
                      className="inline-flex items-center px-4 py-2 bg-white text-deep-navy rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
                    >
                      Get Advice
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white text-sm">
                  <svg className="w-5 h-5 mr-2 text-pulse-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% free for job seekers</span>
                </div>
              </div>
              
              <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-pulse-orange rounded-full opacity-70 blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-deep-navy rounded-full opacity-70 blur-xl"></div>
                  
                  <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                    <div className="bg-primary-50 p-4 border-b border-gray-100">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-deep-navy">Career Growth</h3>
                        <span className="bg-pulse-orange/10 text-pulse-orange text-xs px-2 py-1 rounded-full">Personalized</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-6">
                        <h4 className="font-bold text-deep-navy mb-4">How We Help You Succeed:</h4>
                        
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="font-bold text-pulse-orange">1</span>
                            </div>
                            <div>
                              <div className="font-medium text-charcoal-grey">Resume Optimization</div>
                              <p className="text-light-grey text-sm">Get your CV noticed by top employers with our expert optimization tips.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="font-bold text-pulse-orange">2</span>
                            </div>
                            <div>
                              <div className="font-medium text-charcoal-grey">Interview Preparation</div>
                              <p className="text-light-grey text-sm">Personalized coaching to help you stand out and impress employers.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="font-bold text-pulse-orange">3</span>
                            </div>
                            <div>
                              <div className="font-medium text-charcoal-grey">Salary Negotiation</div>
                              <p className="text-light-grey text-sm">Get the compensation you deserve with our negotiation strategies.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Link 
                        href="/candidate-pulse"
                        className="block w-full py-3 px-4 bg-pulse-orange hover:bg-accent-600 text-white text-center font-medium rounded-lg transition-colors duration-200"
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
        
        {/* Slide indicators */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <button
              onClick={() => activeView !== 'employer' && toggleView()}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeView === 'employer' ? 'bg-pulse-orange scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label="Show employer view"
            ></button>
            <button
              onClick={() => activeView !== 'candidate' && toggleView()}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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