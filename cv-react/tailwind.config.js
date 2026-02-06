/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vibrant Purple Shades
        'purple-50': '#f5f3ff',
        'purple-100': '#ede9fe',
        'purple-200': '#ddd6fe',
        'purple-300': '#c4b5fd',
        'purple-400': '#a78bfa',
        'purple-500': '#8b5cf6',
        'purple-600': '#7c3aed',
        'purple-700': '#6d28d9',

        // Vibrant Pink/Magenta
        'pink-50': '#fdf2f8',
        'pink-100': '#fce7f3',
        'pink-200': '#fbcfe8',
        'pink-300': '#f9a8d4',
        'pink-400': '#f472b6',
        'pink-500': '#ec4899',
        'pink-600': '#db2777',

        // Electric Blue
        'blue-50': '#eff6ff',
        'blue-100': '#dbeafe',
        'blue-200': '#bfdbfe',
        'blue-300': '#93c5fd',
        'blue-400': '#60a5fa',
        'blue-500': '#3b82f6',
        'blue-600': '#2563eb',
        'blue-700': '#1d4ed8',

        // Vibrant Cyan
        'cyan-50': '#ecfeff',
        'cyan-100': '#cffafe',
        'cyan-200': '#a5f3fc',
        'cyan-300': '#67e8f9',
        'cyan-400': '#22d3ee',
        'cyan-500': '#06b6d4',
        'cyan-600': '#0891b2',

        // Vibrant Orange
        'orange-50': '#fff7ed',
        'orange-100': '#ffedd5',
        'orange-200': '#fed7aa',
        'orange-300': '#fdba74',
        'orange-400': '#fb923c',
        'orange-500': '#f97316',
        'orange-600': '#ea580c',

        // Vibrant Yellow
        'yellow-50': '#fefce8',
        'yellow-100': '#fef9c3',
        'yellow-200': '#fef08a',
        'yellow-300': '#fde047',
        'yellow-400': '#facc15',
        'yellow-500': '#eab308',

        // Vibrant Green
        'green-50': '#f0fdf4',
        'green-100': '#dcfce7',
        'green-200': '#bbf7d0',
        'green-300': '#86efac',
        'green-400': '#4ade80',
        'green-500': '#22c55e',
        'green-600': '#16a34a',

        // Legacy support
        primary: '#8b5cf6',
        secondary: '#ec4899',
        accent: '#22d3ee',
        'text-dark': '#1e293b',
        'text-light': '#64748b',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.5rem',
        'DEFAULT': '0.75rem',
        'md': '1rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        'full': '9999px',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '0.75rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-down': 'slideDown 0.8s ease forwards',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'fade-in-blur': 'fadeInBlur 0.8s ease forwards',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'profile-glow': 'profileGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'ripple': 'ripple 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideDown: {
          'from': { transform: 'translateY(-100%)' },
          'to': { transform: 'translateY(0)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInBlur: {
          'from': { opacity: '0', filter: 'blur(10px)', transform: 'translateY(30px)' },
          'to': { opacity: '1', filter: 'blur(0)', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        profileGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(236, 72, 153, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(236, 72, 153, 0.6), 0 0 60px rgba(34, 211, 238, 0.4)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(139, 92, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
        'glass-hover': '0 20px 40px rgba(236, 72, 153, 0.25), inset 0 1px 0 rgba(255, 255, 255, 1)',
        'neumorphic': '8px 8px 16px rgba(139, 92, 246, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)',
        'soft': '0 4px 20px rgba(139, 92, 246, 0.1)',
        'colorful': '0 10px 30px rgba(139, 92, 246, 0.3), 0 5px 15px rgba(236, 72, 153, 0.2)',
        'neon': '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(236, 72, 153, 0.3), 0 0 60px rgba(34, 211, 238, 0.2)',
        'neon-green': '0 0 20px rgba(34, 197, 94, 0.5), 0 0 40px rgba(16, 185, 129, 0.3), 0 0 60px rgba(5, 150, 105, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '10px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-rainbow': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      },
    },
  },
  plugins: [],
}
