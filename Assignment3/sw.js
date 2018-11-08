
// //Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
    .register('/scripts/sw.js')
    .then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful ', registration.scope);
    }, function(error) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}


// Files to cache
var cacheName = 'Assignment3';
var appShellFiles = [
  '/MobileApp/Assignment3/script/manifest.json',
  '/MobileApp/Assignment3/bulma.min.css',
  '/MobileApp/Assignment3/index,html',
  '/MobileApp/Assignment3/main.js',
  '/MobileApp/Assignment3/images//home/pgd-swd/MobileApp/Assignment2/images/1048480_110803083958_Gautrain-train.jpg"',
  '/MobileApp/Assignment3/images/Assignment3/images/blob',
  '/MobileApp/Assignment3/images/Assignment3/images/2cdd09a9e987466f98203b85c4aaf3c7.png',
  '/MobileApp/Assignment3/images/2833b497538940aba2aa2c51540740f0.png',
  '/MobileApp/Assignment3/images/59590-640x360-overground-train_640.jpg',
  '/MobileApp/Assignment3/images/kisspng-pedestrian-crossing-traffic-sign-5ae0f77785c2f5.7254789415246928555479.jpg',
  '/MobileApp/Assignment3/images/sports_car---do-not-delete-444683.jpg',
  
];
var gamesImages = [];
for(var i=0; i<games.length; i++) {
  gamesImages.push('data/img/'+games[i].slug+'.jpg');
}
var contentToCache = appShellFiles.concat(gamesImages);

// Installing Service Worker
self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});