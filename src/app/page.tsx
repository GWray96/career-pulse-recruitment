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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 mix-blend-multiply"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6 leading-tight">
                  <span className="block">Find Your Perfect</span>
                  <span className="block text-accent">Career Match</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Career Pulse connects talented professionals with innovative companies. 
                  Whether you're hiring or looking to be hired, we've got you covered.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link 
                    href="/job-search" 
                    className="btn-primary bg-white text-primary hover:bg-white/90 text-center py-4 px-6 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Find Opportunities
                  </Link>
                  <Link 
                    href="/employer-form" 
                    className="btn-secondary bg-accent text-white hover:bg-accent/90 text-center py-4 px-6 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Post a Job
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                    ))}
                  </div>
                  <p className="text-white/80">
                    <span className="font-bold">10,000+</span> professionals hired
                  </p>
                </div>
              </div>
              
              {/* Right Column - Stats/Features */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-white mb-2">85%</div>
                    <p className="text-white/80 text-sm">Faster hiring process</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-white mb-2">3x</div>
                    <p className="text-white/80 text-sm">More quality candidates</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-white mb-2">50%</div>
                    <p className="text-white/80 text-sm">Cost reduction</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <p className="text-white/80 text-sm">AI-powered matching</p>
                  </div>
                </div>
                
                {/* Search Box */}
                <div className="mt-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search jobs, skills, or companies..."
                      className="w-full py-4 px-6 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-md hover:bg-primary-dark transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-white/70 text-sm">Popular:</span>
                    {['Remote', 'Tech', 'Marketing', 'Sales'].map((tag) => (
                      <button key={tag} className="text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full transition-colors duration-200">
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
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Why Choose Career Pulse?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Modern & Fast</h3>
              <p className="text-deep-charcoal/70">
                Stay in sync with the latest opportunities in your field with our real-time job matching.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Human Touch</h3>
              <p className="text-deep-charcoal/70">
                Experience recruitment that feels personal and supportive, not robotic.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Perfect Match</h3>
              <p className="text-deep-charcoal/70">
                Our smart matching system connects you with opportunities that truly fit your career pulse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Ready to Find Your Rhythm?</h2>
          <p className="text-xl text-deep-charcoal/80 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have found their perfect career match with Career Pulse.
          </p>
          <Link href="/job-search" className="btn-primary">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  )
} 