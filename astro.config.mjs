import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://kerorinnf.vercel.app",
  output: "hybrid",
  integrations: [mdx(), sitemap(), tailwind(), react()],
  adapter: vercel()
});