/** @type {import('tailwindcss').Config} */

module.exports = {
 
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    
    extend: {
      animation:{
        blob:"blob 4s infinite",
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 20s linear infinite',
      },
      keyframes:{
        blob:{
          "0%":{
            transform:"translate(0px,0px),scale(1)",
          },
          "33%":{
            transform:"translate(30px,-50px),scale(1.2)",
          },
          "66%":{
            transform:"scale(0.8)",
          },
          "100%":{
            transform:"scale(1)",
          }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }

    },
  },
  plugins: [],
  colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'greenlight': '#00ff00',
  }
}