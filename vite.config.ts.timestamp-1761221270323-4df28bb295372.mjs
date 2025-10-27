// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/monday": {
        target: "https://api.monday.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/monday/, "/v2"),
        timeout: 3e4,
        proxyTimeout: 3e4,
        secure: true,
        headers: {
          "Origin": "https://api.monday.com",
          "Referer": "https://api.monday.com"
        },
        configure: (proxy, options) => {
          proxy.on("error", (err, req, res) => {
            console.error("\u274C Proxy Error:", err);
          });
          proxy.on("proxyReq", (proxyReq, req, res) => {
            console.log("\u{1F4E4} Proxy Request:", req.method, req.url);
            proxyReq.setHeader("User-Agent", "Neon-Konfigurator/1.0");
            proxyReq.setHeader("Accept", "application/json");
          });
          proxy.on("proxyRes", (proxyRes, req, res) => {
            console.log("\u{1F4E5} Proxy Response:", proxyRes.statusCode);
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, API-Version");
          });
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ["lucide-react"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICAnL2FwaS9tb25kYXknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHBzOi8vYXBpLm1vbmRheS5jb20nLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGlcXC9tb25kYXkvLCAnL3YyJyksXG4gICAgICAgIHRpbWVvdXQ6IDMwMDAwLFxuICAgICAgICBwcm94eVRpbWVvdXQ6IDMwMDAwLFxuICAgICAgICBzZWN1cmU6IHRydWUsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnT3JpZ2luJzogJ2h0dHBzOi8vYXBpLm1vbmRheS5jb20nLFxuICAgICAgICAgICdSZWZlcmVyJzogJ2h0dHBzOi8vYXBpLm1vbmRheS5jb20nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpZ3VyZTogKHByb3h5LCBvcHRpb25zKSA9PiB7XG4gICAgICAgICAgcHJveHkub24oJ2Vycm9yJywgKGVyciwgcmVxLCByZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1Mjc0QyBQcm94eSBFcnJvcjonLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHByb3h5Lm9uKCdwcm94eVJlcScsIChwcm94eVJlcSwgcmVxLCByZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcdUQ4M0RcdURDRTQgUHJveHkgUmVxdWVzdDonLCByZXEubWV0aG9kLCByZXEudXJsKTtcbiAgICAgICAgICAgIC8vIEFkZCByZXF1aXJlZCBoZWFkZXJzIGZvciBNb25kYXkuY29tIEFQSVxuICAgICAgICAgICAgcHJveHlSZXEuc2V0SGVhZGVyKCdVc2VyLUFnZW50JywgJ05lb24tS29uZmlndXJhdG9yLzEuMCcpO1xuICAgICAgICAgICAgcHJveHlSZXEuc2V0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHByb3h5Lm9uKCdwcm94eVJlcycsIChwcm94eVJlcywgcmVxLCByZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcdUQ4M0RcdURDRTUgUHJveHkgUmVzcG9uc2U6JywgcHJveHlSZXMuc3RhdHVzQ29kZSk7XG4gICAgICAgICAgICAvLyBBZGQgQ09SUyBoZWFkZXJzXG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgICAgICAgICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBPUFRJT05TJyk7XG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ0NvbnRlbnQtVHlwZSwgQXV0aG9yaXphdGlvbiwgQVBJLVZlcnNpb24nKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXhjbHVkZTogWydsdWNpZGUtcmVhY3QnXSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLGVBQWU7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxrQkFBa0IsS0FBSztBQUFBLFFBQ3ZELFNBQVM7QUFBQSxRQUNULGNBQWM7QUFBQSxRQUNkLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxVQUNQLFVBQVU7QUFBQSxVQUNWLFdBQVc7QUFBQSxRQUNiO0FBQUEsUUFDQSxXQUFXLENBQUMsT0FBTyxZQUFZO0FBQzdCLGdCQUFNLEdBQUcsU0FBUyxDQUFDLEtBQUssS0FBSyxRQUFRO0FBQ25DLG9CQUFRLE1BQU0sdUJBQWtCLEdBQUc7QUFBQSxVQUNyQyxDQUFDO0FBQ0QsZ0JBQU0sR0FBRyxZQUFZLENBQUMsVUFBVSxLQUFLLFFBQVE7QUFDM0Msb0JBQVEsSUFBSSw0QkFBcUIsSUFBSSxRQUFRLElBQUksR0FBRztBQUVwRCxxQkFBUyxVQUFVLGNBQWMsdUJBQXVCO0FBQ3hELHFCQUFTLFVBQVUsVUFBVSxrQkFBa0I7QUFBQSxVQUNqRCxDQUFDO0FBQ0QsZ0JBQU0sR0FBRyxZQUFZLENBQUMsVUFBVSxLQUFLLFFBQVE7QUFDM0Msb0JBQVEsSUFBSSw2QkFBc0IsU0FBUyxVQUFVO0FBRXJELGdCQUFJLFVBQVUsK0JBQStCLEdBQUc7QUFDaEQsZ0JBQUksVUFBVSxnQ0FBZ0MsaUNBQWlDO0FBQy9FLGdCQUFJLFVBQVUsZ0NBQWdDLDBDQUEwQztBQUFBLFVBQzFGLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
