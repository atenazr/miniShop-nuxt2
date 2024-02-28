/** @type {import('tailwindcss').Config} */
module.exports = {
  development: true,
  // mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./**/*.{js,ts,jsx,tsx,mdx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#686868',
        'light-gray': '#919191',
        'secondary-gray':'#a8a8a8',
      }
    },
  },
  plugins: [],
}

