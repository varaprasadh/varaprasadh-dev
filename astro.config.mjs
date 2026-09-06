import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

const SITE = 'https://varaprasadh.dev';

const SITEMAP_EXCLUDE = new Set([
  '/another-chance-another-lifee',
  '/secret-content',
  '/profile',
  '/rss.xml',
]);

export default defineConfig({
  site: SITE,
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        return !SITEMAP_EXCLUDE.has(path);
      },
    }),
    tailwind(),
  ],
});
