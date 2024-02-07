import { nextui } from '@nextui-org/react'
import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#82a6cd',
        white: '#fff',
        text: '#070707'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
      keyframes: {
        'slide-left': {
          '0%': {
            '-webkit-transform': 'translateX(100px);',
            transform: 'translateX(100px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: ' translateX(0);'
          }
        },
        'slide-bottom': {
          '0%': {
            '-webkit-transform': 'translateY(-100px);',
            transform: 'translateY(-100px);'
          },
          '100%': {
            '-webkit-transform': 'translateY(0);',
            transform: ' translateY(0);'
          }
        },
        'slide-top': {
          '0%': {
            '-webkit-transform': 'translateY(100px);',
            transform: 'translateY(100px);'
          },
          '100%': {
            '-webkit-transform': 'translateY(0);',
            transform: ' translateY(0);'
          }
        },
        'slide-right': {
          '0%': {
            '-webkit-transform': 'translateX(-100px);',
            transform: 'translateX(-100px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: ' translateX(0);'
          }
        }
      },
      animation: {
        'slide-left': 'slide-left 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-right': 'slide-right 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-bottom': 'slide-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui(),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') }
      })
    })
  ]
}
