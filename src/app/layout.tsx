import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CareerPulse | Flat-Fee Recruitment Services UK',
  description: 'Hire smarter with CareerPulse. Just 10% for skilled roles or £999 for unskilled hires — no surprises.',
  keywords: 'recruitment, hiring, jobs, careers, UK recruitment, flat-fee recruitment',
  authors: [{ name: 'CareerPulse' }],
  openGraph: {
    title: 'CareerPulse | Flat-Fee Recruitment Services UK',
    description: 'Hire smarter with CareerPulse. Just 10% for skilled roles or £999 for unskilled hires — no surprises.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  )
} 