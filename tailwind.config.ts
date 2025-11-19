import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'deep-purple-bg': '#381E55',
        'silver-reflection': '#EFEFEF',
        'text-primary': '#1A1A1A',
        'text-secondary': '#595959',
        'background-cream': '#FAF9F6',
      },
      fontFamily: {
        messika: ['var(--font-messika)', 'Montserrat', 'Helvetica Neue', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'Helvetica Neue', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'Bebas Neue', 'Helvetica Neue Condensed', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Garamond', 'serif'],
        inter: ['var(--font-inter)', 'Helvetica Neue', 'sans-serif'],
        sans: ['var(--font-inter)', 'Helvetica Neue', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Garamond', 'serif'],
      },
      fontSize: {
        'base': ['14px', '1.5'],
        'wishlist': ['12px', { lineHeight: '14px', letterSpacing: '0.5px' }],
        'logo-main': ['26px', { lineHeight: '28px', letterSpacing: '1.5px' }],
        'logo-sub': ['8px', { lineHeight: '10px', letterSpacing: '1.0px' }],
        'hero-title': ['42px', { lineHeight: '48px', letterSpacing: '0.5px' }],
        'hero-cta': ['12px', { lineHeight: '16px', letterSpacing: '1.0px' }],
      },
      spacing: {
        '0': '0px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '8': '8px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '25': '25px',
        '40': '40px',
        '50': '50px',
        '80': '80px',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, 1fr)',
      },
      gap: {
        'gutter': '20px',
      },
      margin: {
        'grid': '40px',
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
