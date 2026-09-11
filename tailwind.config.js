/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f8f7f4',
        bone: '#f1eee7',
        ink: '#171717',
        charcoal: '#262626',
        muted: '#666663',
        ochre: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#d97706',
          600: '#c2410c',
          700: '#9a3412',
        },
        baltic: {
          800: '#1e3a4c',
          900: '#142733',
          950: '#0c1820',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
