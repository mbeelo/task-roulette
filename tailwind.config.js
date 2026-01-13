/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a2e',
        'dark-card': '#2d2d44',
        'dark-accent': '#00f5ff',
        'dark-hover': '#3a3a5a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'bounce-subtle': 'bounce 1s ease-in-out',
      }
    },
  },
  plugins: [],
}