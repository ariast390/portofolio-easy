/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./dist/projects/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B9C85",
        secondary: "#1b439c",
        third: "#136d65",
        white: "#F0F0F0",
        dark: "#4C4C6D",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
