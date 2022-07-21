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
        'senary': '#1e2024', 
        
        'primary-text': '#d1d5db',
        'secondary-text': '#9ca3af',
        'tertiary-text': '#597de0',

        'secondary-text-hover': 'rgba(129, 129, 129, 0.75)',
      },

      backgroundImage: {
        'contact-background': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../public/Images/contact-background.png')",
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
          'pop-out': 'pop-out 1s ease-in-out forwards',
      }
    },
  },
}