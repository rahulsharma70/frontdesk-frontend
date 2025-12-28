/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-navy': '#1E293B',
        'healthcare-blue': '#6366F1',
        'mint-sage': '#10B981',
        'soft-slate': '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.03)',
        'premium-hover': '0 8px 30px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'stagger-in': 'staggerIn 0.4s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'pulse-shield': 'pulseShield 2s ease-in-out infinite',
        'count-up': 'countUp 0.6s ease-out',
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
      },
    },
  },
  plugins: [],
}
