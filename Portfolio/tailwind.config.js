/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-dark-blue': '#131B2E',
        backgroundC:'#f06418',
        BorderC:'#f06418',
        HoverC:'#ffe0cf',
        LightBackC:'#ffe0cf'

      }
     
    },
  },
  plugins: [],
}