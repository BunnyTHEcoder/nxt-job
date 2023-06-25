/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#8246FD', //purple
        'secondary': '#F7F3FF', //light purple
        'tertiary': '#FE5BAC', //pink
        'quaternary': '#212121', //black
        'quinary': '#57A4F2', //blue
        'senary': '#42464A', //grey text
        'background':'#F6F4F4'//light grey
      }
    },
  },
  plugins: [],
}
