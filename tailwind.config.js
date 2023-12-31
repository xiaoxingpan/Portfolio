/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans"],
    },
    screens: { sm: "480px", md: "768px", lg: "976px", xl: "1440pd" },
    animation: {
      fadeIn: "fadeIn 1.5s",
      fadeInLeft: "fadeInLeft 1.5s",
      bounce:
        "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
      slideUp: "slideUp 0.5s",
      slideUpEaseInOut: "slideUp 0.5s ease-in-out",
      slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
    },
    animationDelay: {
      0: "0s",
      2: "0.2s",
      4: "0.4s",
      6: "0.6s",
    },
    keyframes: {
      fadeIn: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      slideUp: {
        from: { transform: "translateY(100%)" },
        to: { transform: "translateY(0)" },
      },
      bounce: {
        from: { transform: "translateY(10px)" },
        to: { transform: "translateY(0)" },
      },
      fadeInLeft: {
        from: {
          opacity: "0",
          transform: "translateX(-20px)",
        },
        to: {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
    },
  },
};
export const plugins = [];
