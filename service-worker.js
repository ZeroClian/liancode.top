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

var precacheConfig = [["archives/2020/01/index.html","651154604375da2865dd2867195fdc12"],["archives/2020/05/index.html","fc70c73ceff674d5aee8d191053fdc0b"],["archives/2020/12/index.html","7bfc0af1c9e60598cc6c149d6ba27f7b"],["archives/2020/index.html","320dbc6af81b9a1d21a4c111a9f0fa3a"],["archives/2021/01/index.html","40915ce2b850ebfdc0ea8aec39f394d1"],["archives/2021/03/index.html","8eca7d13520d7a24338ed2b3f73f7a1f"],["archives/2021/04/index.html","8a84176ac7f5524f6512bdc28a26fbf7"],["archives/2021/05/index.html","1859b4d4ab0905b41cf418474bf9db41"],["archives/2021/06/index.html","c498873fd641aa994056f2e1d9a41fe9"],["archives/2021/07/index.html","c4e859d8d354070d717901c3a3c22751"],["archives/2021/index.html","b51245f9febd83d1260131e1077ee7c4"],["archives/2021/page/2/index.html","2a522d5da9b7b039a1c43afc61f90ec4"],["archives/index.html","e0b5d52f1203f458c7864be3093d0d7e"],["archives/page/2/index.html","909f1b22276e55a926904dff2cd9604b"],["archives/page/3/index.html","580c6328818de4bbd4b24f59fb7b378d"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Hexo/index.html","41bc9b058c56934540d9c62889c381c0"],["categories/IDEA/index.html","ffd08de525825e9e795265067fb260bb"],["categories/Netty/index.html","d3f49680984b4e43ac6ce390fe22e44c"],["categories/Redis/index.html","9497130b0be09aa2b1c3c304543bddd4"],["categories/Spring/index.html","8f929d5ac108a68b2358f6fed6f2e468"],["categories/index.html","f720205bfedbbed15d71c5936c0e4078"],["categories/vscode/index.html","a5c7fba0cb540d28699490d95a0dfb7f"],["categories/容器/index.html","4e5f7fc151e06b0943f4afcb47694088"],["categories/工作/index.html","28df7df6dc4752240f03334076582c91"],["categories/生活/index.html","a6bb4511d30725d2c7649bc6e7de97f6"],["categories/面试必备/Java基础/index.html","2219223c1e0309fd3e2bda1195773ed0"],["categories/面试必备/MySQL/index.html","9cfab7b4b8d9828226eca333f0a79f08"],["categories/面试必备/Spring/index.html","7988176223b2a8917825e4213a42c7bc"],["categories/面试必备/index.html","60b30f710ec23db97129667e085639e4"],["categories/面试必备/page/2/index.html","7b9d8330093ec613cc85444357f60019"],["categories/面试必备/多线程/index.html","55f2bc12c048ab8b016381e19929177d"],["categories/项目/Android/index.html","76a15a4b1a3ae2a73b7ea4fb9a36ad27"],["categories/项目/index.html","6bb4f861c48c97dc0cdfb93577a24bab"],["css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["css/index.css","44bacf810fed2654641b90a8dff2aa81"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["index.html","1f16cf99415df6bb11fb0e2c187ad789"],["js/main.js","daa594fa296eadb9c43910113c5f8341"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","50907444da07a9dbf33bd7755d95285c"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","a72f1cce52c4f70327dd036a414c01f0"],["page/3/index.html","fdbab5027074d57950f0826b7cf8e74f"],["page/4/index.html","3447c7064b5a5b176b32fa401eeee6ff"],["posts/1e489958.html","7588d10539bbc217e9ac7e7b6053ee8e"],["posts/277c18f1.html","3d6901feed8c9dd7673a056154e373a6"],["posts/34fea2ea.html","4ef9e6dea4033e35c907731b75f443b6"],["posts/4446b2a4.html","8568cfab15922444a709399acf8a1357"],["posts/4a17b156.html","bb79f44d2fcd53d60d88ed13e1889beb"],["posts/566321e7.html","5c2a702f7463040b8371cd1560ad73ec"],["posts/5fb5b514.html","d37baebb646625ea90cac7904853442d"],["posts/5fddb0d.html","7df19322fc0bef8d0e85fbd99f9821f5"],["posts/632b531d.html","2be4f77c53b234b55c4d07bd9bb5bfe5"],["posts/64cd635.html","f71c2f98bef4b3ee1931284947ebb0a7"],["posts/681a2204.html","f443c39a242b7b360f860f4cae791719"],["posts/77c4a9ef.html","fe326ecdbf64000b5b3e10ccf1eb8216"],["posts/7981371.html","53b1707c8ac29d003e85b6fd029d1df2"],["posts/90cf43cc.html","163f766c71d4cb2aab88915a2c764ba9"],["posts/9683a4f7.html","cf2ab69635ae1536d31527f415e3f4e6"],["posts/97d452a7.html","170df5de637102909ce6998c9895ba8d"],["posts/a0808890.html","edfa3711ce691e61bc1da886706eed12"],["posts/bae4ff13.html","a9fca88fbbc2fb244f8dd2236aa434fc"],["posts/c352a0f3.html","ff05b68c68bb9852f07e05847ffcd815"],["posts/c8ced817.html","c165ce74ad7e81f399adf9f5b20def19"],["posts/ca4da212.html","3a4adbdc4ce2f1f1b429e7e23a49eb71"],["posts/d62ead0.html","f50276b1866bd99d2d2f2b9da34549c4"],["posts/d98c058a.html","35e911d6d595e9a193f9aa560ec96e58"],["posts/df083c4d.html","1321e9436c94170eec2ddef8bcb8d387"],["posts/f7ede91d.html","275e2aca008bbecafddeddca6217d7f6"],["tags/Docker/index.html","8ab7b4eddc882587da17285ec438c8c8"],["tags/MySQL/index.html","9add52234ff3963b910d5f718b3374e8"],["tags/Netty/index.html","c89567920408524cfd188e0d2683a49e"],["tags/Spring/index.html","b04c0118804635d635bb9c17166d9ee1"],["tags/index.html","7b8107fb7cbc62d7441ad82a13719ed5"],["tags/事件/index.html","d81669b58a81dd5d1d7aa656e05726c9"],["tags/优化/index.html","0c7fb15e714f4f7e596329bcda8c9cd8"],["tags/命令/index.html","f88c4d000b609697ff9edafd1c6b40ab"],["tags/基础知识/index.html","2d57dfce43ee607fe34289f9ed9b8ea1"],["tags/并发编程/index.html","1a0b5d6e43a4cd30928e53822a7d02cf"],["tags/快捷键/index.html","0a9912493227e6ec8291037dc3da3f8d"],["tags/总结/index.html","792d888dee3bfb023000d583a26af1f5"],["tags/模板/index.html","80f38c397e906af672551ee78b764e6d"],["tags/知识点/index.html","9f31b82251617e36ce4abecb5b5f31e5"],["tags/课程设计/index.html","20e9cf0c6c89946edf44b296dfafaf98"],["tags/配置/index.html","4aeb624b88c2f2b377a1e3b6ed7f3c9c"],["tags/集合/index.html","efa6bc56514246a9c985b9b0cd6a4e85"]];
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







