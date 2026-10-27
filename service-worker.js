/**
 * FocusDock — Service Worker v2.4.4
 * Network-first with graceful cache fallback.
 * Safe update strategy: old cache is cleaned only after new SW activates.
 */

const CACHE_NAME = 'focusdock-cache-v2.4.4';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './privacy.html',
  './style.css',
  './app.js',
  './audio-engine.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  // Pre-cache assets during install, THEN skip waiting
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  // Delete old caches from previous versions only
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Network first: serve fresh from network, fallback to cache if offline
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});
