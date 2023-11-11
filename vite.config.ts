import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';

const MODE = process.env.NODE_ENV;
const development = MODE === 'development';
export default defineConfig({
  plugins: [
    Vue(),
    VueJsx()
  ],
  optimizeDeps: {
    disabled: true,
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      assert: 'assert',
    },
  },
});
