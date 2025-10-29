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
      },
    },
    plugins: [],
  }