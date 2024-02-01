/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'flowers': "url('../img/bg.jpg')",
      },
      fontFamily: {
        'lover1': ['"Gamja Flower"', 'cursive'],
        'single_day': ['"Single Day"', 'cursive'],
      },
    },
  },
  plugins: [],
}