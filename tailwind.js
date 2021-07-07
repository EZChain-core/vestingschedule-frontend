const {
  theme: { fontSize, lineHeight, spacing }
} = require('tailwindcss/defaultConfig')
module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      1.5: '0.375rem',
      2.5: '0.625rem',
      4.5: '1.125rem',
      18: '4.5rem',
      30: '7.5rem',
      ...spacing
    },
    truncate: {
      lines: {
        2: '2',
        3: '3',
        4: '4'
      }
    },
    fontSize: {
      '2.5xl': '1.75rem',
      '3.5xl': '2rem',
      '4.5xl': '2.5rem',
      '6.5xl': '4rem',
      ...fontSize
    },
    lineHeight: {
      3.5: '0.875rem',
      5.5: '1.375rem',
      6.5: '1.5625rem',
      7.5: '1.875rem',
      12: '3rem',
      12.5: '3.125rem',
      slideSm: '60px',
      slideXl: '140px',
      ...lineHeight
    },
    extend: {
      colors: {
        VNDG: {
          buttonBlue: '#0066CC',
          stateBlue: '#3385D6',
          yellow: '#3385D6',
          red: '#F7685B',
          green: '#2ED47A',
          dRed: '#E42E2E',
          gray600: '#718096',
          gray700: '#4A5568',
          tableGray: '#707683',
          mainDblue: '#213A52',
          newGray: '#A3A6B1',
          disableGray: '#E5E5E5',
          darkBlue: '#334D6E',
          gray: '#90A0B7',
          iconGray: '#C2CFE0',
          grayCyan: '#EDF2F7',
          lightGrayCyan: '#F7FAFC',
          gCyan: '#4FD1C5'
        }
      }
    }
  },
  variants: {},
  plugins: [require('tailwindcss-truncate-multiline')(['responsive', 'hover'])],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production'
    // content: ['components/**/*.vue', 'views/**/*.vue', 'plugins/**/*.js', 'vue.config.js']
  }
}
