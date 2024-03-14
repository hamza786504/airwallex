/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    extend: {
      colors: {
        primary: "#612fff",
        dull: "#1F2225",
        light_dull: "#2f3237",
        gray: "#a0a7b1",
        red_orange: "#FF5541",
        orange: "#FF873D",
        blue: "#612FFF",
        purple: "#DC47BD",
        pink: "#D300A2",
        red: "#F70F6D",
      },
      container: {
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
}