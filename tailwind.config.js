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
      "raleway-dot": ["Raleway Dots"],
      "open-sans": ["Open Sans Condensed", ...defaultTheme.fontFamily.sans],
      mono: [...defaultTheme.fontFamily.mono],
      adminPrimary: ["Quicksand", ...defaultTheme.fontFamily.serif],
    },
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      "yellow-75": "rgba(251,191,36,0.75)",
      whiteMain: "#fafafa",
      "whiteMain-50": "rgba(250, 250, 250, 0.5)",
      grayMain: "#262611",
      darkGray: "#121212",
      margins: "rgba(117,117,117, 0.25)",
      "black-10": "rgba(0,0,0,0.1)",
      // default colors
      blue: colors.blue,
      yellow: colors.yellow,
      purple: colors.purple,
      slate: colors.slate,
      green: colors.green,
      // old
      current: "currentColor",
      lightBlue: colors.sky,
      gray: colors.gray,
      trueGray: colors.trueGray,
      red: colors.red,
      cyan: colors.cyan,
    },
    extend: {
      fontSize: {
        "10xl": "10rem",
        7.5: "5rem",
        "4.5xl": "2.5rem",
        "4.75xl": "2.75rem",
        "3.5xl": "2rem",
        "2.75xl": "1.75rem",
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
        5.5: "22px",
      },
      width: {
        25: "100px",
      },
      letterSpacing: {
        custom: "12px",
      },
      padding: {
        113: "113px",
      },
      margin: {
        18: "74px",
      },
    },
  },
  variants: {
    extend: {
      brightness: ["hover", "focus"],
      fontWeight: ["hover", "focus"],
    },
  },
  // plugins: [require("@tailwindcss/typography")],/
};
