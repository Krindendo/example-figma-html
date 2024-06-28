import { fontFamily, screens } from "tailwindcss/defaultTheme";

export default {
  content: ["**/*.{html,js}"],
  theme: {
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
