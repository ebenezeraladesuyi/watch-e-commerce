/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heroBg': '#192F54',
        'color1':  '#eef0f3',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

