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
      "2xl": "1336px",
    },
    fontFamily: {
      serif: ["Georgia", ...defaultTheme.fontFamily.serif],
      "bungee-shade": ["Bungee Shade", "PT Sans Narrow", "sans"],
      "pt-sans": ["PT Sans Narrow", "Arial Narrow Bold", "sans-serif"],
      "roboto": ["Roboto", "sans-serif"],
      "roboto-cond": ["Roboto Condensed", "Arial Narrow", "PT Sans Narrow", "sans-serif"],
    },
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      current: "currentColor",
      lightBlue: colors.lightBlue,
      gray: colors.gray,
      trueGray: colors.trueGray,
      red: colors.red,
      cyan: colors.cyan
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
      },
      height: {
        100: "29rem",
        38: "9.7775rem",
        27: "107.55px",
        25: "100px"
      },
      width: {
        25: "100px"
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  // plugins: [require("@tailwindcss/typography")],/
}
