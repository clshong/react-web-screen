import { resolve } from "path";
import { defineConfig } from "vite";
import { compression } from "vite-plugin-compression2";
import react from "@vitejs/plugin-react-swc";
import { viteMockServe } from "vite-plugin-mock";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    { ...compression(), apply: "build" },
    viteMockServe({
      mockPath: "./src/api/mock",
      // 生产打包开关
      enable: true,
      // 监视文件更改
      watchFiles: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: pathResolve("src"),
      },
    ],
    dedupe: ["vue"],
  },
  build: {
    // 默认 esbuild minify，而 esbuild 不仅会做压缩，
    // 而且还会在 target 配置允许的范围内做一些语法转换（例如把低版本语法转为高版本），
    // 尽可能减小 bundle 体积。最关键的是，esbuild 的 target 默认 esnext，
    // 这种情况下，即使你用 Babel、PostCSS 等工具做语法转换，也很难保证 esbuild 不会给你转换成高版本语法
    // （因为代码压缩总是最后一步）。
    // 由于 esbuild 最低只支持 es2015，如果需要支持更低版本浏览器，则可以改用 terser 压缩
    // minify: "terser",
    target: "es2015",
    cssTarget: "chrome61",
    rollupOptions: {
      output: {
        compact: true, // 开启紧凑模式，省略所有不必要的空格和注释
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom", "zustand"],
          antd: ["antd", "dayjs"],
        },
      },
    },
  },
});
