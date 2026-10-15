import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/site-components/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: resolve(import.meta.dirname, 'site-components'),
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: resolve(import.meta.dirname, 'frontend/main.jsx'),
      output: {
        entryFileNames: 'main.js',
        assetFileNames: (asset) => asset.name?.endsWith('.css')
          ? 'main.css'
          : 'assets/[name][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
  },
});