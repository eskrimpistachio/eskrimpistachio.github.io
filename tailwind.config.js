module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#171717',
        secondary : '#FFFFFF',
        complementary : {
          100 : '#E32F5D',
          200 : '#DA0037',
        }
      },
      fontFamily:{
        primaryFont : ['Montserrat']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
