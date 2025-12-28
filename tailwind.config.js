/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hospitality-blue': '#0F172A',
        'canvas-gray': '#F8FAFC',
        'vitality-mint': '#10B981',
        'soft-slate': '#64748B',
        'night-ward': '#1E293B',
        'trust-navy': '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.03)',
        'premium-hover': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'biophilic': '0 8px 32px rgba(15, 23, 42, 0.08)',
        'glow': '0 0 20px rgba(16, 185, 129, 0.3)',
        'magnetic': '0 4px 16px rgba(15, 23, 42, 0.12)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'stagger-in': 'staggerIn 0.4s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'pulse-shield': 'pulseShield 2s ease-in-out infinite',
        'count-up': 'countUp 0.6s ease-out',
        'magnetic-snap': 'magneticSnap 0.2s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        staggerIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulseShield: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        magneticSnap: {
          '0%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(16, 185, 129, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        'biophilic': '12px',
      },
    },
  },
  plugins: [],
}
