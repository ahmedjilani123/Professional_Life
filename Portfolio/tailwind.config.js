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
      },
      backgroundImage: {
        'back-one': `url('./src/images/experience.jpg')`,
        'back-two':`url('./src/images/technical_skill.jpg')`,
        'sap-icon':`url('./src/images/saplogo.png')`,
        'sap-capm':`url('./src/images/sapcapm.png')`,
         'sap-bas':`url('./src/images/toolbas.png')`,
          'sap-webide':`url('./src/images/webide.png')`
      },
     
    },
  },
  plugins: [],
}