// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://gidda.kr', // ✨ 당신의 도메인 URL을 반드시 입력하세요.
    integrations: [sitemap()],
});
