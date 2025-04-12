import type { Metadata, Viewport } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import '@/styles/globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Career Pulse | Feel the Beat of Your Next Opportunity',
  description: 'Career Pulse connects top talent with forward-thinking employers, making recruitment feel human, personal, and fast-paced.',
  keywords: ['recruitment', 'jobs', 'career', 'employment', 'hiring', 'talent', 'opportunities'],
  authors: [{ name: 'Career Pulse' }],
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-open-sans" suppressHydrationWarning>
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  )
} 