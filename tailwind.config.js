const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1280px",
    },
    fontFamily: {
      serif: ["Georgia", ...defaultTheme.fontFamily.serif],
      "pt-sans": ["PT Sans Narrow", "Arial Narrow Bold", "sans-serif"],
      "bungee-shade": ["Bungee Shade", "PT Sans Narrow", "sans"],
      coda: ["Coda", "PT Sans Narrow"],
    },
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      current: "currentColor",
      lightBlue: colors.lightBlue,
      gray: colors.gray,
      trueGray: colors.trueGray,
      red: colors.red
    },
    extend: {
      fontSize: {
        "4.5xl": "2.5rem",
      },
      colors: {
        grayText: "#757575"
      },
      lineHeight: {
        "7.5": "1.875rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [require("@tailwindcss/typography")],/
}
