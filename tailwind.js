module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production'
    // content: ['components/**/*.vue', 'views/**/*.vue', 'plugins/**/*.js', 'vue.config.js']
  }
}
