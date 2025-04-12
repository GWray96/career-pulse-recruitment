/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',
        'primary-dark': '#0D47A1',
        'primary-50': '#E8F0FE',
        secondary: '#FF6B6B',
        accent: '#FF6B6B',
        dark: '#2C3E50',
        light: '#F8F9FA',
        'deep-charcoal': '#333333',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        opensans: ['var(--font-opensans)'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
      spacing: {
        '18': '4.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
} 