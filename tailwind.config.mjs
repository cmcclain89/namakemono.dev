import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        sligoo: {
          background: {
            DEFAULT: "#f7e6ff",
          },
          text: {
            DEFAULT: "#807280",
          },
        },
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
