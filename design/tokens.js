// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#1e1e2e",
          surface: "#2C2C3A",
          text: "#fefefe",
          muted:"#a0a0b2",
          primary: '#3B82F6',
          disable:"#60A5FA",
          secondary: '#00FF9C',
          danger: '#DC2626',
          border: '#3F3F4F',
        },
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        full: '9999px',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        h1: ['48px'],
        h2: ['36px'],
        h3: ['24px'],
        p: ['16px'],
        small: ['11px'],
      },
      boxShadow: {
        glow: '0 0 12px #FEFEFE',
        primary: '0 0 12px #3B82F6',
        success: '0 0 12px #00FF9C',
        error: '0 0 12px #EF4444',
      },
    },
  },
}
