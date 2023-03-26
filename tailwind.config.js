/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        primary: "#e11931",
        secondary: "#49b672",
        lightGray: "#f8f9fa",
        gray: "#4a4b4f",
      },

      fontSize: {
        huge: 'clamp(2rem, 6vw, 3rem)',
      },

      fontFamily: {
        roboto : ['Roboto', 'san-serif']
      },

      fontFamily: {
        monument : ['monument', 'regular']
      }

    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
       '2xl': '1496px',
      },
    }

  },
  plugins: [],
}
