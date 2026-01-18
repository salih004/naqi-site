import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/naqi-site/", // Important for GitHub Pages
  plugins: [react()],
});
