import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages deploys to https://<user>.github.io/<repo>/
  // Set base to repo name for correct asset paths
  // The website now lives at www.spoolkid.com, the base has to be removed or '/'
  base: '/',
});
