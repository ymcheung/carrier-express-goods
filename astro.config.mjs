import { defineConfig, squooshImageService } from "astro/config";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://goods.carrier.express",
  integrations: [markdoc(), sitemap()],
  image: {
    service: squooshImageService(),
  }
});
