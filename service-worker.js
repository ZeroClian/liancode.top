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

var precacheConfig = [["archives/2020/01/index.html","eacf04c71f7bd027f8fb548272f859f7"],["archives/2020/05/index.html","08d80d2af4db8716c60b0ee7d562fd6e"],["archives/2020/12/index.html","876ba2a2305aa89bfe0f6e220f266c62"],["archives/2020/index.html","2eb7a0da44f53bc833e20118930ce4f3"],["archives/2021/01/index.html","71f367c4b81627c1c8d4c04a0aa94b15"],["archives/2021/03/index.html","ff370d1a01f27ccdd37d2243943e0173"],["archives/2021/04/index.html","48308230be6378a9257d00d32ba22b9e"],["archives/2021/05/index.html","b65a26af319af3a88c3d48fe37740f7f"],["archives/2021/06/index.html","105299575165be004629edfe6cfd9e19"],["archives/2021/07/index.html","346a86dba0b3a9a41a1e6d7e7f29db16"],["archives/2021/08/index.html","8222ec9850a75643aadd0b650093b574"],["archives/2021/09/index.html","e0748f97cc03407f9101f67285b93610"],["archives/2021/index.html","bce19b36c7a65dbe5b08a6b085829214"],["archives/2021/page/2/index.html","e75d67c092ab0491b4c95caee086b602"],["archives/2021/page/3/index.html","ff810160b250d47606ad4a9a8d55c761"],["archives/index.html","4b657975f65a73be6c555ceb7a30479d"],["archives/page/2/index.html","f5934003e0ec574c203308a57ee45332"],["archives/page/3/index.html","5e04f92744fcc44a519c3bb72ccf52d7"],["archives/page/4/index.html","10dcb5d0c0254bcd36e856385fb8270e"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/BUG/index.html","ff8726f34c286db7f64a03193a8ba815"],["categories/Hexo/index.html","0da0595e47a689a1c616516918819a7d"],["categories/IDEA/index.html","1ec1305c559d008b144ba02cdf44756f"],["categories/Netty/index.html","6f1ea214a56d43bc7f27be595bd197ac"],["categories/Redis/index.html","ef2140b90a6d5d100b0c9e9b5e925f51"],["categories/Spring/index.html","617800057d24bc8a6d286a7ddf6e5d89"],["categories/index.html","09a503d54c86893efddf7e00d73cbc4f"],["categories/vscode/index.html","6e87e441c954a1e842fe7916e6c06d67"],["categories/容器/index.html","beb9b7a0afb5d8b30d51090ba286d404"],["categories/工作/index.html","1a0dd28bb11c6eb8e902ca76d891a8ed"],["categories/生活/index.html","ef55d4d88d7caef6401c4c1201bb78b7"],["categories/面试必备/Java基础/index.html","a07ea8f00667befad2b1f342ea58ce1e"],["categories/面试必备/MySQL/index.html","86f8967eb2299c21fa71413d8ef9cbc7"],["categories/面试必备/Spring/index.html","3b9fa9d9d655637072c8249c6d613313"],["categories/面试必备/index.html","ee645691f26c1feef9c52490c753ba1e"],["categories/面试必备/page/2/index.html","a56bf4395ddbe9420aaced6288c2711a"],["categories/面试必备/多线程/index.html","fa7a16967ec13ae9a87956d0d2b7b656"],["categories/项目/Android/index.html","fecce58f8043316a02fd05f3536d3487"],["categories/项目/index.html","53a6b9e34cee0cde63bb9c708518c8b2"],["css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["css/index.css","44bacf810fed2654641b90a8dff2aa81"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["index.html","32e0c63f7ec19c34babb6e70f1cc6cc9"],["js/main.js","daa594fa296eadb9c43910113c5f8341"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","0058002bfa1761ba14e1a3915fd769d0"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","fce2748caef73041a12aafc28a91382a"],["page/3/index.html","19df7c7dfbc276ede5b2249c423a64d0"],["page/4/index.html","2075460ebf0127a3195b2fac80bc2ea4"],["page/5/index.html","2c5631cbe4f38e7c1376e0ff27ed48ad"],["posts/1e489958.html","291ab0aec030de7b2089dfcb4d5da5b0"],["posts/277c18f1.html","b10bcd480da4ae1662c4909425292dca"],["posts/34fea2ea.html","e2c7b70308ae5417e45679aa175de7a3"],["posts/42ed8c3b.html","e7dc568ecf88e35767d720c9120b0606"],["posts/4446b2a4.html","3a4a93724be0c00f55b5cd5f2c427e23"],["posts/4a17b156.html","a3c3c1fa89ba6e9ffed68b161054c1c8"],["posts/566321e7.html","a1d4558a8e7d712a0640cd6bb7c92823"],["posts/5697f279.html","2a72505d66adf740d6cb7db830ed335f"],["posts/5fb5b514.html","062b3f6af9e09c90145f22f4ffdedcd9"],["posts/5fddb0d.html","d700194f21f06c4ec474febddd616564"],["posts/632b531d.html","19fa47b6868bb17d01a64fbee9b2d7e4"],["posts/64cd635.html","3a4a46205bcc2f6d9c0029ad9dd3f037"],["posts/681a2204.html","631811ddedbe871ec4de667157416380"],["posts/6e264d21.html","11357b277b7fb14c88beed2ca485bc66"],["posts/77c4a9ef.html","d56fafa57d589e3b2202f621ed0f5ea3"],["posts/7981371.html","33d203958f0b6d8c13c9d4cd62e360f5"],["posts/90cf43cc.html","758a202fc414d394fe6136a7204ae40e"],["posts/9683a4f7.html","9d2d5327f193f9666b68e31b637c1b2e"],["posts/96dca6de.html","2faf0a471bb3dc6eb60fd6e487927e25"],["posts/97d452a7.html","6ba97d611c9efe4975676005554b18ea"],["posts/9eb6681d.html","645105a937797380fea75e7b331a75f1"],["posts/a0808890.html","5f4df12dd98aa5878ac7efbdf130e441"],["posts/bae4ff13.html","0c74f18d9caf717c913a3474554d2d8d"],["posts/c352a0f3.html","4381daa235fc71671555e6de7ad1d33c"],["posts/c8ced817.html","907fa881f0e7a7d86b0fc2d04b428382"],["posts/ca4da212.html","cbebb94620d09004e38a9fe9f5e86ba7"],["posts/d62ead0.html","46c0dfa258249779ae0f16a071dbf1a0"],["posts/d98c058a.html","2ef9c25fd66fbee89e1156299f4d431c"],["posts/df083c4d.html","3fa73635d1b7b777e388f821504a7d5d"],["posts/f79db71a.html","1dbd2c8ded8dd6eb282a8e5ffb04eb30"],["posts/f7ede91d.html","9fbfc5e3a7cbb3649479ea932f4a318e"],["tags/Docker/index.html","5ab269fcfab3c21ff7d0df18a553885a"],["tags/JDK/index.html","f36625579ea346788e7273dc425d553a"],["tags/MySQL/index.html","ce95436af7df0e9f46cf52a6fc00ef2a"],["tags/Netty/index.html","5313fd5acecc0b2df807fda760722ac9"],["tags/Spring/index.html","aadb3f5d565d48bcd851bae09897850f"],["tags/index.html","56e194bd0d54f016f79fc49398db3d73"],["tags/事件/index.html","50c829d87213a742d10e574fbfc3f2f3"],["tags/优化/index.html","208abe9e22f983fc8db1ca68b2bee574"],["tags/使用/index.html","9dca5b025dd9ac6f2f6349f9c0676c93"],["tags/命令/index.html","1a886a6e69fc4e68b2f8895d00418fd8"],["tags/基础知识/index.html","0c4d079c7e33c09cbd9cbb81697a456d"],["tags/并发编程/index.html","268ac0966e8c7d7286216be69cf324c7"],["tags/快捷键/index.html","60108ab10e7d949969be193f168bd80a"],["tags/总结/index.html","d0aecdacc3190e96f5aa5cabc94b4531"],["tags/模板/index.html","f3e88dafde651eae2f59099909b169f3"],["tags/知识点/index.html","de1709b867cca14b91480f8376549210"],["tags/课程设计/index.html","dee93e02d56e4cffc610553cf1258b5c"],["tags/配置/index.html","c3c27289e530951c7d9fc94f3d167be2"],["tags/集合/index.html","02881b54f83b2ec9945597cd49d7cded"]];
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







