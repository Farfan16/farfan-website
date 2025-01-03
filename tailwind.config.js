/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "cus-beige": "#a58d82",
        "cus-ivory": "#d4c4b7",
        "cus-deep-brown": "#2c1b18",
        "cus-maroon": "#5d2e2a",
        "cus-red": "#8e3b36",
      },
      objectPosition: {
        "center-bottom": "center 70%",
      },
      boxShadow: {
        "l-shadow": "-5px 0px 8px 0px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
