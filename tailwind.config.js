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
        secondary: '#FF6B6B',
        dark: '#2C3E50',
        light: '#F8F9FA',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        opensans: ['var(--font-opensans)'],
      },
      fontSize: {
        'h1': ['42px', '1.2'],
        'h2': ['28px', '1.3'],
        'body': ['16px', '1.5'],
        'caption': ['12px', '1.4'],
      },
    },
  },
  plugins: [],
} 