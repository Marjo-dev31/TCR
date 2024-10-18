const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      lemon: ["lemon", "sans-serif"],
    },
    extend: {
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1.1)"},
          "33%": { transform: "translate(50px, -70px) scale(1)"},
          "66%": { transform: "translate(-30px, 30px) scale(0.9)"},
          "100%": { transform: "translate(0px, 0px) scale(1.1)"},
        },
      },
      animation: {
        blob: "blob 7s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
