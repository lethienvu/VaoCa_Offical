// Tailwind CSS Configuration for Vietinsoft
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js",
    "./css/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        'vietin': {
          'dark': '#004c39',
          'bright': '#1d9336',
          'light': '#4ade80'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '33%': { 
            transform: 'translateY(-20px) rotate(5deg)' 
          },
          '66%': { 
            transform: 'translateY(-10px) rotate(-5deg)' 
          }
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glass': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glass-sm': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    // Add any additional Tailwind plugins here
  ],
}