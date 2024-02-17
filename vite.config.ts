import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ['lib'] })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './lib'),
    },
  },
  build: {
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.tsx'),
      formats: ['es'],
    },
  },
});
