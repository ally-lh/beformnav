import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        mainPurpleAccent: "#653AAB",
        darkBlack: "#242424",
        greyAccent: "#5C5C5C",
        backgroundGrey: "#F1F0F1",
      },
    },
  },
  plugins: [],
} satisfies Config;
