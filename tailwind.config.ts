import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#07091A',
        surface: '#0D1130',
        primary: '#0A1628',
        gold: '#F5A623',
        cyan: '#00E5C3',
        muted: '#8892A4',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'float': 'floatUp 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245,166,35,0.25)' },
          '50%': { boxShadow: '0 0 50px rgba(245,166,35,0.55)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'mesh': 'radial-gradient(ellipse 80% 60% at 20% -10%, rgba(10,15,46,0.9), transparent), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(90,30,180,0.12), transparent)',
      },
    },
  },
  plugins: [],
}

export default config
