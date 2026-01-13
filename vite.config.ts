import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Enable compression
    minify: 'terser',
    // Generate sourcemaps for debugging
    sourcemap: true,
    // Set target for broader browser support
    target: 'es2015',
    // Optimize for production
    chunkSizeWarningLimit: 500,
  },
  // Enable preview mode optimizations
  preview: {
    port: 4173,
    strictPort: true,
  },
  // Base path configuration (useful for deployment flexibility)
  base: './',
})
