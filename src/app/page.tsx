import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          Welcome to Career Pulse Recruitment
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Connecting talented professionals with outstanding opportunities
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/employer-form"
            className="btn btn-primary"
          >
            Post a Job
          </Link>
          <Link 
            href="/job-search"
            className="btn btn-secondary"
          >
            Find Jobs
          </Link>
        </div>
      </div>
    </div>
  )
} 