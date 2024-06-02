/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
				hackgen: ["HackGen-Regular", "HackGen-Bold"] /* メインフォント */
			},
      spacing: {
        header: "4rem",
      },
      colors: {
        light: {
          text: "#292929",
          bg: "rgb(240,240,240)",
        },
        dark: {},
        hover: "rgba(100,100,100,0.2)",
        gradient: {
          from: "#ffdc5e",
          to: "#b0ffcc",
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
      animation: {
        "bg-pan-left": "bg-pan-left 4s ease infinite",
      },
      keyframes: {
        "bg-pan-left": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("flowbite/plugin")
  ],
};
