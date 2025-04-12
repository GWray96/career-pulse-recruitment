import Link from 'next/link'
import Container from '@/components/ui/Container'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-white py-16 sm:py-24">
          <Container>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Hire Smarter. Pay Less.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Flat-fee recruitment that delivers. Just 10% for skilled roles and £999 for unskilled hires — no hidden fees, no fluff.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/employer-form"
                  className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Hire with CareerPulse
                </Link>
                <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How It Works
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Submit your job',
                  description: 'Simple form submission process',
                },
                {
                  title: 'We promote and screen',
                  description: 'Our vetting process',
                },
                {
                  title: 'You interview and hire',
                  description: 'Only pay after successful hire',
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Why CareerPulse Section */}
        <section className="bg-white py-16 sm:py-24">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why CareerPulse
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Transparent pricing',
                  description: '10% or £999 - no surprises',
                },
                {
                  title: 'Fast turnaround',
                  description: '48-hour initial response',
                },
                {
                  title: 'Pre-vetted talent',
                  description: 'Quality candidates only',
                },
                {
                  title: 'Zero payment until hire',
                  description: 'Pay only when you find the right candidate',
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-gray-50 p-8"
                >
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Industries Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Industries We Serve
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {[
                'IT & Technology',
                'Healthcare',
                'Finance',
                'Education',
                'Manufacturing',
                'Retail',
                'Construction',
                'Hospitality',
              ].map((industry) => (
                <div
                  key={industry}
                  className="rounded-lg bg-white p-6 text-center shadow-sm"
                >
                  <p className="text-sm font-semibold text-gray-900">{industry}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Final CTA Section */}
        <section className="bg-blue-600 py-16 sm:py-24">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your hiring process?
              </h2>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/employer-form"
                  className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100"
                >
                  Post a job now
                </Link>
                <Link
                  href="/job-seeker-form"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Looking for work? <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
} 