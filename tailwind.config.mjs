/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "390px",
        xsm: "500px",
        xmd: "800px",
        mac: "1440px",
        hd: "1536px",
        fullhd: "1920px",
        "2k": "2560px",
        "4k": "3840px",
      },
    },
  },
  plugins: [],
};
