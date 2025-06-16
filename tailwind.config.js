/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004d7a",
        secondary: "#1abc9c",
        neutral: "#2c3e50",
        background: "#0e1b2a",
        muted: "#f5f7fa",
        "text-light": "#e5e7eb",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "1280px",
          "2xl": "1440px",
        },
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0, 0, 0, 0.05)",
        card: "0 10px 25px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        md: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
      },
      spacing: {
        section: "6rem",
        container: "1rem",
      },
    },
  },
  plugins: [],
};
