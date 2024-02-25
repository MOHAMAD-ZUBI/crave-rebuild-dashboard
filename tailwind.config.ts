import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-90deg)" },
          "50%": { transform: "rotate(-45deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 300ms ease-in-out",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            secondaryBackground: "#ffffff",
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },

            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            secondaryBackground: "#1f262d",
            foreground: "#ECEDEE",
            primary: {
              //... 50 to 900
              foreground: "#1f262d",
              DEFAULT: "#15191e",
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
};
export default config;
