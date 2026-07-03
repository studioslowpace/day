import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // 開啟伺服器渲染
  adapter: cloudflare(),
});