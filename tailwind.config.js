/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens : {
      lg : '920px',
      md : '700px',
      sm : '540px'
    }
  },
  plugins: [],
}