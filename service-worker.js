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

var precacheConfig = [["archives/2020/01/index.html","42f6a70f7234abf558bdb2dfbbacb46e"],["archives/2020/05/index.html","2c57a944c4298095707f2f95a3b2f4e9"],["archives/2020/12/index.html","369920d766705fa41b61b5e0b20c1451"],["archives/2020/index.html","941a2c866d7d27fe1eb23cb688ea3bd5"],["archives/2021/01/index.html","eea92678ee36f51b13b8835a656880cc"],["archives/2021/03/index.html","76ac65f1a790f56cab2761b5b8cad8bf"],["archives/2021/04/index.html","f4b653c2414b6aba7d5f216131e2d9b8"],["archives/2021/05/index.html","243a8ba90b7a9c83a602205d472220a2"],["archives/2021/06/index.html","dd82312e4f023da213fa0740e59114b3"],["archives/2021/07/index.html","ba6a6a2bc6d3f32505fcd533b1add0a1"],["archives/2021/08/index.html","14c30c3995314b8f1e4c9d04fdf23f38"],["archives/2021/09/index.html","477f9f236d0413f7639a63d7f06e755a"],["archives/2021/index.html","ed83dcca32f6f0d8a7394efdb29ccf4a"],["archives/2021/page/2/index.html","8136f7c2fb0da26d1265746013e416bc"],["archives/2021/page/3/index.html","d8adf7db83508b4e968d53a813e31f36"],["archives/index.html","3be19157d7ccc5632499de60c9f83242"],["archives/page/2/index.html","370047fce816eb4106753915afa6f52a"],["archives/page/3/index.html","58e106d4e5b23abe4aedf7234f115bb7"],["archives/page/4/index.html","315f44bdf26e920320ce8a7613396d89"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/BUG/index.html","e541833ae0f454bd1948f85f7adab99f"],["categories/Hexo/index.html","8be5d4d3a379743930d95da3d49a0d08"],["categories/IDEA/index.html","d8f6891e1b90fb447344cbaef5c35f83"],["categories/Netty/index.html","917c201cadc4e597553ebb2203c3b017"],["categories/Redis/index.html","b23b83e306afe6d89c8cf1680cad74c2"],["categories/Spring/index.html","4b7bf956c8da0bf2330a41d4a4ed410c"],["categories/index.html","dcf2e31e3ed1f0890ac27188ee9c6f03"],["categories/vscode/index.html","e87114d2ef197e6c9da685666448ba4d"],["categories/容器/index.html","e55aed5a462f83df3195431612706485"],["categories/工作/index.html","fa238a07b3ff3a0a6352470f939250e4"],["categories/生活/index.html","3c6ab6fa0821874da19897d8df9ba1f4"],["categories/面试必备/Java基础/index.html","07f94fc98dd23ef741f9256ff55b021b"],["categories/面试必备/MySQL/index.html","73677d57cfe9877fc104c7f08b572f43"],["categories/面试必备/Spring/index.html","5ebed9f058cac177cc9015825381ae2f"],["categories/面试必备/index.html","e0f558c6238a92bd2047331435865a3e"],["categories/面试必备/page/2/index.html","9994a60102087933c8152d434668dd3c"],["categories/面试必备/多线程/index.html","e34d6e2877c4368b144eec0054af5911"],["categories/项目/Android/index.html","f6f4ca75c9da7e75e665026e4a8f1d19"],["categories/项目/index.html","7cccf977026be4ddb19edc0591c42a99"],["css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["css/index.css","44bacf810fed2654641b90a8dff2aa81"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["index.html","efc85fbcb8ff49761898d3405b0ee98e"],["js/main.js","daa594fa296eadb9c43910113c5f8341"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","944185b5e95e93525f261f8f3d5ffb02"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","de7a4f894ce5f1990d142600fcc1295f"],["page/3/index.html","68f5208ddb26a24206a98110efbd7e67"],["page/4/index.html","0b762fd5914c8ba8785a21ac62130739"],["page/5/index.html","9310bea789e03cd52a13e5db790c623e"],["posts/1e489958.html","4916c742db9af03edadf851b8c2b1cc0"],["posts/277c18f1.html","66c99fc5b2611ed5a9ac9693af9b50fa"],["posts/34fea2ea.html","a689ebb23e61932b2b19fde15ddf6049"],["posts/42ed8c3b.html","a2a0e941a959e21f2f263f3d304a4edb"],["posts/4446b2a4.html","19b16268cdd596d6903816ad0727b4d9"],["posts/4a17b156.html","08cb7dce8f6026e905242e09357aac78"],["posts/566321e7.html","34052a3e61296d012932100eb508b126"],["posts/5697f279.html","b7e1b600059cf6150ae7bbf2950a362f"],["posts/5fb5b514.html","e3ff1c07d03ce3efb4d6e222ba7bbda7"],["posts/5fddb0d.html","754c1086ad17e9bf73f36b438e119f69"],["posts/632b531d.html","93d41af2cfe1084140407381da01c4c7"],["posts/64cd635.html","ee9824bfd716fcdb071f6d8526e61b51"],["posts/681a2204.html","57d1b4a3472773c51c40042ddf91fead"],["posts/6e264d21.html","1360beb9efcd749a6895ec73c0a3ea5d"],["posts/77c4a9ef.html","f34c51dd5d08da2f25a6394a58709005"],["posts/7981371.html","21dc12a47a116b5b1ab7e5b71d55cf15"],["posts/90cf43cc.html","dd7c396f4a5b10ca2668c654f4ce6d63"],["posts/9683a4f7.html","077e9be000f1ba062ce611817744e881"],["posts/96dca6de.html","c030db391d56eef660a9a9b73bb08bb2"],["posts/97d452a7.html","e2f761674be8c49591140db4d9160d62"],["posts/9eb6681d.html","ada8d3a1451d418801b964f704c239e7"],["posts/a0808890.html","22dfaf62ed573bbc24ffd3835dbddc9c"],["posts/bae4ff13.html","f1a47949368321f44e650bb5db55da8c"],["posts/c352a0f3.html","af7864f19c18147971733a8a985da79e"],["posts/c8ced817.html","ef0f889b929e0356972f021881546a22"],["posts/ca4da212.html","8780156892757c1d68b815874ecc9985"],["posts/d62ead0.html","c8564e7fede9cd5ee2bc6ab52063075d"],["posts/d98c058a.html","e346ed1940c04511363a9a550ac138a9"],["posts/df083c4d.html","908cb32022f4a1793d73ccccd828ddd7"],["posts/f79db71a.html","99b47295f31f2307d8b0075d485f1aad"],["posts/f7ede91d.html","16cbc4beeae9d49329ad6052564f67e0"],["tags/Docker/index.html","0a14d9e5ffddcf046fce3d3c70622f69"],["tags/JDK/index.html","b3b4a6cc97974516abe084e54c0248b0"],["tags/MySQL/index.html","0030710ec8e06c32692b46515aae6c1f"],["tags/Netty/index.html","29e8990a77864f2ec976b3529a1d3341"],["tags/Spring/index.html","ea2b5e0eb2e0c5743a96c6e661861f6d"],["tags/index.html","b3a7539107a86dc7926522e14f4d3348"],["tags/事件/index.html","61aa6e32ffc59948fad9ad2f396d0004"],["tags/优化/index.html","8bdc4d1bf83c7be6c326be5a44478065"],["tags/命令/index.html","b723b1068bb52c12396b26f01c61f736"],["tags/基础知识/index.html","53394ba61643e64221da957f8bfc3aa6"],["tags/并发编程/index.html","29388106ecec4df632747a024bd77af3"],["tags/快捷键/index.html","84bb6dbd736c0cd2dbf8fe0db8f8f68b"],["tags/总结/index.html","36b7b97486b7ac7ac061939263a400e5"],["tags/模板/index.html","f2dab7bd8e89080055678026169677a9"],["tags/知识点/index.html","9275132014125069a369f5ed57d0ac86"],["tags/课程设计/index.html","0fdc4c86e846677bface6742b4d4a928"],["tags/配置/index.html","844bd26491361c96d35a44f3211c1ea8"],["tags/集合/index.html","b9e4a0f872d7257031bbb9a2f47f5ea4"]];
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







