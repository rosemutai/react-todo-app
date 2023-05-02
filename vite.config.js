import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


const currentDir = path.dirname(new URL(import.meta.url).pathname);
console.log(currentDir)
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(currentDir, 'src'), }
    
  }
})
