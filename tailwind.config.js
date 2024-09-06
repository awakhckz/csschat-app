/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'PaleViolet': 'hsl(276, 100%, 81%)',
  'ModerateViolet': 'hsl(276, 55%, 52%)',
  'DesaturatedDarkViolet': 'hsl(271, 15%, 43%)',
  'GrayishBlue': 'hsl(206, 6%, 79%)',
  'VeryDarkDesaturatedViolet': 'hsl(271, 36%, 24%)',
  'DarkGrayishViolet': 'hsl(270, 7%, 64%)',
  'linear': 'hsl(264, 100%, 61%), hsl(293, 100%, 63%)',
  'LightGrayishViolet': 'hsl(270, 20%, 96%)',
  'VeryLightMagenta': 'hsl(289, 100%, 72%)',
      },

      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      } 
    },
  },
  plugins: [],
}

