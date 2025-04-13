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
        // Brand Colors
        'pulse-orange': '#F05A28',
        'deep-navy': '#1D2A4D',
        'light-grey': '#9DA4AE',
        'charcoal-grey': '#333740',
        
        // For compatibility with existing code
        'primary': {
          DEFAULT: '#1D2A4D',
          '50': '#EFF1F5',
          '100': '#D8DDE8',
          '200': '#ACBAD0',
          '300': '#8096B8',
          '400': '#5472A0',
          '500': '#3A5285',
          '600': '#1D2A4D',
          '700': '#15203A',
          '800': '#0E1527',
          '900': '#070A14',
        },
        'accent': {
          DEFAULT: '#F05A28',
          '50': '#FEE9E1',
          '100': '#FDD4C4',
          '200': '#FAAA8A',
          '300': '#F8804F',
          '400': '#F05A28',
          '500': '#DD3F0C',
          '600': '#B5330A',
          '700': '#8E2808',
          '800': '#661D06',
          '900': '#3F1203',
        },
        
        // Deep charcoal for text
        'deep-charcoal': '#333740',
      },
      fontFamily: {
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'body': ['Open Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
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
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-medium': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} 