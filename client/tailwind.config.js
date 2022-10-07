/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderWidth: {
        default: '1px'
      },
      backgroundColor: {
        mainBack: '#AAAAAA'
      }
    },
  },
  plugins: [],
}
