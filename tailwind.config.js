/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import children from "tailwindcss-children";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography, children],
};
