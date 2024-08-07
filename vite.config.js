import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(() => ({
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  server: {
    port: 5173,
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'lang/locales', // Đường dẫn gốc tới các tệp ngôn ngữ
          dest: 'lang', // Đích đến trong thư mục build
        },
      ],
    }),
    nodePolyfills({
      globals: true,
      process: true,
      buffer: true,
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '~': '/public',
      store: './configStore/configStore',
      admin: '../../components/admin/LeftSidebar',
    },
  },
  define: {
    global: 'globalThis',
    'process.env': {},
    'process.version': JSON.stringify('v18.0.0'),
  },
}));
