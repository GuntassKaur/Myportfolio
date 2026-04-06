/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#0A0F1F',
        },
        purple: {
          500: '#6C5DD3',
          600: '#8E7CFF',
          900: '#1F1568',
        },
        cyan: {
          400: '#3CD7FF',
          500: '#70E5FF',
          600: '#1AABCC',
        },
        magenta: {
          500: '#FF3ACD',
          600: '#FF5CDB',
          900: '#681552',
        },
        yellow: {
          500: '#FFD700',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
