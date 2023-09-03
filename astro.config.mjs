import { defineConfig, squooshImageService } from 'astro/config';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  integrations: [markdoc()],
  image: {
    service: squooshImageService(),
  }
});
