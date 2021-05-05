module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Noto Serif TC"', 'serif'],
      notoblack: ['"Noto Sans TC"', 'sans-serif']
    },
    colors: {
      'black': '#000000',
      'gray': '#3C3C3C',
      'ccc': '#CCCCCC',
      'white': '#FFFFFF',
      'white-op0': 'rgba(255, 255, 255, 0)',
      'red': '#641516',
      'yellow': '#D8B167',
      'card-green': '#5D9DA6',
      'card-red': '#CF635A',
      'card-yellow': '#F1B150',
      'card-gray': '#4B5058'
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '28': '7rem',
      '40': '10rem'
    },
    extend: {
      fontSize: {
        'xxs': '0.5rem',
        '5xl': '2.5rem'
      },
      zIndex: {
        '-1': '-1',
        '100': '100'
      },
      maxWidth: {
        'alert': '71.666666%',
        '3/5': '60%',
        '2/5': '40%',
        '1366': '1366px',
        '100px': '100px',
        '120px': '120px'
      },
      width: {
        '3/25': '12%',
        '12/25': '48%',
        '9/20': '45%',
        '3/10': '30%',
        '40px': '40px',
        '50px': '50px'
      },
      padding: {
        'full': '100%',
        '12/25': '48%',
        '9/20': '45%',
        '3/10': '30%',
        '1/5': '20%',
        '1/8': '12.5%',
        '1/20': '5%',
        'mediabox': '56.25%'
      },
      margin: {
        '1/40': '2.5%',
        '1/25': '4%',
        '1/20': '5%',
        '1/4': '25%'
      },
      borderRadius: {
        'full': '50%'
      },
      screens: {
        'has-hover': { 'raw': '(hover: hover)' }
      },
      animation: {
        'fadeInDown1/2s': 'fadeInDown 0.5s both',
        'fadeInDown1s': 'fadeInDown 1s both',
        'fadeIn1/2s': 'fadeIn 0.5s both'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -100%, 0)'
          },
          '100%': {
            opacity: '1',
            transform: 'none'
          }
        }
      }
    }
  },
  variants: {
    extend: {
      zIndex: ['hover']
    },
  },
  plugins: [],
}