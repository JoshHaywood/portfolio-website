module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#4c6bc1',
        'secondary': '#101316',
        'tertiary': '#15171a',
        'quaternary': '#181a1d',
        'quinary': '#373b42', 
        
        'primary-text': '#ffffff',
        'secondary-text': '#9e9e9e',
        'tertiary-text': '#597de0',
        'quaternary-text': '#818181',

        'primary-hover': 'rgba(76, 107, 193, 0.85)',
      },

      backgroundImage: {
        /*'hero-background': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../public/images/background.png')",*/
        /*'contact-background': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../public/images/contact-background.jpg')",*/
      },

      keyframes: {
        'fade-in-up': {
            '0%': {
              opacity: '0',
              transform: 'translateY(10%)'
            },
            '100%': {
                opacity: '1',
                transform: 'none'
            },
        },
        'pop-out': {
          '100%': {
            transform: 'scale(1.03)'
          }
        }
      },

      animation: {
          'fade-in-up': 'fade-in-up 1s ease-in-out',
          'pop-out': 'pop-out 1s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}