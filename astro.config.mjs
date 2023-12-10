import { defineConfig, squooshImageService } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://goods.carrier.express',
  // output: "server",
  output: 'hybrid',
  integrations: [markdoc(), sitemap(), solidJs()],
  image: {
    service: squooshImageService()
  },
  adapter: vercel()
});