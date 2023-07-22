/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      ssTheme: {
        darkest: "rgb(40, 35, 57)",
        darker: "rgb(51, 53, 66)",
        dark: "rgb(60, 66, 86)",
        gray: "rgb(106, 106, 143)",
        grayPurple: "rgb(153, 153, 207)",
        yellow: "rgb(244, 209, 119)",
        darkYellow: "rgb(191, 165, 122)",
        blue: "rgb(180, 180, 242)",
        darkPurple: "rgb(98, 48, 140)",
        purple: "rgb(160, 122, 191)",
      },
    },
    screens: {
      desktop: "1000px",
      minDesktop: "936px",
    },
    extend: {},
  },
  plugins: [],
};
