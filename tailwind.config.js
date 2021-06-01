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
      "pt-sans": ["PT Sans Narrow", "Arial Narrow Bold", "sans-serif"],
    },
  },
  variants: {
    extend: {
      borderWidth: ["last"],
      margin: ["last", "odd", "even"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
