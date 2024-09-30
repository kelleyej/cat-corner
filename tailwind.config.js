/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#D0F9FF',
        'custom-beige': '#E3FAE3',
        'custom-brown': '#FFFAF4',
        'custom-bronze': '#CD7F2D',
        'custom-purple': '#DBCFE3'
      },
      fontFamily: {
        'catamaran': 'Catamaran',
      },
      backgroundImage: {
        'hero-pattern': "url('/catBackground.jpeg')"
      }
    },
  },
  plugins: [],
}

