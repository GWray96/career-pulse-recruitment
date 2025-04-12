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
        'pulse-blue': '#1A73E8',
        'bright-coral': '#FF6B6B',
        'deep-charcoal': '#2F2F2F',
        'cool-gray': '#D6D6D6',
        primary: {
          DEFAULT: '#1A73E8',
          50: '#E8F1FE',
          100: '#D1E3FD',
          200: '#A3C7FB',
          300: '#75ABF9',
          400: '#478FF7',
          500: '#1A73E8',
          600: '#155CBB',
          700: '#10458E',
          800: '#0A2E61',
          900: '#051734',
          950: '#030C1A',
        },
        background: '#ffffff',
        foreground: '#000000',
        secondary: {
          DEFAULT: '#FF6B6B',
          50: '#FFF0F0',
          100: '#FFE0E0',
          200: '#FFC1C1',
          300: '#FFA2A2',
          400: '#FF8383',
          500: '#FF6B6B',
          600: '#FF3333',
          700: '#FF0000',
          800: '#CC0000',
          900: '#990000',
          950: '#4D0000',
        },
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
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