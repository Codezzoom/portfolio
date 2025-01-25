/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      'slide-down': {
        '0%': { transform: 'translateY(-100%)', opacity: '0' },
        '100%': { transform: 'translateY(0%)', opacity: '1' },
      },
      'slide-up': {
        '0%': { transform: 'translateY(0%)', opacity: '1' },
        '100%': { transform: 'translateY(-100%)', opacity: '0' },
      },
      'spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      'slide-down': 'slide-down 0.5s ease-in-out forwards',
      'slide-up': 'slide-up 0.5s ease-in-out forwards',
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#213555",
        secondary: "#B8C1EC",
        violet: '#B8C1EC',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Titan: ['"Titan One"', 'serif'],
      },
      transitionDuration: {
        0: '0ms',
        2000: '7000ms'
      },
      backgroundImage: {
        explosion: "url('/bg-exp.png')",
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      fontSize: {
        '1xl': '4.4rem',
        '2xl': '3.3rem',
        '3xl': '2.5rem',
        '4xl': '1.9rem',
        '5xl': '1.5rem',
        '6xl': '1.4rem',
        '7xl': '1.0rem',
        sm: '0.7rem'
      },
      spacing: {
        '25p': '25%',
        '35p': '35%',
        '50p': '50%',
        '75p': '75%',
        '84.5vh': '84.5vh',
        '80vh': '80vh',
        '90vh': '90vh'
      },
      animation: {
        changewidth: 'width 2s ease-in-out infinite',
        spin: 'spin 8s linear infinite',
        absoluteright: 'absoluteright 4s ease-in infinite',
        translateright: 'translateright 1.5s ease-in-out infinite',
        "spin-slow": "spin 6s linear infinite",
      },
      boxShadow: {
        'light-xl': '0 15px 30px -15px rgba(256, 256, 256, 0.3)',
        'light-2xl': '-1px 6px 13px 0px rgba(0,0,0,0.44)',
        'light-3xl': '0 25px 60px rgba(255,255,255, 0.1), 0 19px 30px rgba(255,255,255, 0.1)',
        'light-4xl': '0 45px 100px rgba(220,220,220, 0.3), 0 16px 40px rgba(220,220,252205, 0.3)',
        'violet-5xl': '0px 6px 58px -8px rgba(184,193,236,0.36)'
      },
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp')
  ],
};

export default tailwindConfig;
