/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          400: "#5271FF"
        }
      },
      
      borderWidth: {
        1.5: "1.5px",
        2: "2px",
        2.5: "2.5px",
      },
      gap: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
      }
    },
  },
  plugins: [],
}

