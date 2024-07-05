/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        cursive: ["cursive"],
        txtRegular: "Text-Regular",
      },
      colors: {
        primary: "#06B6D4",
        dark: "#171717",
        light: "#fff",
        "dark-2": "#212121",
        "light-2": "#f0f0f0",
        "dark-2h": "#333",
        "light-2h": "#f8f9fa",
        "dark-txt": "#212529",
        "light-txt": "#f8f9fa",
        "dark-2-txt": "#343a40",
        "light-2-txt": "#ced4da",
      },
    },
  },
  plugins: [],
};
