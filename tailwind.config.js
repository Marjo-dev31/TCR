const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      lemon: ["lemon", "sans-serif"],
      roboto: ["roboto", "sans-serif"],
      hind: ["hind", "sans-serif"],
    },
    extend: {
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1.1)" },
          "33%": { transform: "translate(50px, -70px) scale(1)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1.1)" },
        },
        twirl: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeIn1: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeIn2: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeIn3: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeIn4: {
          "0%": { opacity: 0, transform: "translateY(-100px)" },
          "66%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        fadeIn5: {
          "0%": { opacity: 0, transform: "translateY(100px)" },
          "66%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        fadeIn6: {
          "0%": { opacity: 0, transform: "translateX(-100px)" },
          "66%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        fadeIn7: {
          "0%": { opacity: 0, transform: "translateX(100px)" },
          "66%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
      },
      animation: {
        blob: "blob 7s linear infinite",
        twirl: "twirl 1s linear",
        fadeIn1: "fadeIn1 1.5s ease-in",
        fadeIn2: "fadeIn2 2s ease-in",
        fadeIn3: "fadeIn3 3s ease-in",
        fadeIn4: "fadeIn4 3s ease-in",
        fadeIn5: "fadeIn5 3s ease-in",
        fadeIn6: "fadeIn6 3s ease-in",
        fadeIn7: "fadeIn7 3s ease-in",
      },
      backgroundImage: {
        hero: "url('../src/assets/images/IMG-1120.png')",
      },
      transformOrigin: {
        baton: "80% 0%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
