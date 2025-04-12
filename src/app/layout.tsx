import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Career Pulse Recruitment',
  description: 'Find your next career opportunity with Career Pulse Recruitment',
  keywords: ['recruitment', 'jobs', 'career', 'employment', 'hiring'],
  authors: [{ name: 'Career Pulse' }],
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  )
} 