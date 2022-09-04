/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#050505",
      white: "#ffffff",

      // For backgrounds
      light: "#F3F4F6",
      dark: "#090F23",
      darkContrast: "#071D2D",
      
      success: {
        1: "#3A8C1D",
        2: "#70BA4B",
        3: "#9DDC73",
        4: "#CAF3A6",
        5: "#E7F9D1",
      },
      warning: {
        dark: {
          1: "#C96405",
          2: "#EA8007",
          3: "#F2A842",
          4: "#F8C267",
          5: "#FDF0CC",
        },
        light: {
          1: "#C96405",
          2: "#EA8007",
          3: "#F2A842",
          4: "#F8C267",
          5: "#FDF0CC",
        },
      },

      error: {
        dark: {
          1: "#931B0E",
          2: "#DB4C20",
          3: "#FF6C2D",
          4: "#FF9B61",
          5: "#FFD5AB",
        },
        light: {
          1: "#64062C",
          2: "#961130",
          3: "#D1232C",
          4: "#F18778",
          5: "#FCDFD2",
        },
      },
      info: {
        dark: {
          1: "#222E93",
          2: "#4F62DB",
          3: "#6D83FF",
          4: "#A7B7FF",
          5: "#E1E8FF",
        },
        light: {
          1: "#002466",
          2: "#01489A",
          3: "#027DD6",
          4: "#62C6F2",
          5: "#CAF3FC",
        },
      },
      primary: {
        dark: {
          1: "#00E6F6",
          2: "#00E6F6",
          3: "#78F2FA",
          4: "#B3F7FC",
          5: "#DEFBFD",
        },
        light: {
          1: "#1F6CAB",
          2: "#72A2CA",
          3: "#71A2CA",
          4: "#A7C5DE",
          5: "#D4E2EF",
        },
      },
      gray: {
        100: "#62759A",
        200: "#8E9EB8",
        300: "#D7DEE6",
        400: "#D7DEE6",
        500: "#F1F6FA",
      },
    },
  },
  plugins: [],
};
