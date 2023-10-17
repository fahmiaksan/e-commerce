/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "Poppins"
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(100%)' },
        },
        show: {
          '100%': { right: '-5000px' },
        }
      }, animation: {
        wiggle: 'wiggle 600ms ease',
        show: 'show 1s ease',
      }
    },
    screens: {
      "hp": "360px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px"
    }
  },
  plugins: [],
}

