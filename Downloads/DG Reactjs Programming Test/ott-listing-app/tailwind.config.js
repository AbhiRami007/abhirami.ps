/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-image": "url('/src/Slices/nav_bar.png')"
      }
    }
  },
  plugins: []
};