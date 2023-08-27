import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
    viewTransitions: true
  },
  integrations: [markdoc()]
});
