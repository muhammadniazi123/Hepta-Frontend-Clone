import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
export default {
  build: {
    outDir: 'build' // Change this to 'build'
  }
};
