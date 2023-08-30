/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        palette: {
          50: "#effcfd",
          100: "#def9fa",
          200: "#bef3f5",
          300: "#9dedf0",
          400: "#7de7eb",
          500: "#5ce1e6",
          600: "#4ab4b8",
          700: "#37878a",
          800: "#255a5c",
          900: "#122d2e"
        }
      }
    }
  }
}