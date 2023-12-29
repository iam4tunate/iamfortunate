/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neueLight: ["neue-light", "sans-serif"],
        neue: ["neue", "sans-serif"],
        neueMedium: ["neue-medium", "sans-serif"],
        neueBold: ["neue-bold", "sans-serif"],
      },
      colors: {
        black: "#171717",
        gainsboro: "#E1DFDD",
        brightGray: "#EDF0F1",
      },
      screens:{
        'xs': '400px',
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar-hide")],
};
