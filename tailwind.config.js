/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      'ubuntu': ["Ubuntu", 'sans-serif'],
      'overpass': ["Overpass", 'sans-serif'],
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
        'Circle': "url('images/bg-pattern-circles.svg')",
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
      'animation': {
        'gradient-x':'gradient-x 15s ease infinite',
        'gradient-y':'gradient-y 15s ease infinite',
        'gradient-xy':'gradient-xy 15s ease infinite',
    },
    'keyframes': {
        'gradient-y': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'center top'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'center center'
            }
        },
        'gradient-x': {
            '0%, 100%': {
                'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
        'gradient-xy': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
      }
    },
  },
  plugins: [],
}
