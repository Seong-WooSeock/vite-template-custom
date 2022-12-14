import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  build: {
    lib: {
      entry: './lib/index.js',
      formats: ['es'],
    },
    sourcemap: 'inline',
  },
});
// vite 설정 추가는 계속 해보기
