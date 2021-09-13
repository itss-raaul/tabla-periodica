const cacheName = 'tp-v1';
const staticAssets = [
  
  './',
  './index.html',
  './styles.css',
  './index.js',
  './manifest.webmanifest',
  '.
  
]

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});
