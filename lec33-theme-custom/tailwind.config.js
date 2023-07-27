/** @type {import('tailwindcss').Config} */
/*
Haciendo uso de theme, puedes reemplazar en su totalidad, objetos de estilos propios
de tailwindcss
*/
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '400px',
      md: '600px',
      lg: '900px',
      xl: '1440px',
    },
    colors: {
      blue: {
        dark: '#084a80',
        light: '#74d1ee',
        default: '#277abe',
      }
    },
    spacing: {
      '1.5': '400px',
    },
    extend: {},
  },
  plugins: [],
}

