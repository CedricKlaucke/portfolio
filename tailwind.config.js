module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        neutral: {
          850: '#202020'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
