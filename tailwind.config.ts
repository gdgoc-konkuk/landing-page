import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        google: {
          blue: '#4285f4',
          red: '#ea4335',
          yellow: '#f9ab00',
          green: '#34a853',
          gray: '#f1f3f4',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        drop: {
          '0%': {
            transform: 'rotate(30deg) translate(0px, 0px)',
          },
          '40%': {
            transform: 'rotate(-38deg) translate(16px, -28px)',
          },
          '80%': {
            transform: 'rotate(-27deg) translate(16px, -28px)',
          },
          '100%': {
            transform: 'rotate(-30deg) translate(16px, -28px)',
          },
        },
        'scale-red': {
          '0%': {
            transform: 'scale(1) rotate(-30deg)',
          },
          '10%': {
            transform: 'scale(1.33) rotate(-30deg) translateY(6px)',
          },
          '25%': {
            transform: 'scale(1.27) rotate(-30deg) translateY(6px)',
          },
          '45%': {
            transform: 'scale(1.31) rotate(-30deg) translateY(6px)',
          },
          '70%': {
            transform: 'scale(1.29) rotate(-30deg) translateY(6px)',
          },
          '100%': {
            transform: 'scale(1.3) rotate(-30deg) translateY(6px)',
          },
        },
        'scale-blue': {
          '0%': {
            transform: 'scale(1) rotate(30deg)',
          },
          '10%': {
            transform: 'scale(1.33) rotate(30deg)',
          },
          '25%': {
            transform: 'scale(1.27) rotate(30deg)',
          },
          '45%': {
            transform: 'scale(1.31) rotate(30deg)',
          },
          '70%': {
            transform: 'scale(1.29) rotate(30deg)',
          },
          '100%': {
            transform: 'scale(1.3) rotate(30deg)',
          },
        },
        'scale-green': {
          '0%': {
            transform: 'scale(1) rotate(30deg)',
          },
          '10%': {
            transform: 'scale(1.33) rotate(30deg)',
          },
          '25%': {
            transform: 'scale(1.27) rotate(30deg)',
          },
          '45%': {
            transform: 'scale(1.31) rotate(30deg)',
          },
          '70%': {
            transform: 'scale(1.29) rotate(30deg)',
          },
          '100%': {
            transform: 'scale(1.3) rotate(30deg)',
          },
        },
        'scale-yellow': {
          '0%': {
            transform: 'scale(1) rotate(-30deg) translate(16px, -28px)',
          },
          '10%': {
            transform: 'scale(1.33) rotate(-30deg) translate(16px, -28px)',
          },
          '25%': {
            transform: 'scale(1.27) rotate(-30deg) translate(16px, -28px)',
          },
          '45%': {
            transform: 'scale(1.31) rotate(-30deg) translate(16px, -28px)',
          },
          '70%': {
            transform: 'scale(1.29) rotate(-30deg) translate(16px, -28px)',
          },
          '100%': {
            transform: 'scale(1.3) rotate(-30deg) translate(16px, -28px)',
          },
        },
        'bounce-left': {
          '0%': {
            transform: 'translateX(0)',
          },
          '10%': {
            transform: 'translateX(50px)',
          },
          '25%': {
            transform: 'translateX(41px)',
          },
          '45%': {
            transform: 'translateX(47px)',
          },
          '70%': {
            transform: 'translateX(44px)',
          },
          '100%': {
            transform: 'translateX(45px)',
          },
        },
        'bounce-right': {
          '0%': {
            transform: 'translate(0px, 0px)',
          },
          '10%': {
            transform: 'translate(330px, 10px)',
          },
          '25%': {
            transform: 'translate(270px, 10px)',
          },
          '45%': {
            transform: 'translate(310px, 10px)',
          },
          '70%': {
            transform: 'translate(290px, 10px)',
          },
          '100%': {
            transform: 'translate(300px, 10px)',
          },
        },
        'blow-up': {
          '0%': {
            transform: 'translate(-50%, 0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translate(-50%, -100%)',
            opacity: '0',
          },
        },
        'blow-down': {
          '0%': {
            transform: 'translate(-50%, -100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(-50%, 0)',
            opacity: '1',
          },
        },
        slide: {
          '0%': { transform: 'translateX(0%)', opacity: '1', zIndex: '10' },
          '33.3%': {
            transform: 'translateX(100%)',
            opacity: '1',
            zIndex: '10',
          },
          '35%': { opacity: '0' },
          '66.6%': { transform: 'translateX(0%)', opacity: '0', zIndex: '1' },
          '70%': { transform: 'translateX(0%)', opacity: '1', zIndex: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        drop: 'drop 0.4s linear forwards 1000ms, scale-yellow 0.8s linear forwards 2100ms',
        'blow-up': 'blow-up 0.3s linear forwards',
        'blow-down': 'blow-down 0.3s linear forwards',
        'slide-0': 'slide 6s infinite',
        'slide-2': 'slide 6s infinite 2s',
        'slide-4': 'slide 6s infinite 4s',
      },
      fontFamily: {
        pretendard: 'var(--font-pretendard)',
        suite: 'var(--font-suite)',
        google: 'var(--font-google-sans)',
        gangwon: 'var(--font-gangwon)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
