module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'main-hero': "url('/images/main.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
