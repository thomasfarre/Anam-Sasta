/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      dancing: ["'Dancing Script'", "cursive"],
      tenali: ["'Tenali Ramakrishna'", "sans-serif"],
    },
    extend: {
      colors: {
        lemon: {
          50: "#FFF9ED",
          100: "#FFEECC",
          200: "#FCD591",
          300: "#F7BE64",
          400: "#F89720",
          500: "#DC7304",
          600: "#AC5106",
          700: "#A34305",
          800: "#7A2C00",
          900: "#571F00",
        },
        mauve: {
          50: "#FBF4FA",
          100: "#F5E0F0",
          200: "#EAC8E2",
          300: "#DDB0D4",
          400: "#C289B6",
          500: "#AF6AA0",
          600: "#874578",
          700: "#6E3562",
          800: "#56254B",
          900: "#45173B",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};


