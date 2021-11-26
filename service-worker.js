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

var precacheConfig = [["archives/2020/01/index.html","043949ee6b811110a3e6859cc23ced34"],["archives/2020/05/index.html","06ec5543cf9c5f4398983b38835b47ce"],["archives/2020/12/index.html","36f94e9ee18cea34aa2cc1b9f2bc116a"],["archives/2020/index.html","7e53abfbc6967bdd66f82bc698498a06"],["archives/2021/01/index.html","7cf880cf18b37671200763007cb15d20"],["archives/2021/03/index.html","d5f530aa6f0e69034a7a6cef6a9bd2b6"],["archives/2021/04/index.html","b694d0619f60d469cbe8458e9de7dd12"],["archives/2021/05/index.html","71da30d692c3c39ca3b74350934734a8"],["archives/2021/06/index.html","53609401d2f033c366ba13c32c588500"],["archives/2021/07/index.html","c0f9cf6ea438f425291f9a79ed09328e"],["archives/2021/08/index.html","cca14fe8c1e1bbdbf6a4da2dc68127e1"],["archives/2021/09/index.html","ebc88a03180b136409d2900282c55347"],["archives/2021/10/index.html","99c58e71318839f572116a4e92ed5aaa"],["archives/2021/index.html","fcdc883ece5ac1d7af1ab9444010ea25"],["archives/2021/page/2/index.html","bccc03d3727cf5f4ef2b29ca6f292cc7"],["archives/2021/page/3/index.html","bee700f5b4438651fcd5fa05191a1b7f"],["archives/index.html","d27aafeb9655bd79073abfb7cd477ea2"],["archives/page/2/index.html","462c23bb4ccb82a05b43e2629458bc2d"],["archives/page/3/index.html","9df5c6014e725e9391834c4bd0624157"],["archives/page/4/index.html","38bd69400c94f4beb7f3d77d164a854f"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/BUG/index.html","672b981aeaf31c56af00b8214178735f"],["categories/Hexo/index.html","467b00a0da643b0d5134d74591dcd8eb"],["categories/IDEA/index.html","4637430f553aedd7dec2685b7fb52ed1"],["categories/Netty/index.html","e73cf487ff1ab9497c00f44f728b08f3"],["categories/Redis/index.html","83cd492431a3d800cbfe7a76f2c9de14"],["categories/Spring/index.html","783437d11a437dd546010abaa9cbad0b"],["categories/index.html","624b1cd4da20c9a0b6824383c7a4e830"],["categories/vscode/index.html","db51d4ce3b15b32601594e823657d109"],["categories/容器/index.html","9161fca24254b4549a0fd5b6a80c3013"],["categories/工作/index.html","ba80766034bf40b6723177e1895b3587"],["categories/生活/index.html","dd5403846f9fd033bb6e96ac19886e76"],["categories/面试必备/Java基础/index.html","29a3ed891f90e891dd23d295ded40c14"],["categories/面试必备/MySQL/index.html","b09d34a318530c5d78f88a5fde614d5e"],["categories/面试必备/Spring/index.html","74689ac786f5883e79a0846da50e65ff"],["categories/面试必备/index.html","9bbfb38c985d76e9588f36edfa0e3e54"],["categories/面试必备/page/2/index.html","dbfe71c5caa38061ec878164bbac992f"],["categories/面试必备/多线程/index.html","0d955938868501acb9fdecac5ff920d8"],["categories/项目/Android/index.html","05c93cb925d07ec6719c8aff56e907d5"],["categories/项目/index.html","127e8c136ddbbdf1d324bd4ebf5a4693"],["css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["css/index.css","44bacf810fed2654641b90a8dff2aa81"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["index.html","5d6b04f3e257e875e255f4c634d11fde"],["js/main.js","daa594fa296eadb9c43910113c5f8341"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","ba2d017b07eedab99f30992614e1b32c"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","40e303a8953edde5b3c14ec975d96fef"],["page/3/index.html","d4cd67b05dad9d088a45168bf65202bd"],["page/4/index.html","df3ce5f9e73640853f2448926344489e"],["page/5/index.html","484d650809dbd81c504b7bbfde346067"],["posts/1e489958.html","8db3a53be036971cea539dbcb9b80360"],["posts/277c18f1.html","5025a951b44bf8225aeec7e8ef4e2183"],["posts/34fea2ea.html","b4389e3c0afd3fbb4faea366071090cc"],["posts/373b858b.html","476bd8df7163bf698a81897a56afc55a"],["posts/42ed8c3b.html","6abf20dbcc9d41cc68d20cef2010c659"],["posts/4446b2a4.html","d11e3435a0d418658dfb1d0517d95853"],["posts/4a17b156.html","e7e61cf885f201759a93618745c2aeb7"],["posts/566321e7.html","986dfcef4059b790670b896d6e3c28f2"],["posts/5697f279.html","5db37981801cbd46b99c75e81d25b77f"],["posts/5fb5b514.html","0bf0b55289ba7acb24ff6164d21cf3cc"],["posts/5fddb0d.html","ae87692e828ed9038b834c350d543d2e"],["posts/632b531d.html","cf50728e1715f3d6e40b92e77cadbf62"],["posts/64cd635.html","ad2a352c629e74b79c7f890725ae2c12"],["posts/681a2204.html","000b1555f0299d9643dd6a4c842ab445"],["posts/6e264d21.html","71e26b6aff9b42cfbc135e9a7b0533de"],["posts/77c4a9ef.html","9f92711ba3e2ffce334a5a80ae26775c"],["posts/7981371.html","bfe103734487b4ce4f4be837db33245e"],["posts/90cf43cc.html","f0fbfae87c3d20b5cf5b87e6d84043b2"],["posts/9683a4f7.html","6b5bd954b3694111da7ed12a508b3c57"],["posts/96dca6de.html","438a34853f19806abc96a67264f4c5b1"],["posts/97d452a7.html","ead74b80d1338dcfe332138b2a199480"],["posts/9eb6681d.html","b61b6560fd379a25a352eddbe493406b"],["posts/a0808890.html","eb50e3c1c4e996e8ebe855f493d09882"],["posts/bae4ff13.html","ccbd5feeb82479e6ad5c54d607b84ff6"],["posts/c352a0f3.html","faf62945ec06df53ee8091222346a722"],["posts/c8ced817.html","8482908b767a5f2c8703f7ef0fd4a238"],["posts/ca4da212.html","cd0809b9cc7b8c42ce393fec3fe1b65b"],["posts/d62ead0.html","338f1a5b2fa39d919fde8a6db29ad60a"],["posts/d98c058a.html","ae52a847de3c96c8ff8e7a9c470cba77"],["posts/df083c4d.html","0830399abdb07b49a4ff2a96cec9eec0"],["posts/f79db71a.html","a78ca79b1c8666f5afc8e4bf3b037ead"],["posts/f7ede91d.html","350e83187ddc90ee57746c2ee7188927"],["tags/Docker/index.html","9d7c2e06baeb268db89314822382077a"],["tags/JDK/index.html","d5e263d960cc070ef2980f23ec666e3f"],["tags/MySQL/index.html","2b552226cbc70aa5f4b527587f75635e"],["tags/Netty/index.html","efb10ea59203fdfbe8fe8dd54477ca6b"],["tags/Spring/index.html","97f27d380249dc4c253549189397ded7"],["tags/git/index.html","6d6e7af0030995afa65fde6ee062c83c"],["tags/index.html","41fd519aa056442d7c3bb6587fca795a"],["tags/事件/index.html","0ec8170fdb83018834bcd557e1efd060"],["tags/优化/index.html","f00b541c7e22432ed198e80a5618e943"],["tags/使用/index.html","f2b31fdd4895543d3550e58a42273b63"],["tags/命令/index.html","86b352e4d57c2bbe908ba17cac76b0b6"],["tags/基础知识/index.html","97a39f7c0cd65bc698cc2b3e472f2d21"],["tags/并发编程/index.html","4e5fe2310340d3400c8bc0c18b93e317"],["tags/快捷键/index.html","de60a6ab7c19a093cd1388b69a5a8ba6"],["tags/总结/index.html","89aad0bc2f0b1b16a8316e02ad5b10bd"],["tags/模板/index.html","df7cbffa1c17e36a3351ab42df6ed597"],["tags/知识点/index.html","33dbb6bcdc4c5290148d1ebc4bc122fc"],["tags/课程设计/index.html","89e3e22c6893ae91d5effaf958347d95"],["tags/配置/index.html","c23e1f566bd394dd1a71daf5f35d35a2"],["tags/集合/index.html","6cdc7621d227b015375e3c08a20c2d8e"]];
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







