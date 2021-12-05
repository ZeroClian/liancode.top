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

var precacheConfig = [["archives/2020/01/index.html","edbd552cb11b04b6dfb168f3bf64b1db"],["archives/2020/05/index.html","255934feaec836db21681f7579721968"],["archives/2020/12/index.html","bb9df34c76e5a9cc0c527757b733ae5d"],["archives/2020/index.html","95734fa833408a8544632a06565dfb31"],["archives/2021/01/index.html","442c522de7b3a3e8bc9201b4d998dced"],["archives/2021/03/index.html","62f1c47fe707586979e9e7fe32eecfcb"],["archives/2021/04/index.html","5cfda0ea84f95562712f0d1c4991fe16"],["archives/2021/05/index.html","6ce7803192e82792992f796269f6656f"],["archives/2021/06/index.html","208c0fc7d8e880ad96a541df22497f9e"],["archives/2021/07/index.html","6856cc2c3ed5b5c2c9d5909fa05f2bee"],["archives/2021/08/index.html","c8406b2ca345e1e8981b30b9f1da5764"],["archives/2021/09/index.html","255c56efb6e860c6c53f65f3ecab398c"],["archives/2021/10/index.html","ad8675b84871007b39c33807b93b55e1"],["archives/2021/11/index.html","a54754f8d13a5c10adaf65d16baabd46"],["archives/2021/index.html","3d6aef42a7cf6d03c77f6c2b2d851a57"],["archives/2021/page/2/index.html","9d2bccaceafde481bca172ec2533b422"],["archives/2021/page/3/index.html","fccfd655963621f51ad0a8184202a18c"],["archives/index.html","e27d604f97e08e989719979e31257f12"],["archives/page/2/index.html","c1a0e71a85d013e4cd08d3ef654e8cc3"],["archives/page/3/index.html","f70da408a4a25601230f57e367da388b"],["archives/page/4/index.html","fd6cb86c95e7302b5b0fa25bb5508367"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/BUG/index.html","3cd6f08539ea233f16d0eebff023f49f"],["categories/Hexo/index.html","64024aeecc536fadd52bd446554219a4"],["categories/IDEA/index.html","90208bf80e232c56efd8992ba3c496c7"],["categories/Netty/index.html","e2e658bc3967479789327270d5a62550"],["categories/Redis/index.html","c12d806ea6eebe69a502389b1f14eff0"],["categories/Spring/index.html","c0b2ab0c3ba98c0b944321c1ec9575ae"],["categories/index.html","472a662cb656891f355037324a50f04c"],["categories/vscode/index.html","ce55cc20906b0a0901c0e257ef3d8b52"],["categories/容器/index.html","0d35e58ef364de5cbaddc5faa50857df"],["categories/工作/index.html","9c4b626acb574df65b660acc4406b6e3"],["categories/面试必备/Java基础/index.html","b5ab411dba6aefe922f140fd21f87f94"],["categories/面试必备/MySQL/index.html","8cdee02dd043f5bdf52a62fdf51d233f"],["categories/面试必备/Spring/index.html","b922c063196d4863e30e181cea6a832b"],["categories/面试必备/index.html","6b2b079cf63ad337c1631611e7958048"],["categories/面试必备/page/2/index.html","79a9fcfc237d6d12be5cd0c509118084"],["categories/面试必备/多线程/index.html","c57ee30e0038b9c79d8391ad478a17ad"],["categories/项目/Android/index.html","30d9808ad277ff7a9e3663f765b991ff"],["categories/项目/index.html","97c33b2bf544972a411883e7a3266e5b"],["css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["css/index.css","44bacf810fed2654641b90a8dff2aa81"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["index.html","4102d26c3ea2000c7743c9671bde97ad"],["js/main.js","daa594fa296eadb9c43910113c5f8341"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","2b1502d70f7d3b51826275bdeb0f6d0b"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","274b625a4c2f8b452285d604c5af58bb"],["page/3/index.html","9a5f6be41038b89b29341bd90ea2d298"],["page/4/index.html","4718d58e524d256c964ee88a64dbf961"],["page/5/index.html","cc5304748afeab8024df100c9a824d6d"],["posts/0.html","371423fa4a900b694685bc84ae99b476"],["posts/1e489958.html","0dd964d942b824516ece89ec08bd08b4"],["posts/277c18f1.html","49b7439c8ff958ee6c45fb03900c6de5"],["posts/34fea2ea.html","15ac95217a0184a67e201eac0e422852"],["posts/373b858b.html","20ce4987b79d68f6fe2ebbcf6488fa43"],["posts/42ed8c3b.html","0a385b02d5a7d56d7bd2e5fa1e5cf5b3"],["posts/4446b2a4.html","27d1a5e02c3988321d58c8353d1d8910"],["posts/4a17b156.html","55d5b4a09073d8d505a59c7bdcfa1ee2"],["posts/566321e7.html","38dc3eb960b03585ca8873853d3a1021"],["posts/5697f279.html","78c0ffb70777292f4e027abb878f80c7"],["posts/5fb5b514.html","3eabea37f28850bc6695dfcca9149c6d"],["posts/5fddb0d.html","4e373a24cda0a9369405bf4324fe46f2"],["posts/632b531d.html","a438c6034d1fbf06113dbdc5ff1384be"],["posts/64cd635.html","ca0eef6c36111f193e41615b76f72767"],["posts/681a2204.html","97ba0c97f1441e513a8a692a41449d94"],["posts/6e264d21.html","96fad46e9425d3fae9d4ce3a46f05db7"],["posts/77c4a9ef.html","8ddada08a1f99968bef002b8c4f784f6"],["posts/7981371.html","bdc2ef703e6727b3410e41db657727c8"],["posts/90cf43cc.html","d91ba19860d4fbee992e3a01d21f0727"],["posts/9683a4f7.html","98f1eafd2c40bd573b0b06af8137a9c2"],["posts/96dca6de.html","ab4e03be123a6fb3df09d3def066e461"],["posts/9eb6681d.html","2a0fe0ad24d6adcff115619dbd900051"],["posts/a0808890.html","9a22f45889add0cc3fb8162510b081ef"],["posts/bae4ff13.html","77de5eaa00d635bd3bedae251e56ebb6"],["posts/c352a0f3.html","c61634792224fcdfded5bc4efc21fec7"],["posts/c8ced817.html","d6dfe53d02247b48a125de3e25a24c4b"],["posts/ca4da212.html","aa3c61c167b43358a21e167a5381b8f5"],["posts/d62ead0.html","d7703e0d59a2f70df99c8997e9159b8b"],["posts/d98c058a.html","758886025d2cd79a19d9e588fadd08c2"],["posts/df083c4d.html","5d37b46b1d05e51434434f48b20ffd60"],["posts/f79db71a.html","01379e482466e2f5436360bceab73037"],["posts/f7ede91d.html","40167ef68859e7bb366850e6f1800781"],["tags/Docker/index.html","145cfab509a331ef070e7b51efa32571"],["tags/JDK/index.html","cd130c899009a14112c314be6df75433"],["tags/MySQL/index.html","3d32ae190e66cd46a97b35bfcfcb9ffe"],["tags/Netty/index.html","a76356c50e4ac2c6b97b939ed2245fd1"],["tags/Spring/index.html","b328b248a85d58af54010c64b6510595"],["tags/git/index.html","a9081902de1e2dd40380117d1e97a919"],["tags/index.html","69a65ed188db118810ee548c6572c5e2"],["tags/事件/index.html","e180bfc9d1d30c2bc954f763b7d8d781"],["tags/优化/index.html","79c6ba41e5ca304c897d302fae75697c"],["tags/使用/index.html","e5f1786a995f6dae0ac406603090f540"],["tags/命令/index.html","552a90ee1750302d00d523b1f827be0a"],["tags/基础知识/index.html","0a3b522eb22b2209d5cb581bbebb9d20"],["tags/并发编程/index.html","363895d6e843c161f57f069b795d427d"],["tags/快捷键/index.html","324029b54a8c4b0e355669e68894d45d"],["tags/模板/index.html","55cb0ca5cfa45d8ea631af79d94cc766"],["tags/知识点/index.html","872231364b72ed8da9f7560754629d3d"],["tags/课程设计/index.html","7d673bcff406849cee641f44913130f7"],["tags/配置/index.html","4df98032e5a0c3548c06f90a68169244"],["tags/集合/index.html","5ae45992f83d8cd2acef8075cf5d7ce7"]];
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







