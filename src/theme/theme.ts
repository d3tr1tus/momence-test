export const theme = {
  colors: {
    primary: '#2563EB',
    primaryDark: '#1D4FD7',
    primaryLight: '#EFF4FF',
    primaryGlow: 'rgba(37, 99, 235, 0.2)',
    primaryGlowHover: 'rgba(37, 99, 235, 0.3)',

    background: '#F5F0EA',
    backgroundEnd: '#EDE7DF',
    surface: '#FFFEFB',
    surfaceRecessed: '#F9F7F4',

    text: '#1A1816',
    textSecondary: '#8C857C',
    textMuted: '#A69E94',
    textFaint: '#C4BCB3',

    border: '#E5DFD8',
    borderFocus: '#2563EB',

    pillText: '#6B6360',
    pillHover: '#F5F2EF',

    white: '#FFFFFF',
  },
  space: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '2.25rem', // 36px
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.625rem', // 26px
    '2xl': '1.75rem', // 28px
    '4xl': '3.25rem', // 52px
  },
  radius: {
    sm: '0.75rem', // 12px
    md: '0.875rem', // 14px
    lg: '1rem', // 16px
    xl: '1.5rem', // 24px
  },
  fonts: {
    base: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
} as const;

export type Theme = typeof theme;
