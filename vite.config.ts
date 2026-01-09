import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  // Netlify ke liye correct base
  base: '/',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // IMPORTANT: outDir remove kiya
  // Vite default "dist" banayega (Netlify compatible)
  build: {
    target: 'esnext',
  },

  server: {
    port: 3000,
    open: true,
  },
});
