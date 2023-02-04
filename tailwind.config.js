/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      'ubuntu': "Ubuntu",
      'overpass': "Overpass",
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {    
      backgroundImage: {
        'mainPattern': "url('images/bg-pattern-intro-desktop.svg')",
        'bgPattern1': "url('images/illustration-editor-desktop.svg')",
        'footerTexture': "url('/img/footer-texture.png')",
      },
      colors: {
      'gradRed': 'hsl(13, 100%, 72%)',
      'gradredto': 'hsl(353, 100%, 62%)',
      'lightRed': 'hsl(356, 100%, 66%)',
      'veryLightRed': 'hsl(355, 100%, 74%)',
      'veryDarkBlue': 'hsl(208, 49%, 24%)',
      'mywhite': 'hsl(0, 0%, 100%)',
      'grayisBlue': 'hsl(240, 2%, 79%)',
      'veryDarkGrayishBlue': 'hsl(207, 13%, 34%)',
      'veryDarkBlackBlue': 'hsl(240, 10%, 16%)',
      'veryDarkGrayBlue': 'hsl(237, 17%, 21%)',
      'veryDarkDesaturatedBlue': 'hsl(237, 23%, 32%)',
      },
    },
  },
  plugins: [],
}
