const colors = require("tailwindcss/colors")
module.exports = {
  purge: {
    content: ['./app/templates/*.html', './app/templates/**/*.html'], options: {
      keyframes: true, safelist: [
        "type"],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: '.675rem'
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      colors: {'c-gray': 'rgb(27, 22, 34)'}
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      borderRadius: ['hover', 'focus']
    },
    neumorphismFlat: ['responsive'],
    neumorphismConcave: false,
    neumorphismConvex: ['responsive', 'hover'],
    neumorphismInset: ['focus', 'active'],

  }
}
