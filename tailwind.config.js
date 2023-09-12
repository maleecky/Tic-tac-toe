/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fefefe",
        black: "#1e1e1e",
        primarycrlActiveBtn: "#ffa8a8",
        secondaryActivecrlBtn: "#ffd2d2",
        normalBtn: "#eaeaea",
        h1CrlMix: "#f60000",
        normalFill: "#7e7e7e",
      },
      screens: {
        xsm: "415px",
        sm: "486px",
        ssm: "285px",
        wc: "200px",
      },
    },
  },
  plugins: [],
};
