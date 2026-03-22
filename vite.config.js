import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Important for GitHub Pages
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 8080,
  },
});
