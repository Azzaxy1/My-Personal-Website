/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#1f2937",
      },
      container: true,
      fontFamily: {
        body: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};





