module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          0: '#000000',
          100: '#181818',
          200: '#202020',
          300: '#333333'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
