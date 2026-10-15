/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          darkest: '#1E2023',
          dark: '#2B2D31',
          slate: '#5A6068',
          light: '#D8DADD',
          cream: '#F7F7F5',
          coral: '#FF6B4A',
          coralHover: '#E85837',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-coral': '0 0 25px -5px rgba(255, 107, 74, 0.4)',
        'glow-subtle': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
