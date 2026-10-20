import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Served under /harmonic-minor on the unified domain (Vercel multi-zone).
  base: '/harmonic-minor/',
  plugins: [react()],
  server: { port: 5189 },
});
