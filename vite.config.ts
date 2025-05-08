import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    allowedHosts: ['31bd-85-169-154-75.ngrok-free.app']
  },
  plugins: [react(), tailwindcss()],
  base: '/portfolio/',
})
