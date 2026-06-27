/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme-aware surfaces (driven by CSS vars; flip between dark/light).
        ink: {
          DEFAULT: 'rgb(var(--bg) / <alpha-value>)',
          900: 'rgb(var(--bg) / <alpha-value>)',       // base background
          800: 'rgb(var(--surface) / <alpha-value>)',  // elevated surface
          700: 'rgb(var(--surface-2) / <alpha-value>)',// raised card
          600: 'rgb(var(--border) / <alpha-value>)',   // hairline border
        },
        // Theme-aware text levels.
        fg: 'rgb(var(--text) / <alpha-value>)',
        body: 'rgb(var(--text-body) / <alpha-value>)',
        muted: 'rgb(var(--text-muted) / <alpha-value>)',
        subtle: 'rgb(var(--text-subtle) / <alpha-value>)',
        // Subtle muted slate-blue accent (for small details only).
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          soft: 'rgb(var(--accent-soft) / <alpha-value>)',
        },
        onaccent: 'rgb(var(--on-accent) / <alpha-value>)', // text/icon on accent + cta fills
        // Monochrome primary button fill (white on dark / black on light).
        cta: 'rgb(var(--cta) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 45s linear infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
