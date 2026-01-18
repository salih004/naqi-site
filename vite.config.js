import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/naqi-site/", // <- This fixes all absolute paths
  plugins: [react()],
});
