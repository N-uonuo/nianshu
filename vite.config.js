import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ["."], // 确保 Vite 可以访问项目目录
    },
    historyApiFallback: true, // 确保未匹配的路由重定向到 index.html
  },
  build: {
    rollupOptions: {
      input: "./index.html", // 确保入口文件正确
    },
  },
  resolve: {
    alias: {
      "@": "/src", // 可选：设置路径别名
    },
  },
});