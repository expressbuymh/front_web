/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      mobile: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'

    }
  },
  plugins: []
}
