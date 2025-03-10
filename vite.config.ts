import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const root = process.cwd()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      $src: `${root}/src`,
    },
  },
})
