/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["archives/2020/01/index.html","5ff5833643112724fdee7a35bd373042"],["archives/2020/05/index.html","9521fdd2a969b28158db2bfb4c24ee30"],["archives/2020/12/index.html","413b706d79b868985ea3643ceb67e2d0"],["archives/2020/index.html","1b0ee5a8146546d244694ec15521ace0"],["archives/2021/01/index.html","f180318643e782f3347323ba4d9dad49"],["archives/2021/03/index.html","2dfb65319ee06536063ff6a08c989dff"],["archives/2021/04/index.html","0b843d3afa905bb4dbd786675945e1c5"],["archives/2021/05/index.html","4c2fd2d480f5bdca556b9d5301585efd"],["archives/2021/06/index.html","87ff10e679baabbfaa3f50ed6809e7c1"],["archives/2021/07/index.html","8cc1f104263d76de991db2c46816c40f"],["archives/2021/08/index.html","23fd4b9c1e21afa4e1e2c8cf4192564b"],["archives/2021/09/index.html","b3760105d633b7bd26518763757833fe"],["archives/2021/10/index.html","71db44344aaa7eb7b47323216cc23852"],["archives/2021/11/index.html","f5f1a61972c95a4e6c59f93065ad9e04"],["archives/2021/index.html","45af015aee6f027bd7bc081e747740cb"],["archives/2021/page/2/index.html","997eaeca4cf420c8a020fc3f638bd3c2"],["archives/2021/page/3/index.html","090acfa73367d0dfbb0f472ee81a9a9d"],["archives/index.html","be15ad2907e7b52e5833863049023c66"],["archives/page/2/index.html","20129b8800f01f764d8e321722f60867"],["archives/page/3/index.html","c2dc1a754dba012b2b72d5f55133344a"],["archives/page/4/index.html","830cec99e657db583cfc9564341de1d0"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/BUG/index.html","c0a0af3168fcf70fd11beaaf148cc90b"],["categories/Hexo/index.html","ca090773d9d0e9ea0b724e1faf1c9d69"],["categories/IDEA/index.html","e27c4fef1de70f2e78a2ea110831b6c0"],["categories/Netty/index.html","279b77a6e295455729b28706654e8327"],["categories/Redis/index.html","328f6edf43bb993c0dcdc1b2edc87447"],["categories/Spring/index.html","a890f53db32f618d7a802a9c34baa966"],["categories/index.html","f089fe1a9dc32458400bc37bd70b0c38"],["categories/vscode/index.html","e4acfe70dd09538c7315a98ed56f1b2d"],["categories/容器/index.html","34ecd0aebc38d9f9a44da7f4c8c9b96f"],["categories/工作/index.html","22edd1bdb60d4ea2f0e60882823f298c"],["categories/面试必备/Java基础/index.html","4543cc8211bd9127665e6d36531493fc"],["categories/面试必备/MySQL/index.html","5fd332af856d41b60267fd0f93c39229"],["categories/面试必备/Spring/index.html","891ff206341f470d902d098ba9d677fb"],["categories/面试必备/index.html","baf2c55bcb01aeeda6cefa6d1ebe90eb"],["categories/面试必备/page/2/index.html","21031810e681cd8d1d0b3f42e113fb70"],["categories/面试必备/多线程/index.html","9933dff61690f5c1e6e308c2fda10fd4"],["categories/项目/Android/index.html","8c28f4ae09a252e6b402de2d500b5171"],["categories/项目/index.html","b02474f40cdb8ce80197248dfa8fe502"],["css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["css/index.css","44bacf810fed2654641b90a8dff2aa81"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["index.html","26c7f2a8b5f31fab9edfd9e17d91be41"],["js/main.js","daa594fa296eadb9c43910113c5f8341"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","31ea8efc86e566fedf53ba88cd546620"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","cce80493f3a895e2b32632a941eb1703"],["page/3/index.html","b0f60c399dcbbe3d96f2122f16fa2b98"],["page/4/index.html","2e478c884db92d9654391d9de4189aa4"],["page/5/index.html","7f01a0bf72645fe55a1dcc3210e3da63"],["posts/0.html","371423fa4a900b694685bc84ae99b476"],["posts/1e489958.html","0dd964d942b824516ece89ec08bd08b4"],["posts/277c18f1.html","49b7439c8ff958ee6c45fb03900c6de5"],["posts/34fea2ea.html","15ac95217a0184a67e201eac0e422852"],["posts/373b858b.html","20ce4987b79d68f6fe2ebbcf6488fa43"],["posts/42ed8c3b.html","0a385b02d5a7d56d7bd2e5fa1e5cf5b3"],["posts/4446b2a4.html","27d1a5e02c3988321d58c8353d1d8910"],["posts/4a17b156.html","55d5b4a09073d8d505a59c7bdcfa1ee2"],["posts/566321e7.html","38dc3eb960b03585ca8873853d3a1021"],["posts/5697f279.html","78c0ffb70777292f4e027abb878f80c7"],["posts/5fb5b514.html","3eabea37f28850bc6695dfcca9149c6d"],["posts/5fddb0d.html","4e373a24cda0a9369405bf4324fe46f2"],["posts/632b531d.html","a438c6034d1fbf06113dbdc5ff1384be"],["posts/64cd635.html","ca0eef6c36111f193e41615b76f72767"],["posts/681a2204.html","97ba0c97f1441e513a8a692a41449d94"],["posts/6e264d21.html","96fad46e9425d3fae9d4ce3a46f05db7"],["posts/77c4a9ef.html","8ddada08a1f99968bef002b8c4f784f6"],["posts/7981371.html","bdc2ef703e6727b3410e41db657727c8"],["posts/90cf43cc.html","d91ba19860d4fbee992e3a01d21f0727"],["posts/9683a4f7.html","98f1eafd2c40bd573b0b06af8137a9c2"],["posts/96dca6de.html","ab4e03be123a6fb3df09d3def066e461"],["posts/9eb6681d.html","2a0fe0ad24d6adcff115619dbd900051"],["posts/a0808890.html","9a22f45889add0cc3fb8162510b081ef"],["posts/bae4ff13.html","77de5eaa00d635bd3bedae251e56ebb6"],["posts/c352a0f3.html","c61634792224fcdfded5bc4efc21fec7"],["posts/c8ced817.html","d6dfe53d02247b48a125de3e25a24c4b"],["posts/ca4da212.html","aa3c61c167b43358a21e167a5381b8f5"],["posts/d62ead0.html","d7703e0d59a2f70df99c8997e9159b8b"],["posts/d98c058a.html","758886025d2cd79a19d9e588fadd08c2"],["posts/df083c4d.html","5d37b46b1d05e51434434f48b20ffd60"],["posts/f79db71a.html","01379e482466e2f5436360bceab73037"],["posts/f7ede91d.html","40167ef68859e7bb366850e6f1800781"],["tags/Docker/index.html","93c5569eb7b7c95f13f4eb62e11a8200"],["tags/JDK/index.html","a8a05b66361da6003273eaf77cddc1c0"],["tags/MySQL/index.html","27e298a0258696ed3c5fcede3bdf7d71"],["tags/Netty/index.html","e03592c54339a6cb3506ac713c99485b"],["tags/Spring/index.html","6baf4d55563310f56d6f83053b66889f"],["tags/git/index.html","3a7c0de6e154da548e9f4e4f36a9d0d0"],["tags/index.html","33f0cfae5b390d70a6b45b611ecb6262"],["tags/事件/index.html","5b66675875f43ab86335fb57ed2474a9"],["tags/优化/index.html","99a32ae5252b21eb928c954ad766d801"],["tags/使用/index.html","e8f85420156a38e7e6b64647739204b0"],["tags/命令/index.html","1f291139ec8a25779ffc8b5128b4424f"],["tags/基础知识/index.html","35ef4bf85a8074c62750338ff4e9235b"],["tags/并发编程/index.html","32ea3f07a2fdd012a916f26695786c22"],["tags/快捷键/index.html","eac2824fc57995ce3956bc3f94940fa7"],["tags/模板/index.html","cd54bd18f7bf5f5edb199cb297aa7f9b"],["tags/知识点/index.html","b16435c6eb4e3c44b6a4979569b8808e"],["tags/课程设计/index.html","364bc41aca1e6b7305e06e2eb2118396"],["tags/配置/index.html","9d02727036c85f98b7bf25f320b69d27"],["tags/集合/index.html","9c0dd5d657485484cabcf2c11fc14170"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







