const CACHE_NAME = 'bosla-v10';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// مهم جدًا علشان يسيطر على الصفحة
self.addEventListener('fetch', event => {
  // خليه يعدي عادي بدون لعب
});
