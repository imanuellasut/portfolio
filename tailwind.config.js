/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#E0FB60',
        background: '#141414',
        textLight: '#FFFFFF',
        textDark: '#202022',
        accent: '#E94E77',
        border: '#303030',
        hover: '#C0E850',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        hero: ['Bungee', 'sans-serif'],
        title: ['Anybody', 'sans-serif'],
      },
      fontVariationSettings: {
        // Buat aturan kustom untuk font-variation-settings
        'wdth-75': '"wdth" 75',
      },
      fontSize: {
        navbar: ['18px', { lineHeight: '1.5em', letterSpacing: '0.5px' }],
        'navbar-tablet': [
          '16px',
          { lineHeight: '1.5em', letterSpacing: '0.5px' },
        ],
        'navbar-phone': [
          '14px',
          { lineHeight: '1.5em', letterSpacing: '0.5px' },
        ],
        'hero-title': ['62px', { lineHeight: '62px', letterSpacing: '0.8px' }],
        'hero-title-tablet': [
          '36px',
          { lineHeight: '1.2em', letterSpacing: '0px' },
        ],
        'hero-title-phone': [
          '28px',
          { lineHeight: '1.2em', letterSpacing: '0px' },
        ],
        'hero-subtitle': [
          '24px',
          { lineHeight: '1.6em', letterSpacing: '0.25px' },
        ],
        'hero-subtitle-tablet': [
          '20px',
          { lineHeight: '1.6em', letterSpacing: '0.25px' },
        ],
        'hero-subtitle-phone': [
          '18px',
          { lineHeight: '1.6em', letterSpacing: '0.25px' },
        ],
        'section-title': [
          '36px',
          { lineHeight: '1.3em', letterSpacing: '0px' },
        ],
        'section-title-tablet': [
          '30px',
          { lineHeight: '1.3em', letterSpacing: '0px' },
        ],
        'section-title-phone': [
          '24px',
          { lineHeight: '1.3em', letterSpacing: '0px' },
        ],
        'section-subtitle': [
          '18px',
          { lineHeight: '1.5em', letterSpacing: '0.2px' },
        ],
        'section-subtitle-tablet': [
          '16px',
          { lineHeight: '1.5em', letterSpacing: '0.2px' },
        ],
        'section-subtitle-phone': [
          '14px',
          { lineHeight: '1.5em', letterSpacing: '0.2px' },
        ],
        'body-text': ['16px', { lineHeight: '1.7em', letterSpacing: '0.2px' }],
        'body-text-phone': [
          '14px',
          { lineHeight: '1.7em', letterSpacing: '0.2px' },
        ],
        'small-text': ['14px', { lineHeight: '1.4em', letterSpacing: '0.1px' }],
        'small-text-phone': [
          '12px',
          { lineHeight: '1.4em', letterSpacing: '0.1px' },
        ],
        'button-text': [
          '16px',
          { lineHeight: '1.6em', letterSpacing: '0.1px' },
        ],
        'footer-text': [
          '14px',
          { lineHeight: '1.4em', letterSpacing: '0.1px' },
        ],
        'footer-text-phone': [
          '12px',
          { lineHeight: '1.4em', letterSpacing: '0.1px' },
        ],
      },
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-left': 'slide-left 8s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.font-wdth-75': {
          fontVariationSettings: '"wdth" 75',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
