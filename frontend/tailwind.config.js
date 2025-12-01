/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage-green': '#A3B899',
        'pastel-lime': '#E6EFDC',
        'creamy-white': '#FDFDFC',
        'dark-grey': '#4A4A4A',
        'soft-red': '#E57373',
      },
    },
  },
  plugins: [],
}
