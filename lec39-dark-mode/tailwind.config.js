/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // darkMode: 'class', // Modo manual -> solo aplica el modo oscuro cuando a la etiqueta <html> le agreguemos la clase dark
  darkMode: 'media', // Modo automático
  theme: {
    extend: {},
  },
  plugins: [],
}

