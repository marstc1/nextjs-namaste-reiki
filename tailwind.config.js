const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      green: colors.emerald,
    },
    fontFamily: {
      serif: [
        'corinthia',
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
    },
    extend: {
      backgroundImage: {
        'main-hero': "url('/images/main.png')",
        'bg-footer': "url('/images/bg-footer.png')",
        'bg-feedback': "url('/images/bg-feedback.png')",
        wave: "url('/images/wave.svg')",
      },
      zIndex: {
        auto: 'auto',
        negative: -1,
        0: 0,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
