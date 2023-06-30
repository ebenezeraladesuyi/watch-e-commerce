/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heroBg1': '#192F54',
        'heroBg': '#000000',
        'color1':  '#eef0f3',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        watchBg: 'url("./src/assets/watches/watchBg.jpg")',
      }
    },
  },
  plugins: [],
}

