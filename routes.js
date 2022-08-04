// This file was added by layer0 init.
// You should commit this file to source control.

import { Router } from '@layer0/core/router'

// const ONE_HOUR = 60 * 60
// const ONE_DAY = 24 * ONE_HOUR

export default new Router()
  // send any unmatched request to origin
  .fallback(({ serveStatic, cache, compute }) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 10
      }
    })
    serveStatic('index.html', {
      onNotFound: async () => await compute((req, res) => {
        res.body= new Date().toString()
        res.statusCode= 200
        res.statusMessage = 'OK'
      })
    })
  })
 