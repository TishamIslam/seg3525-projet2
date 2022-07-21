/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#FFD700',
          dark: '#D9B910',
          DEFAULT: '#ECC807',
        },
        green: {
          light: '#0C5C22',
          dark: '#073C15',
          DEFAULT: '#094C1C'
        },
        mint: {
          light: '#CFFEDC',
          dark: '#7DDB98',
          DEFAULT: '#A0EBB5'
        },
        crimson: {
          DEFAULT: '#980000'
        }
      },
      ringOffsetWidth: {
        '3': '3px',
      },
      fontFamily: {
        'sans': ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'serif': ['Source Serif Pro', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
