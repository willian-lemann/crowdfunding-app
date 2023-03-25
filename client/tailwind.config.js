/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#12121a",
      },
      fontFamily: {
        primary: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
