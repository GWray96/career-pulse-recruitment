import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 animate-pulse-brand">
            Feel the Beat of Your Next Opportunity
          </h1>
          <p className="text-xl text-deep-charcoal/80 mb-8">
            We're here to help you find more than just a job — we help you find your rhythm. 
            Let's connect and discover where your career pulse is strongest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/employer-form" className="btn-primary">
              Post a Job
            </Link>
            <Link href="/job-search" className="btn-secondary">
              Find Opportunities
            </Link>
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