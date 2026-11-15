import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// base './' supaya build jalan di Vercel (root) dan GitHub Pages (subpath repo).
export default defineConfig({
  base: './',
  plugins: [vue()],
})
