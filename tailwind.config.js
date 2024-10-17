/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        theme: {
          light: '#ffffff',
          primary: '#3c6e71',
          secondary: '#d9d9d9',
        },
      },
      fontFamily: {
        'sans': ["Montserrat", 'sans-serif'],
      },
    },

  },
  plugins: [],
}

