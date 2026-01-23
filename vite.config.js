import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Important for GitHub Pages
  plugins: [react()],
});
