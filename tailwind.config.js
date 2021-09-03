const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    fontFamily: {
      serif: ["Georgia", ...defaultTheme.fontFamily.serif],
      antonio: ["Antonio"],
      raleway: ["Raleway"],
      "open-sans": ["Open Sans Condensed", ...defaultTheme.fontFamily.sans],
      "raleway-dot": ["Raleway Dots"],
      // old
      "bungee-shade": ["Bungee Shade", "PT Sans Narrow", "sans"],
      "pt-sans": ["PT Sans Narrow", "Arial Narrow Bold", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      "roboto-cond": [
        "Roboto Condensed",
        "Arial Narrow",
        "PT Sans Narrow",
        "sans-serif",
      ],
    },
    colors: {
      whiteMain: "#fafafa",
      "whiteMain-50": "rgba(250, 250, 250, 0.5)",
      grayMain: "#262611",
      margins: "rgba(117,117,117, 0.25)",
      "yellow-75": "rgba(251,191,36,0.75)",
      // old
      white: "white",
      black: "black",
      darkGray: "#121212",
      transparent: "transparent",
      current: "currentColor",
      lightBlue: colors.lightBlue,
      gray: colors.gray,
      trueGray: colors.trueGray,
      red: colors.red,
      cyan: colors.cyan,
    },
    extend: {
      fontSize: {
        "10xl": "10rem",
        "7.5": "5rem",
        "4.5xl": "2.5rem",
        "4.75xl": "2.75rem",
        "2.75": "1.75rem",
      },
      colors: {
        grayText: "rgb(117, 117, 117)",
        "bquote-dark": "rgba(75, 75, 75, 0.5)",
      },
      lineHeight: {
        7.5: "1.875rem",
      },
      height: {
        100: "41.625rem",
        38: "9.7775rem",
        27: "107.55px",
        25: "100px",
        "5.5": "22px"
      },
      width: {
        25: "100px",
      },
      letterSpacing: {
        "custom": "12px"
      },
      padding: {
        "113": "113px"
      }
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [require("@tailwindcss/typography")],/
};
