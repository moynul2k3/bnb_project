/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "body_clr": "#f7f7f7",
        "shadow_clr": "#938b9b",
        "dip_font_clr": "#4A4A4A",
        "font_clr": "#8E8D8D",
      },
      fontSize: {
        "sm_txt": "12px",
        "md_txt": "15px",
        "lg_txt": "50px",
        "icon_txt": "30px",
        "love_icon": "35px",
      },
      width: {
        "menu": "147rem",
        "footer_menu": "100rem",
      },
      screens: {
        'sm': { 'min': '350px', 'max': '580px' },
        'md': { 'min': '580px', 'max': '720px' },
        'lg': { 'min': '720px', 'max': '1020px' },
        'xl': { 'min': '1020px' },
        
    }
    },
  },
  plugins: [],
}

