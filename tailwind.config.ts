import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
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
            secondaryBackground: "#1f262d",
            foreground: "#11181C",
            primary: {
              foreground: "#ffffff",
              DEFAULT: "#006FEE",
            },
            secondary: {
              foreground: "#ffffff",
              DEFAULT: "#98BDFF",
            },
          },
        },
        dark: {
          colors: {
            secondaryBackground: "#1f262d",
            foreground: "#ECEDEE",
            primary: {
              foreground: "#ffffff",
              DEFAULT: "#006FEE",
            },
            secondary: {
              foreground: "#ffffff",
              DEFAULT: "#98BDFF",
            },
          },
        },
      },
    }),
  ],
};
export default config;
