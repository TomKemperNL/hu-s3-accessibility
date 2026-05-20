import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        heen: resolve(__dirname, 'heen.html'),
        weer: resolve(__dirname, 'weer.html')
      }
    }
  }
});