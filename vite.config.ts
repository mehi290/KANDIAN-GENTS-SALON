import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "src/server.ts" // Ensure this matches your file path
    },
    deploymentTarget: "vercel",
  },
  cloudflare: false,
});