import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'SI579_finalproj',
  test: {
    globals: true,
    environment: 'jsdom',
    // loader: { '.js': 'jsx' }
  },
})
