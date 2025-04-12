import Link from 'next/link'
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'For Employers', href: '/employer-form' },
    { name: 'For Job Seekers', href: '/job-seeker-form' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms', href: '/terms' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: FacebookIcon,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: TwitterIcon,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: LinkedinIcon,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: InstagramIcon,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-blue-600">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-10 border-t border-gray-900/10 pt-8">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} CareerPulse. All rights reserved.
          </p>
          <p className="mt-2 text-center text-xs leading-5 text-gray-500">
            <Link href="https://wa.me/447570130920" className="hover:text-blue-600">
              WhatsApp: +44 7570 130920
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
} 