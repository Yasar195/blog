/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': {
            800: '#1c1917',
            100: '#f1f5f9'
        },
        'typ': {
          100: '#f1f5f9'
        }
      }
    },
  },
  plugins: [],
}
