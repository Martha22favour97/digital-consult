/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pri: "#164e63",
        sec: "#3b2b8a",
        acc: "#f97316" ,
        alt: "#db2777"
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
