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

var precacheConfig = [["archives/2020/01/index.html","bbc53398cf57ebab78d9893b7592534c"],["archives/2020/05/index.html","ef07fbc9dba61e4a7b1e42eb03d64793"],["archives/2020/12/index.html","e4708ea448c684f0a42c76ddfa119b89"],["archives/2020/index.html","26fe0f2d7daac7699af929f085a3148f"],["archives/2021/01/index.html","52d560c0350071b98d593186d79acf12"],["archives/2021/03/index.html","16f006d134e2930dbfe2502c5c1444f1"],["archives/2021/04/index.html","00032d214657c191a62e68afad9a9f99"],["archives/2021/05/index.html","e7c99105195ecf3e94e30083a9a988e6"],["archives/2021/06/index.html","0a5ed8aad07fba00d12cad6ab943a479"],["archives/2021/07/index.html","361cdf7b368bbbd4979cd902b8abadf1"],["archives/2021/08/index.html","d550c084c5de3ccb747a60d29f25a8af"],["archives/2021/09/index.html","8064da06e5817b92bd9d1ddf47d69271"],["archives/2021/10/index.html","33aed0e5b65d34c4e47ee8ec7e9b3867"],["archives/2021/11/index.html","b528b2bb485f41f600d54b63534847bd"],["archives/2021/12/index.html","84c7d0857b756bd4a28a8c9c96028ac1"],["archives/2021/index.html","907d05c7a2b506ab9dfc0d39677a1d09"],["archives/2021/page/2/index.html","0d43bdbeb83081c760dbb293cfc9abd9"],["archives/2021/page/3/index.html","20b6d779bad4d995a3afc78a01add69a"],["archives/index.html","18ebb3b0a2ba7ecfe2050bad5b0ef7e6"],["archives/page/2/index.html","c752cddb165c454a2cd967b2199dcc8d"],["archives/page/3/index.html","625976c0c56973dab020a7b3ee047aed"],["archives/page/4/index.html","801569d03ee0c7ed22c98fc5df9c56ec"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/BUG/index.html","da09e5cb5839b01eabc02d36bc8e82b5"],["categories/Hexo/index.html","f0b6c46365c5dbbdc323983548c2dc34"],["categories/IDEA/index.html","4f6e5e636da3ccf7d3d23b55499a7fd2"],["categories/Java/index.html","fa59856dd52d036362e78cbbcd7a5a35"],["categories/Netty/index.html","46e642dd12bc8c98a7aba33b350d664d"],["categories/RabbitMq/index.html","d2238604b4ce0a508150d9b00d012e75"],["categories/Redis/index.html","222e9abfd1ff7c5efe91a9371787328a"],["categories/Spring-Cloud/index.html","1ec33d80241703ed3f914a6c44d19b69"],["categories/Spring/index.html","9b7b63c0d3a44d10966601ab912d7dd4"],["categories/index.html","51546b8a9fb32d298ca3af908e10c112"],["categories/vscode/index.html","c5d67db604eef2b7bfa993335331574e"],["categories/容器/index.html","004952713710cc2f57d18c0c6e6d5b87"],["categories/工作/index.html","6b3755e5875eb73cebe12eff78476397"],["categories/面试必备/Java基础/index.html","b4d65f140e9c2a2cadc0ed5068679b39"],["categories/面试必备/MySQL/index.html","8f2f516ef155290764b18793ec9a327f"],["categories/面试必备/Spring/index.html","ec51cc901e14d4c1a2a907619e42853c"],["categories/面试必备/index.html","acd2e762b102e356ba74f12843e272c1"],["categories/面试必备/page/2/index.html","5ca4e82fbe020d3030ab2dd9b0448eed"],["categories/面试必备/多线程/index.html","ecbafe7c0d878c6440e82df9eb478de8"],["categories/项目/Android/index.html","2ced841c5270f01c52100bb30fcf561b"],["categories/项目/index.html","ebd0c69c5c3be9f99095fa0a483b7b38"],["css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["css/index.css","44bacf810fed2654641b90a8dff2aa81"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["index.html","f9f625aec8f80cd64ee244875a85971d"],["js/main.js","daa594fa296eadb9c43910113c5f8341"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","f0f83dd8a618185b063867c3c8d67700"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","b7db77d157312beafd6dc24a11fde654"],["page/3/index.html","07f6c3f281eb00c482c81c14eadf6ec9"],["page/4/index.html","3020b9d7882a8624555a45f4e87c455d"],["page/5/index.html","75980a642e9a43e70efbae8376977eed"],["posts/1e489958.html","6e74fa99e620637e665a31e3be4ffe37"],["posts/1f7df53f.html","e995447b2e72a557281f2923efdfe365"],["posts/277c18f1.html","b75224a539b468f88ede09fdf6503c36"],["posts/34fea2ea.html","8b1b069ef64102670720010e020a7ee3"],["posts/373b858b.html","3868a3a432c14f611d2f65fa0fb4a842"],["posts/42ed8c3b.html","c4457feb22a73a7b0cef10d7bafaa163"],["posts/4446b2a4.html","16fa80fdfa96c63ed89013c28c361656"],["posts/4a17b156.html","b03bd9849293c4f3012479c39a7a0800"],["posts/566321e7.html","a78f80b0a12052f667f3aa1c2beaf2dd"],["posts/5697f279.html","a4d320c4c6d3073e378fd31fb3e80139"],["posts/5ce958d3.html","e00ea8e2cf61d7dbf764815e1c74efb1"],["posts/5fb5b514.html","9317d117eb38f3bdc39621d616fe81c0"],["posts/5fddb0d.html","8ce43828a9c238a59f049ba489080f37"],["posts/632b531d.html","9d0b2c1e0b38b02efc28a22ae048ee82"],["posts/64cd635.html","215146bc1c171a65031d3eb660aaafaa"],["posts/681a2204.html","301a57ec1803ae3d95bd2d53eef956d3"],["posts/6e264d21.html","d9e4aca5adf9fcd68635333d66ec8ae1"],["posts/77c4a9ef.html","8a9c37aedb35b5268bc00b38b48a68e7"],["posts/7981371.html","0a08a6b7aa45a094c896389e025854f4"],["posts/8e2dee18.html","c0367b1f8fd7a224cf99da740f1a7cf0"],["posts/90cf43cc.html","7ce9041e58bc547a57c253b898e4148c"],["posts/9683a4f7.html","02717f71232e2cc106dcda95c631fd7e"],["posts/96dca6de.html","c7bf313ae66a01c8dccb39eb36ddcd40"],["posts/9eb6681d.html","7ef3ea06a72d8db7d08a93ce12a92fb1"],["posts/a0808890.html","2ef516e952f8a1a37a55715ee0b0a099"],["posts/bae4ff13.html","b981707ff99f2c7a1d67de65a87d31db"],["posts/c352a0f3.html","99ace2745eab28af0355134c666b44fa"],["posts/c8ced817.html","f89d118e66bcc1c0e33b9fa3b9276542"],["posts/ca4da212.html","2d3cbc860ef9b581c1e8754b4ea75eb7"],["posts/d62ead0.html","751d11a0d2e069c8a756608d7ddd643c"],["posts/d98c058a.html","8a75cc118252857eec6877f12c91ba81"],["posts/df083c4d.html","a28f5a3ba239d9864d5e570ae59188c0"],["posts/f79db71a.html","cfff3eaabbfc5012e01d623feabd53f4"],["posts/f7ede91d.html","7c21e1ec555ddf9c94af06e61d95cdb9"],["tags/Docker/index.html","c301527bd0892ee083c04d357a884dc4"],["tags/Fegin/index.html","e19dee32964037915326bc97c3492883"],["tags/JDK/index.html","130fa7f615d184ebab81af2b17a1c339"],["tags/MySQL/index.html","a143b253a17f2af41502e6386ee86494"],["tags/Netty/index.html","5590c26b4349d4c85c47fe9917b7d27a"],["tags/Spring/index.html","34815048127194cf7ef9477de1c50dc3"],["tags/git/index.html","33347534c2950e653ce52c7a52c70f5f"],["tags/index.html","fbef33ac05e6717d9d31e4a1bb04921d"],["tags/事件/index.html","c434e1f57d3972e650adfefeb7563404"],["tags/优化/index.html","355cfc262b28fe6861feb94f220fa7cb"],["tags/使用/index.html","fb5052f227c68f454c941cb5b86f11da"],["tags/命令/index.html","69deba15f3f34813211afc1567d72dd0"],["tags/基础知识/index.html","8d02aeed86c70c1c528d6df3f5e8f99b"],["tags/并发编程/index.html","1620d8a15eef53685208bd4484f2bdbf"],["tags/快捷键/index.html","e17bd489d17a251e09018c2d10f179a9"],["tags/模板/index.html","1e186dc62d778611266308d35a7748e2"],["tags/注解/index.html","05a3d64ee89f0eb3fdeb8863f98b14fb"],["tags/知识点/index.html","aeb485ecc897aa48944341759dd97a30"],["tags/课程设计/index.html","e0ef570a1d8d2c5281f01b3fb214b5ab"],["tags/配置/index.html","4ff4e14cb91f3d801c24997a646cf449"],["tags/集合/index.html","b9e89666b137808a1bfde1d2c3300df2"]];
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







