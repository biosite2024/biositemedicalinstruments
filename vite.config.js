import React from 'react';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'  // 👈 THIS LINE IS IMPORTANT FOR DEPLOYMENT
  }
});
