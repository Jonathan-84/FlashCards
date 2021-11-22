const APP_PREFIX = 'BudgetTracker-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;
const FILES_TO_CACHE =['index.html','offline.html','https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/Blueyfloss.gif','https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/MickeyGood.gif','https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/MickeyGreat.gif','https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/PJMasks.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/animatedGB.gif',
'https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/minions.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/TMNT.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/kermit.gif',
'https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/olaf.gif', 'https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/stevie.gif','https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/genie.gif']

const self=this
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache : ' + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            let cacheKeeplist = keyList.filter(function (key) {
                return key.indexOf(APP_PREFIX)
            })

            cacheKeeplist.push(CACHE_NAME);

            // eslint-disable-next-line array-callback-return
            return Promise.all(keyList.map(function (key, i) {
                if (cacheKeeplist.indexOf(key) === -1) {
                    console.log('deleting cache : ' + keyList[i]);
                    return caches.delete(keyList[i]);
                }
            }));
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log('fetch request : ' + e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (request) {
            if (request) {
                console.log('responding with cache : ' + e.request.url)
                return request
            } else {
                console.log('file is not cached, fetching : ' + e.request.url)
                return fetch(e.request)
            }
        })
    )
});