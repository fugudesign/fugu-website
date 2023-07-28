/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      serif: '"Baskerville", Georgia, Cambria, "Times New Roman", Times, serif',
      handwritten:
        '"Valerie Indirose", Georgia, Cambria, "Times New Roman", Times, serif',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@kamona/tailwindcss-perspective")],
};
