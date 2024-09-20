/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#D0F9FF',
        'custom-beige': '#E3FAE3',
        'custom-brown': '#faf0e6'
      },
      fontFamily: {
        'catamaran': 'Catamaran',
      },
    },
  },
  plugins: [],
}

