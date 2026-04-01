self.addEventListener('install', event => {
  self.skipWaiting(); // تثبيت فوري إجباري
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim()); // تفعيل فوري
});

self.addEventListener('fetch', event => {
  // تلبية شروط جوجل كروم بدون تعقيد
  event.respondWith(fetch(event.request).catch(() => new Response('Offline')));
});
