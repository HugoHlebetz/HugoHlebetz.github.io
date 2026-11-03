import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site =
  process.env.SITE_URL ||
  (vercelUrl ? `https://${vercelUrl}` : 'https://portfolio-hugo-hlebetz.vercel.app');

const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
