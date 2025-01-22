/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#a855f7',
        accent1: '#ec4899',
        accent2: '#8b5cf6',
        accent3: '#06b6d4',
      },
      boxShadow: {
        'glass': '0 8px 32px -4px rgba(31, 41, 55, 0.1)',
        'glass-sm': '0 4px 16px -4px rgba(31, 41, 55, 0.1)',
        'glass-lg': '0 12px 40px -4px rgba(31, 41, 55, 0.15)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'slide-in': 'float-in 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        'fade-in': 'fade-in 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}