/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'shabnam-medium': ['shabnam-medium', 'sans-serif'],
        'shabnam-bold': ['shabnam-bold', 'serif'] 
      },
      colors:{
        light_gray: "#FBFBFB",
        medium_gray: "#E2E2E2",
        soft_gray: "#B4B4B8",
        dark_gray: "#777777",
        dark_blue: "#095ABD",
        navi_blue : "#0A295A",
        light_red: "#FE5F54",
        dark_red : "#C7253E",
        dark_green: "#347928",
        mainBody: "#FBFBFB",
        warning: "#FFF4F5",
        danger: "#9B2C2C"
      },
      aspectRatio: {
        '16/9': '16 / 9',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


