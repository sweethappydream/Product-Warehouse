/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderWidth: {
        default: '1px'
      },
      backgroundColor: {
        card: '#172238',
        mainBack: '#263b63'
      }
    },
  },
  plugins: [],
}
