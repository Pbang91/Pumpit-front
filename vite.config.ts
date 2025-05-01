import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@layout': '/src/layout',
      '@lib': '/src/lib',
      '@pages': '/src/pages',
      '@stores': '/src/stores',
      '@types': '/src/types',
    },
  },
});
