/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gt: {
          gold: '#B3A369',
          navy: '#003057',
          white: '#FFFFFF',
          gray: '#54585A',
          pi: '#D6DBD4',
          diploma: '#F9F6E5',
          buzz: '#EAAA00',
          purple: '#5F249F',
          boldblue: '#3A5DAE',
          teal: '#008C95',
          electric: '#64CCC9',
          lime: '#A4D233',
        },
      },
      borderRadius: {
        'hero': '1.75rem',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
      },
    },
  },
  plugins: [],
}

