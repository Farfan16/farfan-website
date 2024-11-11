/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "cus-black": "#17153B",
        "cus-dark-navy": "#2E236C",
        "cus-light-navy": "#433D8B",
        "cus-purple": "#C8ACD6",
      },
    },
  },
  plugins: [],
};
