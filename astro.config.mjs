import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
    integrations: [mdx()],
    outDir: 'docs', // ← ここを追加
    base: '/astro-site/'
});

