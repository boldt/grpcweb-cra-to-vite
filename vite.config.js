import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

export default () => {
  return defineConfig({
    plugins: [viteCommonjs(), react()],
    server: {
      port: 3000,
  },
 })
}