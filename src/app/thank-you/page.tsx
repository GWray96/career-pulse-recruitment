import Link from 'next/link'
import Container from '@/components/ui/Container'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CheckCircle } from 'lucide-react'

export default function ThankYou() {
  return (
    <>
      <Header />
      <main className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Thank you for your submission!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We have received your information and will be in touch shortly.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="text-base font-semibold text-blue-600 hover:text-blue-500"
              >
                Return to homepage <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
} 