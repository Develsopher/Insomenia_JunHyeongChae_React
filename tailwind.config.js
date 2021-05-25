const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   gray: colors.coolGray,
    //   red: colors.red,
    //   yellow: colors.amber,
    //   green: colors.emerald,
    //   blue: colors.blue,
    //   indigo: colors.indigo,
    //   purple: colors.violet,
    //   pink: colors.pink,
    // },
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
