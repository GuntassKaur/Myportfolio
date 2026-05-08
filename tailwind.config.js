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
          card: 'rgba(255, 255, 255, 0.05)',
        },
        royal: {
          500: '#7C3AED',
          600: '#6D28D9',
          900: '#4C1D95',
        },
        neon: {
          cyan: '#06B6D4',
          purple: '#A855F7',
        },
        gold: {
          highlight: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'tilt': 'tilt 10s infinite linear',
        'shine': 'shine 8s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shine': {
          'to': { 'background-position': '200% center' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

