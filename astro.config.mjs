import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare'; // 1. 引入 Cloudflare 轉接器

// https://astro.build/config
export default defineConfig({
  output: 'server',         // 2. 確保 output 設定為 'server' 或 'hybrid' (SSR 模式)
  adapter: cloudflare(),    // 3. 加入轉接器
});