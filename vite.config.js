import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@emotion/styled": path.resolve(
        __dirname,
        "node_modules/@emotion/styled"
      ),
      "@emotion/react": path.resolve(__dirname, "node_modules/@emotion/react"),
    },
  },
});
