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
        twirl:{
          "0%": { transform: "rotate(0deg)"},
          "100%": { transform: "rotate(360deg)"},
        },
        fadeIn1:{
          from: { opacity:0},
          to: { opacity:1}
        },
        fadeIn2:{
          from: { opacity:0},
          to: { opacity:1}
        },
        fadeIn3:{
          from: { opacity:0},
          to: { opacity:1}
        },
      },
      animation: {
        blob: "blob 7s linear infinite",
        twirl: "twirl 1.5s linear",
        fadeIn1: "fadeIn1 1s ease-in",
        fadeIn2: "fadeIn2 2s ease-in",
        fadeIn3: "fadeIn3 3s ease-in",
      },
      backgroundImage: {
        hero: "url('../src/assets/images/IMG-1120.png')"
      },
      transformOrigin: {
        baton: '80% 0%'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
