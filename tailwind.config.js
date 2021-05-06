module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      margin: ['last', 'odd', 'even']
    },
  },
  plugins: []
}
