/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
    oswald:'Oswald, sans-serif',
    urbanist:'Urbanist, sans-serif',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors:{
        blue:"#014984",
        white:"#FFFFFF",
        black:"#000000",
        grey:"#232222",
        yellow:"#ffff22",
        mustard:"#FCC101",
      },
    },
  },
  plugins: [],
}
