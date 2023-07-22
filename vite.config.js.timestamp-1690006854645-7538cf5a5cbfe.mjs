// vite.config.js
import { defineConfig } from "file:///run/media/rattin/Document/Programing/reactjs/vite/foodhub/node_modules/vite/dist/node/index.js";
import react from "file:///run/media/rattin/Document/Programing/reactjs/vite/foodhub/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteImagemin from "file:///run/media/rattin/Document/Programing/reactjs/vite/foodhub/node_modules/vite-plugin-imagemin/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvcnVuL21lZGlhL3JhdHRpbi9Eb2N1bWVudC9Qcm9ncmFtaW5nL3JlYWN0anMvdml0ZS9mb29kaHViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvcnVuL21lZGlhL3JhdHRpbi9Eb2N1bWVudC9Qcm9ncmFtaW5nL3JlYWN0anMvdml0ZS9mb29kaHViL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ydW4vbWVkaWEvcmF0dGluL0RvY3VtZW50L1Byb2dyYW1pbmcvcmVhY3Rqcy92aXRlL2Zvb2RodWIvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCJcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSBcInZpdGUtcGx1Z2luLWltYWdlbWluXCJcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICByZWFjdCgpLFxuICAgICAgICB2aXRlSW1hZ2VtaW4oe1xuICAgICAgICAgICAgZ2lmc2ljbGU6IHtcbiAgICAgICAgICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcbiAgICAgICAgICAgICAgICBpbnRlcmxhY2VkOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpcG5nOiB7XG4gICAgICAgICAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW96anBlZzoge1xuICAgICAgICAgICAgICAgIHF1YWxpdHk6IDIwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBuZ3F1YW50OiB7XG4gICAgICAgICAgICAgICAgcXVhbGl0eTogWzAuOCwgMC45XSxcbiAgICAgICAgICAgICAgICBzcGVlZDogNCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdmdvOiB7XG4gICAgICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJlbW92ZVZpZXdCb3hcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZW1vdmVFbXB0eUF0dHJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICBdLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1csU0FBUyxvQkFBb0I7QUFDN1gsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sa0JBQWtCO0FBR3pCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxNQUNULFVBQVU7QUFBQSxRQUNOLG1CQUFtQjtBQUFBLFFBQ25CLFlBQVk7QUFBQSxNQUNoQjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ0wsbUJBQW1CO0FBQUEsTUFDdkI7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNMLFNBQVM7QUFBQSxNQUNiO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDTixTQUFTLENBQUMsS0FBSyxHQUFHO0FBQUEsUUFDbEIsT0FBTztBQUFBLE1BQ1g7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNGLFNBQVM7QUFBQSxVQUNMO0FBQUEsWUFDSSxNQUFNO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNJLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxVQUNaO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
