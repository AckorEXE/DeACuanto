/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: {
            bg: '#EAF4EC',
            card: '#FBFEFC',
            primary: '#1B6E3B',
            primaryHover: '#155A30',
            text: '#0F2A1A',
            subtext: '#3F5B4A',
            border: '#CFE6D6',
          },
          dark: {
            bg: '#070B08',
            card: '#0F1712',
            primary: '#4EBA74',
            primaryHover: '#5FD188',
            text: '#EAF6EE',
            subtext: '#9BB8A8',
            border: '#1E2C22',
          }
        }
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand: ['Indie Flower', 'cursive'],
      },
    }
  },
  safelist: [
    'bg-brand-light-primary', 'dark:bg-brand-dark-primary',
    'text-white', 'border-brand-light-primary', 'dark:border-brand-dark-primary',
    'text-brand-light-subtext', 'dark:text-brand-dark-subtext',
    'border-brand-light-border', 'dark:border-brand-dark-border',
    'text-brand-light-primary', 'dark:text-brand-dark-primary',
    'text-rose-500',
  ],
  plugins: [],
}
