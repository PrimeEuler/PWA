var CACHE_NAME = 'keystore';

var resourcesToCache = [
    '/',
    '/css/keystore.css',
    '/index.html',
    '/js/auth.js',
    '/js/app.js',
    '/js/pouchdb-7.2.1.min.js',
    '/js/x509.js',
    '/js/crypto.js',
    'https://apis.google.com/js/platform.js',
    '/keystore.webmanifest',
    '/icon/unit1.png',
    '/icon/default.svg',
    '/favicon.ico'

];

self.addEventListener('install', function(event) {
    console.info('installing service worker');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.info('cache opened');

                return cache.addAll(resourcesToCache);
            })
    );
});

self.addEventListener('activate', function(event) {
    console.info('service worker activated');
});

self.addEventListener('fetch', function(event) {
    //console.log(event);
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                console.log('request:', event.request);

                if (response) {
                    console.info('cache hit');
                    return response;
                }

                console.info('fetching');
                return fetch(event.request);
            })
    );
});
