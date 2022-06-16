/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      "rich-black": "#042A2B",
      blue: "#5EB1BF",
      cyan: "#CDEDF6",
      purple: "#8383bd",
    },
    // fontWeight: {
    //   hairline: 100,
    //   "extra-light": 100,
    //   thin: 200,
    //   light: 300,
    //   normal: 400,
    //   medium: 500,
    //   semibold: 600,
    //   bold: 700,
    //   extrabold: 800,
    //   "extra-bold": 800,
    //   black: 900,
    // },
    extend: {},
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
  },
  plugins: [],
};
