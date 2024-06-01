import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import externals from "vite-plugin-externals";
import fileJson from "./test.json";
export default defineConfig((command, mode) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      port: 5173,
    },
    plugins: [
      react(),
      // externals({
      //   //không được tạo trong file bundle
      // }),
    ],
    resolve: {
      // extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      alias: {
        "@": "/src", // Alias cho thư mục src
        "~": "/public", // Alias cho thư mục public
        store: "./configStore/configStore",
        admin: "../../components/admin/LeftSidebar",
      },
    },
    define: {
      global: "globalThis",
      window1: "window.GetParams",
      document1: "document",
      test: fileJson,
      NUMBER_VARIABLE: 123,
    },
  };
});
