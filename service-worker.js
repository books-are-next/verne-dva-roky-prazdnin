/* global self, caches, fetch */
/* eslint-disable no-restricted-globals */

const CACHE = 'cache-993013b';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./colophon.html","./dva_roky_prazdnin_02.html","./dva_roky_prazdnin_03.html","./dva_roky_prazdnin_05.html","./dva_roky_prazdnin_06.html","./dva_roky_prazdnin_07.html","./dva_roky_prazdnin_01.html","./dva_roky_prazdnin_08.html","./dva_roky_prazdnin_09.html","./dva_roky_prazdnin_10.html","./dva_roky_prazdnin_11.html","./dva_roky_prazdnin_12.html","./dva_roky_prazdnin_13.html","./dva_roky_prazdnin_14.html","./dva_roky_prazdnin_15.html","./dva_roky_prazdnin_16.html","./dva_roky_prazdnin_17.html","./dva_roky_prazdnin_18.html","./dva_roky_prazdnin_19.html","./dva_roky_prazdnin_20.html","./dva_roky_prazdnin_21.html","./dva_roky_prazdnin_22.html","./dva_roky_prazdnin_23.html","./dva_roky_prazdnin_24.html","./dva_roky_prazdnin_25.html","./dva_roky_prazdnin_26.html","./dva_roky_prazdnin_27.html","./dva_roky_prazdnin_28.html","./dva_roky_prazdnin_29.html","./dva_roky_prazdnin_30.html","./dva_roky_prazdnin_31.html","./dva_roky_prazdnin_32.html","./dva_roky_prazdnin_33.html","./dva_roky_prazdnin_34.html","./dva_roky_prazdnin_35.html","./dva_roky_prazdnin_36.html","./dva_roky_prazdnin_37.html","./dva_roky_prazdnin_38.html","./dva_roky_prazdnin_39.html","./dva_roky_prazdnin_40.html","./dva_roky_prazdnin_41.html","./dva_roky_prazdnin_42.html","./dva_roky_prazdnin_43.html","./dva_roky_prazdnin_44.html","./dva_roky_prazdnin_46.html","./dva_roky_prazdnin_45.html","./dva_roky_prazdnin_47.html","./dva_roky_prazdnin_48.html","./dva_roky_prazdnin_49.html","./dva_roky_prazdnin_50.html","./dva_roky_prazdnin_51.html","./dva_roky_prazdnin_52.html","./dva_roky_prazdnin_53.html","./dva_roky_prazdnin_54.html","./dva_roky_prazdnin_55.html","./dva_roky_prazdnin_56.html","./dva_roky_prazdnin_57.html","./dva_roky_prazdnin_58.html","./dva_roky_prazdnin_59.html","./dva_roky_prazdnin_60.html","./dva_roky_prazdnin_61.html","./dva_roky_prazdnin_62.html","./dva_roky_prazdnin_63.html","./dva_roky_prazdnin_64.html","./dva_roky_prazdnin_65.html","./dva_roky_prazdnin_66.html","./dva_roky_prazdnin_67.html","./dva_roky_prazdnin_68.html","./dva_roky_prazdnin_69.html","./dva_roky_prazdnin_70.html","./dva_roky_prazdnin_71.html","./dva_roky_prazdnin_72.html","./dva_roky_prazdnin_73.html","./dva_roky_prazdnin_74.html","./dva_roky_prazdnin_75.html","./dva_roky_prazdnin_76.html","./dva_roky_prazdnin_77.html","./dva_roky_prazdnin_78.html","./dva_roky_prazdnin_79.html","./dva_roky_prazdnin_80.html","./dva_roky_prazdnin_81.html","./dva_roky_prazdnin_82.html","./dva_roky_prazdnin_83.html","./dva_roky_prazdnin_84.html","./dva_roky_prazdnin_85.html","./dva_roky_prazdnin_86.html","./dva_roky_prazdnin_87.html","./dva_roky_prazdnin_88.html","./dva_roky_prazdnin_89.html","./dva_roky_prazdnin_90.html","./dva_roky_prazdnin_91.html","./dva_roky_prazdnin_92.html","./dva_roky_prazdnin_93.html","./favicon.png","./index.html","./manifest.json","./resources.html","./resources/dva_roky_01.jpg","./resources/dva_roky_02.jpg","./resources/dva_roky_03.jpg","./resources/dva_roky_04.jpg","./resources/dva_roky_05.jpg","./resources/dva_roky_06.jpg","./resources/dva_roky_07.jpg","./resources/dva_roky_08.jpg","./resources/dva_roky_09.jpg","./resources/dva_roky_10.jpg","./resources/dva_roky_11.jpg","./resources/dva_roky_12.jpg","./resources/dva_roky_13.jpg","./resources/dva_roky_14.jpg","./resources/dva_roky_15.jpg","./resources/dva_roky_16.jpg","./resources/dva_roky_17.jpg","./resources/dva_roky_18.jpg","./resources/dva_roky_19.jpg","./resources/dva_roky_20.jpg","./resources/dva_roky_21.jpg","./resources/dva_roky_22.jpg","./resources/dva_roky_24.jpg","./resources/dva_roky_23.jpg","./resources/dva_roky_25.jpg","./resources/dva_roky_26.jpg","./resources/dva_roky_27.jpg","./resources/dva_roky_28.jpg","./resources/image001.jpg","./resources/image002.jpg","./resources/image003.jpg","./resources/index.xml","./resources/obalka.jpg","./resources/upoutavka_eknihy.jpg","./scripts/bundle.js","./style/style.min.css"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
