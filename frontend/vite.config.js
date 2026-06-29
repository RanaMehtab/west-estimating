import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Explicit empty PostCSS config — prevents Vite from walking up the directory
  // tree looking for postcss.config.* or a "postcss" key in any package.json.
  // Avoids the "Failed to load PostCSS config" error caused by stray UTF-8
  // BOMs in JSON files (common on Windows).
  css: {
    postcss: { plugins: [] }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    port: 5173
  }
});
