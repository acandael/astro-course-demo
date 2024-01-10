import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  site: "https://rhythm.nation",
  server: {
    port: 3000
  },
  output: "server",
  adapter: netlify()
});