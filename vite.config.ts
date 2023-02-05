import solid from 'solid-start/vite'
import vercelAdapter from 'solid-start-vercel'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [solid({ ssr: false, adapter: vercelAdapter({ edge: true }) })],
})
