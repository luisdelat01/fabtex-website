/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'brand-purple': '#2E1A47',
          'brand-purple-dark': '#1A0F2E',
          'vibrant-teal': '#4FD1C5',
          'link-teal': '#3DBFB3',
          'golden-amber': '#E8A765',
          'mint-teal': '#B2F5EA',
          'dark-slate': '#1A1A2E',
          'soft-slate': '#64748B',
          'light-gray': '#F9FAFB',
          'success-green': '#10B981',
          'warning-amber': '#F59E0B',
          'error-red': '#EF4444',
          'info-blue': '#3B82F6',
        },
        animation: {
          'fade-in': 'fadeIn 1s ease-in-out',
          'fade-in-scale': 'fadeInScale 0.8s ease-in-out',
        },
      },
    },
    plugins: [],
  }