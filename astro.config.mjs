import { defineConfig } from 'astro/config';

// 確保長這樣就好，不要有 import cloudflare 或 adapter: cloudflare()
export default defineConfig({
  output: 'static', 
});