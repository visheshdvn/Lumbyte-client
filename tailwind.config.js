const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      // xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    fontFamily: {
      serif: ["Georgia", ...defaultTheme.fontFamily.serif],
      antonio: ["Antonio"],
      raleway: ["Raleway"],
      primary: ["Poppins", ...defaultTheme.fontFamily.serif],
      adminPrimary: ["Quicksand", ...defaultTheme.fontFamily.serif],
      "raleway-dot": ["Raleway Dots"],
      "open-sans-condensed": [
        "Open Sans Condensed",
        ...defaultTheme.fontFamily.sans,
      ],
      "open-sans": ["Open Sans", ...defaultTheme.fontFamily.sans],
      mono: [...defaultTheme.fontFamily.mono],
    },
    extend: {
      fontSize: {
        "10xl": "10rem",
        "7.5xl": "5rem",
        "4.5xl": "2.5rem",
        "4.75xl": "2.75rem",
        "3.5xl": "2rem",
        "2.75xl": "1.75rem",
        "5.5xl": "52px",
      },
      colors: {
        grayText: "rgb(117, 117, 117)",
        "bquote-dark": "rgba(75, 75, 75, 0.5)",
        white: "white",
        black: "black",
        transparent: "transparent",
        "yellow-75": "rgba(251,191,36,0.75)",
        "whiteMain-50": "rgba(250, 250, 250, 0.5)",
        grayMain: "#262611",
        darkGray: "#121212",
        margins: "rgba(117,117,117, 0.25)",
        "black-10": "rgba(0,0,0,0.1)",
        // default colors
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
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
  ],
};
