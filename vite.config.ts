import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // if you use a custom domain root, keep '/' 
  // if you deploy to a repo subpath, e.g., /my-repo/, set base: '/my-repo/'
});
