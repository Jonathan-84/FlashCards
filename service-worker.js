// Started trying to do use the service worker, install issues, need to trouble shoot. 
// touched this file, manifest json and index.html

var staticCacheName = "pwa";
 
// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(["/"]);
    })
  );
});
 
// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
 
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});