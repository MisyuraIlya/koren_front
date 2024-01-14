/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')

const colors = {
  primary:'#002536',
  secondary:'#161D25',
  mainBlue:'#BACEE9',
  secondBlue:'#EDF2F9',
  
  transparent: twColors.transparent,
  black: twColors.black,
  white: twColors.white,
  'bg-color':'#F5F5F5',
  red: twColors.red[600],
  green: twColors.green[600],
  gray: twColors.gray[200],
  cardBg: '#39C7BB21',
  sideBarCourseCardBg:'#EFF7F7',
  cardPrimary: '#0172E8',
  sideBarCourseCardBgSecond: '#DDEDFF',
  exerciseCardBg: '#EDF2F9',
  mainExerciseBg: '#e5f0fe'
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    extend: {
      fontSize: {
        xs: '0.82rem',
        sm: '0.98rem',
        base: '1.15rem',
        lg: '1.22rem',
        xl: '1.36rem',
        '1.5xl': '1.5rem',
        '2xl': '1.725rem',
        '3xl': '2.155rem',
        '4x1': '2.58rem',
        '5x1': '3.45rem',
        '6x1': '4.3rem',
        '7x1': '5.17rem',
        '8x1': '6.9rem',
        '9x1': '9.2rem'
      },
      keyFrames: {
        animationOpacitty: {
          from: { opacity: 0.2 },
          to: { opacity: 1}
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          '50%': {
            opacity:0.3
          },
          '100%': {
            opacity:1,
            transform: 'sacle(1)'
          }
        }
      },
      animation: {
        opacity: 'animationOpacity .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out'
      },
      colors: {
        authBg:'#F0FBFF',
        auth_card_hover:'#DDEAF7',
        auth_card_border:'#899BCB',
        auth_card_image_border:'#E6E6E6',
        bg_link: '#256EF6',
        button_primary: 'rgba(29, 153, 255, 1)'
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      }
    },
  },
  plugins: [],
}
