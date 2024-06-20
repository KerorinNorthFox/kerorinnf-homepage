/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        hackgen: ["HackGen-Regular", "HackGen-Bold"] /* メインフォント */,
      },
      spacing: {
        header: "4rem",
      },
      colors: {
        light: {
          text: "#454545",
          bg: "#ffffff",
          footer: {
            bg: "#f2f7fd",
            text: "#6b7280",
          },
        },
        dark: {
          text: "#F5F5F5",
          bg: "#242629",
          footer: {
            bg: "#2E3035",
            text: "#A0A0A0",
          },
        },
        hover: "rgba(100,100,100,0.2)",
        accent: {
          primary: "",
          secondary: "",
        },
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
      backgroundImage: {
        "footer-gradient":
          "linear-gradient(to top, rgba(12,35,61,0.5), rgba(12,35,61,0.4), rgba(12,35,61,0.3), rgba(12,35,61,0.05))",
      },
      transitionDuration: {
        bg: "500ms",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
