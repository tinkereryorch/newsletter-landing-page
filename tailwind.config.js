/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // using `src` directory
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Habibi', 'sans-serif']
      },
      colors: {
        'floral-gray': '#94A7AE',
        'floral-purple': '#C0A9BD',
        'floral-fill': '#F4F2F3'
      },
    },
  },
  plugins: [],
}

