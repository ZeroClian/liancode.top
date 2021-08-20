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

var precacheConfig = [["archives/2020/01/index.html","d90cfc8d30579e022c5ed6d5aa52d5f3"],["archives/2020/05/index.html","bbc411f82e261911faa89a673afccfcc"],["archives/2020/12/index.html","b75fbcae4a3cc8b5d9db627044816b76"],["archives/2020/index.html","355cbdb6ba04ed7a2492f0bdef3df174"],["archives/2021/01/index.html","ac6d852360f2909c216b604ae3f3c71d"],["archives/2021/03/index.html","9e0c46651a75eb293c339f090538f5b9"],["archives/2021/04/index.html","60b5ea1bd19b3b29cb4afc4241c6be82"],["archives/2021/05/index.html","5b088752327ba2b466fb665e53b3dcb4"],["archives/2021/06/index.html","ba3fc6224aa7aa475936c1c97d389ec4"],["archives/2021/07/index.html","ebb143a4c2c66d0f31f67d8d06bb9931"],["archives/2021/08/index.html","cbb57d7a9617dd77153c1cba389df34d"],["archives/2021/index.html","db488e7eb19fbe068bb1b2444ce2c602"],["archives/2021/page/2/index.html","c5ed5418667276ab0b7151b599ad5cf7"],["archives/2021/page/3/index.html","ad38751b2dbf6e08118b82bdada4fa5a"],["archives/index.html","f60d6a57923546f1325412a3dac4c54f"],["archives/page/2/index.html","c18e5e120de2b573c35ce69ae30a1f58"],["archives/page/3/index.html","2d8d15cca9f02a9443894c920f74513b"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Hexo/index.html","e3a840a9da06d763617f167e59c57a84"],["categories/IDEA/index.html","7b150c77853a1403f2b32427c29cea46"],["categories/Netty/index.html","987482d56444d5e6e45e1834b7a43104"],["categories/Redis/index.html","374be4b9ad71a7f2242b42b3a3a12671"],["categories/Spring/index.html","95ad3fd42474121969d571ae046efd8f"],["categories/index.html","a0366dfe8e339442dd6d79fb4ae16460"],["categories/vscode/index.html","4748b822aee70a9421c30be76248369c"],["categories/容器/index.html","58c6ece7eedd1eeefaa946e551e72dd1"],["categories/工作/index.html","47feadf9598155093c908af0c3bcd712"],["categories/生活/index.html","098e96673194e8128347c04f486ed3d1"],["categories/面试必备/Java基础/index.html","ce27ff3224a20c5bc8434293caccbb8d"],["categories/面试必备/MySQL/index.html","68d28468406e5f59025f1f8938de0e56"],["categories/面试必备/Spring/index.html","d86e47e559b7fac6a1fd039f204d9aaf"],["categories/面试必备/index.html","9f0d0b2b1946f6be2032b5622eef8c00"],["categories/面试必备/page/2/index.html","383c462ea20d734852d9afb5b02ecc9e"],["categories/面试必备/多线程/index.html","4d4fdb73e82d56007fbf7771d0ec1e66"],["categories/项目/Android/index.html","e793beec136309912cd32aee0ebec7cd"],["categories/项目/index.html","9b2e46fe05266924eb5205e884690390"],["css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["css/index.css","44bacf810fed2654641b90a8dff2aa81"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["index.html","e23b9661b05c8b16066eb00a90998bb8"],["js/main.js","daa594fa296eadb9c43910113c5f8341"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","dc2836f2dbbc89aa06866b349b4ccdc6"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","fa33f24c9d35d72a7a5553009638bf2e"],["page/3/index.html","f2c7e951b95e177f39b7b079688f4aca"],["page/4/index.html","11b696a21e189c1078c0af08598d3911"],["posts/1e489958.html","6a7f50ad0e49793395979f488e97e11e"],["posts/277c18f1.html","ed5b8998fc08b65232ab744a910c5f2c"],["posts/34fea2ea.html","0a6c959ed5f4a733d8a7271009783d87"],["posts/4446b2a4.html","1a281c78ced464d05fa555d2fead1a4e"],["posts/4a17b156.html","f5adfe0eedb04f6b5b4fb4ec45fccba1"],["posts/566321e7.html","36e85daf4a71e709379af35ccd88338a"],["posts/5fb5b514.html","6c812d397ee5ce3e983ebc6c9314d519"],["posts/5fddb0d.html","c14abc92d524c773706350d7a99f9d20"],["posts/632b531d.html","363489232661b16f83af36a0593f9d2b"],["posts/64cd635.html","9940299ec28b7dbb46b0fa960d297254"],["posts/681a2204.html","e6f53ec8ca41fdc0d319919bfbdf6eae"],["posts/77c4a9ef.html","7f50326e273416eba79a6844cce7fe91"],["posts/7981371.html","9a252a3a760c8226ea0909946d456a9f"],["posts/90cf43cc.html","5adc18f42b8a73805e30828c71e0a214"],["posts/9683a4f7.html","46edd99e56866dffbbd23659a2616cd9"],["posts/97d452a7.html","1daffbc28185d2f142d056de79b62993"],["posts/a0808890.html","ccfddde05cf0ad9526b34ff4c12e1049"],["posts/bae4ff13.html","215dc371456498b1197a119d81dbae6c"],["posts/c352a0f3.html","4c8a119c93015315db5224c27020fc11"],["posts/c8ced817.html","130a3a166f80ec463af0f72f03ba324a"],["posts/ca4da212.html","42000b375a7b0873b04bec00141932b9"],["posts/d62ead0.html","a3dbce371eb35db9d3987eaac900d3f2"],["posts/d98c058a.html","3bd3955d6d6fd8165935b8a77c985a5c"],["posts/df083c4d.html","d1e3f724319a5f55eeee1a82653f3dfb"],["posts/f79db71a.html","54c36005928c97939636ca816d1ac134"],["posts/f7ede91d.html","0438e0fbc8cc7f642bebb5827f6c1e51"],["tags/Docker/index.html","8b995ea060bd6ddc0ca1a37099fb999e"],["tags/MySQL/index.html","caf6557e865f498e773d6410f7fda816"],["tags/Netty/index.html","55865cac806e2e55a2e910dd0ddd8f31"],["tags/Spring/index.html","04064634a44e1d6a6eb7722138a26c55"],["tags/index.html","1cbb5268e23ec8da6cffafa5bcd51e16"],["tags/事件/index.html","888cfc871b398da2b63a42343c16e4d7"],["tags/优化/index.html","0d46fb94bc1cab5c1112a638c7421404"],["tags/命令/index.html","b953e9c2097841127c31517f77441b8c"],["tags/基础知识/index.html","cddc25bbbdb5bd709c290ad4ba149dcb"],["tags/并发编程/index.html","64e081a98602f27c35248c979de40a8a"],["tags/快捷键/index.html","1553cb32f6fd2001ecf6f0b3a23a4460"],["tags/总结/index.html","dd72e78d38d3d638331417afc059ec46"],["tags/模板/index.html","bafa7ba61259e96ba0d2a0cfc5170cc4"],["tags/知识点/index.html","d04f35d3b89b65b200a1200782d98d09"],["tags/课程设计/index.html","7385870591d2c95d6f4cf1d16c7dd356"],["tags/配置/index.html","a37237c9a4cf9e1d150a503caefc6321"],["tags/集合/index.html","69f2c41a2a7eaedc3ea64449047feaa8"]];
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







