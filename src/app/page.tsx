import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      {/* Hero Section */}
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
          
          {/* Pulse Animation Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-accent/20 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 rounded-full bg-primary/20 animate-pulse-slower"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 rounded-full bg-white/10 animate-pulse-medium"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-white text-center md:text-left">
                <div className="mb-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight">
                    <span className="block drop-shadow-lg animate-fade-in">Find Your Perfect</span>
                    <span className="block text-accent drop-shadow-lg animate-fade-in-delayed animate-pulse-heartbeat">Career Match</span>
                  </h1>
                </div>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white font-medium drop-shadow-md">
                  Career Pulse is a leading recruitment agency connecting talented professionals with innovative companies. 
                  Our expert recruiters work with both job seekers and employers to create perfect matches.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 justify-center md:justify-start">
                  <Link 
                    href="/job-search" 
                    className="btn-primary bg-white text-primary hover:bg-white/90 text-center py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Find Opportunities
                  </Link>
                  <Link 
                    href="/employer-form" 
                    className="btn-secondary bg-accent text-white hover:bg-accent/90 text-center py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Post a Job
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
                  <div className="text-center p-3 sm:p-4 bg-white/20 rounded-xl border border-white/30 hover:bg-white/30 transition-colors duration-300 group">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg group-hover:animate-pulse">85%</div>
                    <p className="text-white font-medium text-xs sm:text-sm drop-shadow-md">Faster hiring process</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-white/20 rounded-xl border border-white/30 hover:bg-white/30 transition-colors duration-300 group">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg group-hover:animate-pulse">3x</div>
                    <p className="text-white font-medium text-xs sm:text-sm drop-shadow-md">More quality candidates</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-white/20 rounded-xl border border-white/30 hover:bg-white/30 transition-colors duration-300 group">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg group-hover:animate-pulse">50%</div>
                    <p className="text-white font-medium text-xs sm:text-sm drop-shadow-md">Cost reduction</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-white/20 rounded-xl border border-white/30 hover:bg-white/30 transition-colors duration-300 group">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg group-hover:animate-pulse">24/7</div>
                    <p className="text-white font-medium text-xs sm:text-sm drop-shadow-md">Expert recruitment team</p>
                  </div>
                </div>
                
                {/* Search Box */}
                <div className="mt-6 sm:mt-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search jobs, skills, or companies..."
                      className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent shadow-lg text-sm sm:text-base"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 sm:p-3 rounded-md hover:bg-primary-dark transition-colors duration-200 hover:animate-pulse">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3 sm:mt-4 justify-center md:justify-start">
                    <span className="text-white font-medium text-xs sm:text-sm drop-shadow-md">Popular:</span>
                    {['Remote', 'Tech', 'Marketing', 'Sales'].map((tag) => (
                      <button key={tag} className="text-xs sm:text-sm bg-white/30 hover:bg-white/40 text-white font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full transition-colors duration-200 border border-white/40 hover:scale-105 hover:animate-pulse">
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 animate-pulse-slower"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-deep-charcoal">
              Why Choose <span className="text-primary">Career Pulse</span>?
            </h2>
            <p className="text-base sm:text-lg text-deep-charcoal/70">
              We're a team of experienced recruitment professionals dedicated to finding the perfect match between candidates and companies.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {/* Feature 1 */}
            <div className="group bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:border-primary/20 hover:scale-[1.02] transform">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-deep-charcoal group-hover:text-primary transition-colors duration-300">Lightning Fast</h3>
              </div>
              <p className="text-base sm:text-lg text-deep-charcoal/70 mb-4 sm:mb-6">
                Our dedicated recruiters work efficiently to match you with opportunities, reducing your job search time by up to 70%.
              </p>
              <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300">
                <span>Learn more</span>
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="group bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:border-primary/20 hover:scale-[1.02] transform">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-accent group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-deep-charcoal group-hover:text-accent transition-colors duration-300">Human Touch</h3>
              </div>
              <p className="text-base sm:text-lg text-deep-charcoal/70 mb-4 sm:mb-6">
                Experience recruitment that feels personal and supportive, with dedicated career advisors ready to guide your journey.
              </p>
              <div className="flex items-center text-accent font-medium group-hover:translate-x-1 transition-transform duration-300">
                <span>Learn more</span>
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="group bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:border-primary/20 hover:scale-[1.02] transform">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-deep-charcoal group-hover:text-primary transition-colors duration-300">Perfect Match</h3>
              </div>
              <p className="text-base sm:text-lg text-deep-charcoal/70 mb-4 sm:mb-6">
                Our expert recruiters connect you with opportunities that truly fit your skills, experience, and career goals.
              </p>
              <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300">
                <span>Learn more</span>
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Interactive Stats Section */}
          <div className="mt-16 sm:mt-20 md:mt-24 bg-white rounded-2xl shadow-soft p-6 sm:p-8 md:p-10 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-deep-charcoal">
                  The <span className="text-primary">Career Pulse</span> Difference
                </h3>
                <p className="text-base sm:text-lg text-deep-charcoal/70 mb-6 sm:mb-8">
                  Our recruitment team has helped thousands of professionals find their dream jobs and companies hire top talent faster than ever.
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-deep-charcoal">85% Faster Hiring Process</p>
                      <p className="text-sm text-deep-charcoal/60">Reduce time-to-hire with our expert recruiters</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-deep-charcoal">3x More Quality Candidates</p>
                      <p className="text-sm text-deep-charcoal/60">Access our extensive network of pre-screened talent</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-deep-charcoal">50% Cost Reduction</p>
                      <p className="text-sm text-deep-charcoal/60">Lower recruitment costs with our services</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/backgrounds/linkedin-sales-solutions-1A8yP_5msac-unsplash.jpg"
                  alt="Career Pulse recruitment team in action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-deep-charcoal">Sarah Johnson</p>
                        <p className="text-sm text-deep-charcoal/70">Found her dream job in 2 weeks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 md:mt-24 text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <Link 
                href="/job-search" 
                className="relative inline-flex items-center justify-center py-4 sm:py-5 px-8 sm:px-10 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-primary to-primary-dark rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <span className="mr-2">Start Your Journey</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <div className="mt-4 text-sm text-deep-charcoal/70">
                Join thousands of professionals who trust Career Pulse
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold">Ready to Find Your Perfect Match?</h2>
          <p className="text-lg sm:text-xl text-deep-charcoal/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have found their dream jobs with Career Pulse's expert recruitment team.
          </p>
          <Link href="/job-search" className="btn-primary py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  )
} 