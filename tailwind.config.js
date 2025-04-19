/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],//这个插件能够让你更轻松地为你的 HTML 内容添加美观且易于阅读的排版样式
  darkMode: "class",
}