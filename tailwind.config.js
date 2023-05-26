/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'day': "url('/public/icons/day.webp')",
        'night': "url('/public/icons/night_1.jpeg')",
      }
    },
  },
  plugins: [],
}

