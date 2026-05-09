import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://gm-eletrica.com.br',
  output: "hybrid",
  adapter: cloudflare()
});