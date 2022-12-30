import { Router } from '@edgio/core/router'

export default new Router()
  .fallback(({ serveStatic, cache, compute }) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 10
      }
    })
    serveStatic('index.html', {
      onNotFound: async () => await compute((req, res) => {
        res.body = new Date().toString()
        res.statusCode= 200
        res.statusMessage = 'OK'
      })
    })
  })
 
