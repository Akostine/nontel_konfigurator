import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/monday': {
        target: 'https://api.monday.com/v2',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/monday/, ''),
        timeout: 30000,
        proxyTimeout: 30000,
        secure: true,
        configure: (proxy, options) => {
          proxy.on('error', (err, req, res) => {
            console.error('❌ Proxy Error:', err);
          });
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('📤 Proxy Request:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('📥 Proxy Response:', proxyRes.statusCode);
          });
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
