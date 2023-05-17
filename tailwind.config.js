/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00BCD4",
        accent: "#FF5722",
        // primary: "#001959",
        // secondary: "#ec0047",
        lighttext: "black",
        darktext: "white",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
