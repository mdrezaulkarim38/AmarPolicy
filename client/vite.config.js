import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts:["56dc-103-137-229-141.ngrok-free.app"],
    host: true,
    port: 5173,
  }
})
