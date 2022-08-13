module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#4c6bc1',
        'secondary': '#15171a',
        'tertiary': '#181a1d',
        'quaternary': '#1e2024', 
        
        'primary-text': '#d1d5db',
        'secondary-text': '#9ca3af',

        'secondary-text-hover': 'rgba(129, 129, 129, 0.75)',
      },

      keyframes: {        
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