import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/phishing-demo/', // Use your repo name here
  plugins: [react()],
})
