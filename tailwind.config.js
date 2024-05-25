/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'share-tech': 'Share Tech'
      },
      backgroundImage: {
        banner: 'url(./src/assets/banner-fhd.png)'
      },
      colors: {
        'main-red': '#f51848'
      }
    },
  },
  plugins: [],
}

