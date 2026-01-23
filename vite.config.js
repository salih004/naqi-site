import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/naqi-site/", // This matches your GitHub repo name
  plugins: [react()],
});