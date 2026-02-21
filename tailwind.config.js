/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF3C2',
        coral: '#FF9999',
        brown: '#472F0B',
        sky: '#C2DCFF',
        olive: '#878E2E',
        redAccent: '#600F15',
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 153, 153, 0.35)',
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        grain: 'grain 8s steps(10) infinite',
        rise: 'rise 5s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite',
        orbit: 'orbit 14s linear infinite',
        bounceTiny: 'bounceTiny 1.4s ease-out',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        grain: { '0%, 100%': { transform: 'translate(0,0)' }, '20%': { transform: 'translate(-10%, 5%)' }, '40%': { transform: 'translate(5%, -10%)' }, '60%': { transform: 'translate(-5%, 15%)' }, '80%': { transform: 'translate(10%, -5%)' } },
        rise: { '0%,100%': { transform: 'scaleY(1)' }, '50%': { transform: 'scaleY(1.04)' } },
        pulseSoft: { '0%,100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
        orbit: { from: { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' }, to: { transform: 'rotate(360deg) translateX(60px) rotate(-360deg)' } },
        bounceTiny: { '0%': { transform: 'translateY(20px) scale(0.5)', opacity: '0' }, '60%': { transform: 'translateY(-8px) scale(1.05)', opacity: '1' }, '100%': { transform: 'translateY(0) scale(1)', opacity: '1' } }
      },
    },
  },
  plugins: [],
};
