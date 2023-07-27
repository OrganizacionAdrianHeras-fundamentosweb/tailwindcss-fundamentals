/** @type {import('tailwindcss').Config} */
/*
Haciendo uso de theme.extend, puedes agregar nuevos estilos a los objetos propios
de tailwindcss
*/
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
      },
      colors: {
        'primary': '#0f7cd6'
      },
      padding: {
        '4.5': '4.5px'
      }
    },
  },
  plugins: [],
}

