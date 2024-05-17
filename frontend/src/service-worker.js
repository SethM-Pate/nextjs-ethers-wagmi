// Define the cache name
const CACHE_NAME = 'v1';
// Specify the assets to cache (add your list of assets here)
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js', // Adjust according to your app's file structure
  '/static/js/0.chunk.js', // Example chunk file - adjust as needed
  '/static/js/main.chunk.js', // Main chunk file - adjust as needed
  '/index.css',
  '/App.css', // Add or remove files according to your project structure
];

// Install a service worker and cache all of the app's content
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch data from the cache if offline, or from the network if online
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response from cache
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheAllowlist = ['v1']; // Add any other cache names you want to keep

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
