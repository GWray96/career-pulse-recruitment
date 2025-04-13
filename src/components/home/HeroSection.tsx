'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg"
          alt="Modern office workspace"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Improved overlay with pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary-dark/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('/images/backgrounds/pattern.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white text-center md:text-left">
              <div className="mb-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight">
                  <span className="block drop-shadow-lg">Find Your Perfect</span>
                  <span className="block text-accent drop-shadow-lg">Career Match</span>
                </h1>
              </div>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white font-medium drop-shadow-md">
                Career Pulse is a leading recruitment agency connecting talented professionals with innovative companies. 
                Our expert recruiters work with both job seekers and employers to create perfect matches.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 justify-center md:justify-start">
                <Link 
                  href="/candidate-pulse" 
                  className="btn-primary bg-white text-primary hover:bg-white/90 text-center py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Candidate Pulse
                </Link>
                <Link 
                  href="/employer-pulse" 
                  className="btn-secondary bg-accent text-white hover:bg-accent/90 text-center py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Employer Pulse
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-4 sm:gap-6 justify-center md:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-200"></div>
                  ))}
                </div>
                <p className="text-white font-medium drop-shadow-md text-sm sm:text-base">
                  <span className="font-bold">10,000+</span> professionals hired
                </p>
              </div>
            </div>
            
            {/* Right Column - Stats/Features */}
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/40 mt-8 md:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div className="text-center p-3 sm:p-4 bg-white/20 rounded-xl border border-white/30 hover:bg-white/30 transition-colors duration-200 group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">85%</div>
                  <p className="text-white font-medium text-xs sm:text-sm drop-shadow-md">Faster hiring process</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/20 rounded-xl border border-white/30 hover:bg-white/30 transition-colors duration-200 group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">3x</div>
                  <p className="text-white font-medium text-xs sm:text-sm drop-shadow-md">More quality candidates</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/20 rounded-xl border border-white/30 hover:bg-white/30 transition-colors duration-200 group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">50%</div>
                  <p className="text-white font-medium text-xs sm:text-sm drop-shadow-md">Cost reduction</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/20 rounded-xl border border-white/30 hover:bg-white/30 transition-colors duration-200 group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">24/7</div>
                  <p className="text-white font-medium text-xs sm:text-sm drop-shadow-md">Expert recruitment team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 