/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          black: '#1a1a1a',
          dark: '#2d2d2d',
          gray: '#4a5568',
          light: '#f8fafc',
          accent: '#f97316', // Construction Orange
          blue: '#3b82f6', // Muted Blue
          steel: '#64748b',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
