import plugin from "tailwind-scrollbar";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3b82f6",
          DEFAULT: "#07437A",
          dark: "#1e40af",
        },
      },
    },
  },
  plugins: [plugin],
};
