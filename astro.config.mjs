import { defineConfig, squooshImageService } from "astro/config";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://goods.carrier.express",
  integrations: [markdoc(), sitemap(), solidJs()],
  image: {
    service: squooshImageService(),
  },
});
