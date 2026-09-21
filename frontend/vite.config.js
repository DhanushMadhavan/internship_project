import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages serves this project from the repository subdirectory.
  // Local development is served from http://localhost:5173/.
  base: mode === "production" ? "/TPS-exp-1---BK/" : "/",
}));
