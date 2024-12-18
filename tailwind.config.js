/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Source Sans Pro', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'h1': '2.441rem',
        'h2': '1.953rem',
        'h3': '1.563rem',
        'body': '1rem',
        'small': '0.8rem',
      },
      colors: {
        // 60% - Main color (Warm White/Cream)
        primary: {
          50: '#FFFBF5',
          100: '#FFF4E6',
          200: '#FFE4CC',
          300: '#FFD4B3',
          400: '#FFC599',
          500: '#FFB380',
          600: '#FF9F66',
          700: '#FF8B4D',
          800: '#FF7733',
          900: '#FF6419',
        },
        // 30% - Secondary color (Sage Green)
        secondary: {
          50: '#F2F7F5',
          100: '#E6F0EC',
          200: '#CCE1D9',
          300: '#B3D2C6',
          400: '#99C3B3',
          500: '#80B4A0',
          600: '#66A58D',
          700: '#4D967A',
          800: '#338767',
          900: '#1A7854',
        },
        // 10% - Accent color (Deep Orange)
        accent: {
          50: '#FFF0ED',
          100: '#FFE1DB',
          200: '#FFC3B7',
          300: '#FFA593',
          400: '#FF876F',
          500: '#FF694B',
          600: '#FF4B27',
          700: '#FF2D03',
          800: '#D92500',
          900: '#B51E00',
        },
      },
    },
  },
  plugins: [],
};