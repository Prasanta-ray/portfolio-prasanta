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
        cyber: {
          dark: '#0a0a0f',
          surface: '#12121a',
          card: '#1a1a26',
          border: '#2a2a3a',
          accent: '#00ff88',
          accentDim: '#00cc6a',
          cyan: '#00d4ff',
          purple: '#8b5cf6',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cyber': 'linear-gradient(135deg, #00ff88 0%, #00d4ff 50%, #8b5cf6 100%)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(0, 255, 136, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
      },
      boxShadow: {
        'cyber': '0 0 30px rgba(0, 255, 136, 0.15)',
        'cyber-lg': '0 0 60px rgba(0, 255, 136, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
export default config
