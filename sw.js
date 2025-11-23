const CACHE_NAME = 'jingyesi-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  // 如有CSS、JS文件，可加入此处，示例：
  // '/styles.css',
  // '/script.js'
];

// 安装阶段，缓存指定资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// 拦截请求，先查缓存，缓存无则请求网络
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
