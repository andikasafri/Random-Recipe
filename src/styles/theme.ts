export const theme = {
  fontFamily: {
    primary: "'Source Sans Pro', system-ui, -apple-system, sans-serif",
    display: "'Playfair Display', Georgia, serif"
  },
  fontSize: {
    base: '1rem',
    h1: '2.441rem',
    h2: '1.953rem',
    h3: '1.563rem',
    body: '1rem',
    small: '0.8rem'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  colors: {
    primary: '#2D3047',
    secondary: '#419D78',
    accent: '#E0A458',
    background: '#FAFAFA',
    text: '#2D3047',
    lightGray: '#E5E5E5'
  },
  layout: {
    maxWidth: '768px',
    padding: '2rem',
    gridGap: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
} as const;

export type Theme = typeof theme;