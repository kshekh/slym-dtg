/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Manrope Variable'", ...defaultTheme.fontFamily.sans],
        figtree: ["'Figtree Variable'", ...defaultTheme.fontFamily.sans],
      
      },
      colors: {
        primary: '#1C192A',
        secondary: '#175265',
        save: '#27b73e',
        add: '#1f7de9',
        main: '#f2f5f8',
        sky:'#2C7CDB',
        blue: {
          100: '#9aa4ff',
          200: '#7f8bfc',
          300: '#6976f4',
          400: '#5e6ae1',
          500: '#4f5bcf',
          600: '#3f4bbd',
          700: '#333ea9',
          800: '#283297',
          900: '#1b2372',
        },
        purple: {
          100: '#c69fff',
          200: '#a96eff',
          300: '#9b56ff',
          400: '#8d3eff',
          500: '#7e26ff',
          600: '#700eff',
          700: '#5909ce',
          800: '#3d058f',
          900: '#26025a',
        },
        gray: {
          100: '#f5f5f5',
          200: '#eeeeed',
          300: '#ccccc9',
          400: '#a7a7a5',
          500: '#8c8d90',
          600: '#7e7d84',
          700: '#676573',
          800: '#514f5f',
          900: '#1c192b',
         
        },
         
      },
      letterSpacing: {
        1: '-.16px'
      }, 
      maxWidth:{
        inherit:'inherit'
      },
      backgroundImage:{
        'text-gradient':'linear-gradient(91.74deg, #40BEBE -20.8%, #2361E6 101.14%)',
        'gradient-primary':'linear-gradient( 180deg, #272a31 0%, rgba(23, 19, 31, .9) 100% )',
      },
      boxShadow:{
        1:'0px 5px 5px rgba(0, 0, 0, 0.05)',
        card:'0 0 16px #00000008',
        modal:'0 4px 24px #00000021',
        button:'0 2px 4px #0d1b4933',
        glow:'inset 2px 2px 6.8px rgba(255, 255, 255, 0.3), inset -2px -2px 2.5px rgba(255, 255, 255, 0.5)',
      },
      dropShadow:{
        1:'0px 3px 12px rgba(0, 0, 0, 0.02)',
      },
      scale:{
        'flip':'-1'
      },
      fontSize: {
        mv:'0.625rem'
      }

    },
  },
  plugins: [],
}