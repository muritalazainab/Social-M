/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFFAF6 " ,
        color: '#FFF5E1',
        btn: '#FFB300',
        txtBg: '#3C2E1F',
        border:'#E1E1E1',
        txt: '#BF4F4F'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #FFFAF6, #FFF6EF, #FFCC29, #F9A4AB)',
      },
      wave: {
        '0%': { transform: 'rotate(0.0deg)' },
        '10%': { transform: 'rotate(14deg)' },
        '20%': { transform: 'rotate(-8deg)' },
        '30%': { transform: 'rotate(14deg)' },
        '40%': { transform: 'rotate(-4deg)' },
        '50%': { transform: 'rotate(10.0deg)' },
        '60%': { transform: 'rotate(0.0deg)' },
        '100%': { transform: 'rotate(0.0deg)' },
      },
      
      

    },
  },
  plugins: [],
}
