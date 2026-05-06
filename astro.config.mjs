import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL ?? "https://shizzoobies.github.io";
const base = process.env.PUBLIC_BASE_PATH ?? "/Alexi-Hart";

export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  integrations: [mdx(), tailwind({ applyBaseStyles: false }), sitemap()]
});
