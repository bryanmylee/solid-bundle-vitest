import solid from "vite-plugin-solid";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [solid()],
  test: {
    environment: "jsdom",
    globals: true,
    transformMode: { web: [/.[jt]sx?$/] },
    deps: { registerNodeLoader: true, inline: ["**/foo/**"] },
  },
});
