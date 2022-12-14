/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-image": "url('/public/Slices/nav_bar.png')"
      }
    }
  },
  plugins: []
};
