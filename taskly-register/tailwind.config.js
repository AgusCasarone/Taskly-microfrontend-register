/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Según la guía de Paleta Cromática del documento:
        // https://itrsacomar.sharepoint.com/sgc/SiteAssets/Forms/AllItems.aspx?id=%2Fsgc%2FSiteAssets%2FSitePages%2FBranding%2DITR%2FPaleta%2DCrom%C3%A1tica%2D%2D%2DITR%2D%2D%2D2023%2D%2D1%2D%2Epdf&parent=%2Fsgc%2FSiteAssets%2FSitePages%2FBranding%2DITR

        // PRINCIPALES = 600
        // SECUNDARIOS: light = 300 | dark = 800

        'taskly-woodsmoke': {
          light: '#b5b6c4',
          DEFAULT: '#595a70',
          dark: '#3e3e4e',

          50: '#f7f7f8',
          100: '#ededf1',
          200: '#d7d8e0',
          300: '#b5b6c4',
          400: '#8c8ea4',
          500: '#6e7189',
          600: '#595a70',
          700: '#48495c',
          800: '#3e3e4e',
          900: '#373843',
          950: '#0e0e11',
      },

      'taskly-vermilion': {
        light: '#ffb46d',
        DEFAULT: '#FF4D00',
        dark: '#a12a0b',

        50: '#fff6ec',
        100: '#ffebd3',
        200: '#ffd3a5',
        300: '#ffb46d',
        400: '#ff8932',
        500: '#ff670a',
        600: '#ff4d00',
        700: '#cc3502',
        800: '#a12a0b',
        900: '#82250c',
        950: '#460f04',
    },

        // NEUTROS
        'taskly-white': { DEFAULT: '#ffffff'},
        'taskly-black': { DEFAULT: '#2c2c2c'},
        'taskly-gray': { DEFAULT: '#dbdfed'},
        'taskly-background': { DEFAULT: '#0E0E11'},
      },
      backgroundImage: {
        'logo': "url('/src/assets/logoNaranja.png')",
        'logo-with-text-color': "url('/src/assets/logoColor.jpg')",
        'logo-without-text-orange': "url('/src/assets/logotipoNaranja.png')",
      }
    },
  },
  plugins: [],
}
