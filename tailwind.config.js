import { fontFamily, screens } from "tailwindcss/defaultTheme";

export default {
  content: ["**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        montserrat: ["Montserrat", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
