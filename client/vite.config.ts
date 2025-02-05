import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["8bb7-27-147-163-77.ngrok-free.app"], // Allow the blocked host
  }
})
