// tailwind.config.js
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: '#F5F3FF', // soft lavender
        text: '#1F2933', // deep blue-grey
        muted: '#6B7280', // neutral grey
        card: '#FEFDFB', // warm off-white
        border: 'rgba(148, 163, 184, 0.35)',
        accent: '#EC4899', // rose-500
        accent2: '#F97316', // orange-500
      },
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        'skills-gradient':
          'radial-gradient(60% 60% at 15% 0%, rgba(236, 72, 153, 0.25) 0%, rgba(236, 72, 153, 0) 55%), radial-gradient(60% 60% at 85% 15%, rgba(249, 115, 22, 0.18) 0%, rgba(249, 115, 22, 0) 55%), linear-gradient(180deg, #FEFDFB 0%, #F3E8FF 40%, #F9FAFB 100%)',
        'skills-gradient-dark':
          'radial-gradient(60% 60% at 10% -10%, rgba(236, 72, 153, 0.38) 0%, rgba(236, 72, 153, 0) 55%), radial-gradient(60% 60% at 90% 0%, rgba(249, 115, 22, 0.30) 0%, rgba(249, 115, 22, 0) 55%), linear-gradient(180deg, #020617 0%, #020617 45%, #020617 100%)',
      },
    },
  },
  plugins: [],
};
