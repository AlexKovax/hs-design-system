import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { join } from 'path'

function serveMarkdownUtf8(): Plugin {
  return {
    name: 'serve-markdown-utf8',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.endsWith('.md') || req.url?.endsWith('.css')) {
          try {
            const filePath = join(process.cwd(), 'public', req.url)
            const mime = req.url.endsWith('.md') ? 'text/markdown' : 'text/css'
            const content = readFileSync(filePath, 'utf-8')
            res.setHeader('Content-Type', `${mime}; charset=utf-8`)
            res.end(content)
          } catch {
            next()
          }
          return
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [serveMarkdownUtf8(), react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['dev.hosakka.studio'],
  },
})
