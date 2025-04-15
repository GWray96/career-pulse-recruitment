'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const [activeHeading, setActiveHeading] = useState<'employer' | 'candidate'>('employer');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeading(prev => prev === 'employer' ? 'candidate' : 'employer');
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const headings = {
    employer: {
      main: "Transform Your",
      highlight: "Sales Team",
      sub: "with Top Talent"
    },
    candidate: {
      main: "Accelerate Your",
      highlight: "Sales Career",
      sub: "with Premium Opportunities"
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 animate-gradient">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
      </div>
      
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Trust Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
              <span className="text-white text-sm font-medium">
                Trusted by 500+ companies across the UK
              </span>
              <div className="ml-3 flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-800 overflow-hidden">
                    <Image
                      src={`/images/client-${i}.png`}
                      alt={`Client ${i}`}
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 min-h-[200px] flex flex-col items-center justify-center">
              <span className="transition-all duration-500 transform">
                {headings[activeHeading].main}
              </span>
              <span className="relative mt-2">
                <span className="relative z-10 text-blue-400 transition-all duration-500 transform">
                  {headings[activeHeading].highlight}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-400/20 -skew-x-12 transition-all duration-500 transform" />
              </span>
              <span className="mt-2 transition-all duration-500 transform">
                {headings[activeHeading].sub}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Whether you're hiring top talent or finding your next opportunity, 
              we make recruitment work for you.
            </p>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {/* Employer CTA */}
            <Link 
              href="/employer-pulse"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-500 rounded-xl hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Start Hiring Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute right-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                →
              </div>
            </Link>

            {/* Candidate CTA */}
            <Link 
              href="/candidate-pulse"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              <span className="relative z-10">Find Your Next Role</span>
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute right-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                →
              </div>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">24h</div>
              <div className="text-gray-300">Average Response Time</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">10k+</div>
              <div className="text-gray-300">Placements Made</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 