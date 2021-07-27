module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: "#01FFC3",
        black: "#0e1212"
      }
    },
    fontFamily: {
      body: ['"Helvetica Mono"', "monospace"]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
