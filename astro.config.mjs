import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  devOptions: {
    hostname: "0.0.0.0"
  },
  output: "server",
  adapter: netlify()
});