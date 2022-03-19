module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'iphone12promax': { 'raw': '(max-width: 470px)' },
        '766': { 'raw': '(max-width: 766px)' },
        // => @media (min-height: 800px) { ... }
      }
    },
  },
  plugins: [],
}