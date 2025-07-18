// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // ✨ 당신의 도메인 URL을 반드시 입력하세요.
  site: 'https://gidda.kr',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});