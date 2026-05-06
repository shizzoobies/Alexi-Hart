import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Deployed via Cloudflare Pages, served at site root.
// Override PUBLIC_SITE_URL in Cloudflare env vars once a custom domain is wired.
const site = process.env.PUBLIC_SITE_URL ?? "https://alexihart.com";
const base = process.env.PUBLIC_BASE_PATH ?? "";

export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  integrations: [mdx(), tailwind({ applyBaseStyles: false }), sitemap()]
});
