const CACHE_NAME = 'amv1017-pro-cache-v1.0.1'

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200) {
          return response
        }

        const clonedResponse = response.clone()

        caches
          .open(CACHE_NAME)
          .then((cache) => cache.put(event.request, clonedResponse))

        return response
      })
    })
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      return keys.map(async (cache) => {
        if (cache !== CACHE_NAME) {
          return await caches.delete(cache)
        }
      })
    })()
  )
})
