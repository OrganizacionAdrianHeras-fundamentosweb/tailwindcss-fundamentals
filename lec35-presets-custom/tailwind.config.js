/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  presets: [
    require('./presets/mypreset')
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

