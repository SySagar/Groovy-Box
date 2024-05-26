import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    libInjectCss(),
    dts({ include: ['lib'] }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './lib'),
      '@utils': resolve(__dirname, './utils'),
    },
  },
  build: {
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        entryFileNames: 'index.mjs',
      },
    },
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.tsx'),
      formats: ['es'],
    },
  },
});
