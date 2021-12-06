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

var precacheConfig = [["archives/2020/01/index.html","68ecae73c4a4c0d72c0185593acf2cff"],["archives/2020/05/index.html","bfd548e32b5d6f1f3415d1acd3e66cdf"],["archives/2020/12/index.html","1e287bb690d4f0b1e7e4993fafe960b4"],["archives/2020/index.html","f5d36491586b6d7100088813bf4ab7e0"],["archives/2021/01/index.html","4905fa75f21472b5c13c7963a0c3cfc6"],["archives/2021/03/index.html","25bdeccc05e22e9b369f88268bc7c829"],["archives/2021/04/index.html","200a45f65d8044ae9a72abfefd7ecc31"],["archives/2021/05/index.html","86ba75eb2063b2f48f8685a05bb9de05"],["archives/2021/06/index.html","8c1574d3185d63564eaae953e4d98332"],["archives/2021/07/index.html","b87d77db472c403266266c5160f700db"],["archives/2021/08/index.html","e5948466601df20d05c525d43d5924ec"],["archives/2021/09/index.html","f8595a1d9159abfe27f84ffcbb37d0bc"],["archives/2021/10/index.html","6079b377855b1bb4231f75b4d6c2af1c"],["archives/2021/11/index.html","103a3989eba4ce33765b7e40fbcc5fc7"],["archives/2021/index.html","a840acca6f236923fb389698d5d69e15"],["archives/2021/page/2/index.html","12a9a4276350dc4dea10a0174ac568a3"],["archives/2021/page/3/index.html","6db2726b921ced06cb1fb13cdf7ab381"],["archives/index.html","e88bbb56f6ec82c3df7bdc226d4949e4"],["archives/page/2/index.html","bb8e0f1e40ba9003699f0e124791df4d"],["archives/page/3/index.html","7378ffb69ce83cdbca72c6993c2ae499"],["archives/page/4/index.html","b61010cf0d2d046fffa60f124ca1939a"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/BUG/index.html","72b5bf5e801005a5061064538ade1657"],["categories/Hexo/index.html","5678a9cd4804a33d82278e8288d7ecca"],["categories/IDEA/index.html","00be12281563e92f6ffdc5fb86dee7b3"],["categories/Netty/index.html","ebf922e523d5f053b69bddd24133d633"],["categories/RabbitMq/index.html","c2a1d726864abdad56337642912c2452"],["categories/Redis/index.html","6710bdf23c52a42fc8680c0c0aa2db44"],["categories/Spring-Cloud/index.html","3cc9fe3ba28cb7eedce95d1dd48ffa4a"],["categories/Spring/index.html","3b9f585dc55de89b3208c4c0cbd5438c"],["categories/index.html","163fcfcad8bb2effb85c6cbdedc49f6a"],["categories/vscode/index.html","5442b513304c0a0f1755c917730af101"],["categories/容器/index.html","da51de2afa4267b497c17a59b5af1bf0"],["categories/工作/index.html","a4383310dd074db46f1cf5e26d396859"],["categories/面试必备/Java基础/index.html","b47c78f8a25b3134371b10b4c898ead4"],["categories/面试必备/MySQL/index.html","c33252c5f82c68474edd81782b032e91"],["categories/面试必备/Spring/index.html","df5806e45174d7358fca6cdbce6335aa"],["categories/面试必备/index.html","bbc3975e7a9ccfdabbac7da1dcd1c5ab"],["categories/面试必备/page/2/index.html","8ff1fc636151e7df603e58939bff0aaf"],["categories/面试必备/多线程/index.html","17776859a4ba5c22dc51e04f3dcdf337"],["categories/项目/Android/index.html","3c814ea635e36844dc5417756efc1aa7"],["categories/项目/index.html","be6a177a9d47cc04ba2bcafcd80696c4"],["css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["css/index.css","44bacf810fed2654641b90a8dff2aa81"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["index.html","8f3a92d985fa49a95865eb7cebe73e01"],["js/main.js","daa594fa296eadb9c43910113c5f8341"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","6fbae6a480f75d7152c1f8ac28b9472c"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","0bae979c63995105f374a0b856d87a22"],["page/3/index.html","861643bf806fcc0e164c3516dd87ea80"],["page/4/index.html","9a64f1c95856cf5b387cb83b72caa612"],["page/5/index.html","977341a77dd4d12bcb490248c5c40a65"],["posts/1e489958.html","35d211fbb4157a77f50d40a8eb7b3008"],["posts/277c18f1.html","1289ac970a070d8a97aab96fd223a277"],["posts/34fea2ea.html","db960274e3be712b9449801136103726"],["posts/373b858b.html","50e0bf55d1d4c1fe1fdf54645490fec5"],["posts/42ed8c3b.html","393bccb61d968b63921678f2bc350d06"],["posts/4446b2a4.html","e5a78e51164699e64fa1adc3dad936a0"],["posts/4a17b156.html","ff310b92295ae0e451a87e9ab9206674"],["posts/566321e7.html","ea07a21ffc3cda85585bfcf0264c98ad"],["posts/5697f279.html","2f36a64f67d88b8ac639152d184efa7c"],["posts/5ce958d3.html","f6adeb5d473fa006934ce495949e5045"],["posts/5fb5b514.html","a6099eb71ef0218b9b92cc36ce7f19fd"],["posts/5fddb0d.html","6b2c40d470044b92b62e5431c203c42b"],["posts/632b531d.html","84d056a9bf489cd9fe220e0d0a802f65"],["posts/64cd635.html","75fa904ae16d8a579fde4d13da71e693"],["posts/681a2204.html","080bca3f5243e470285367f5c987182f"],["posts/6e264d21.html","91286691bea8a26aa5eff6baa7b4630c"],["posts/77c4a9ef.html","b216ed343c02917968130c1203837f6a"],["posts/7981371.html","1d8b28a49d277de076beeaff5fce6af2"],["posts/8e2dee18.html","fd11509de8e56c24c4c5be672b5f7301"],["posts/90cf43cc.html","d38dab6afd4be2092f287630b359c3ce"],["posts/9683a4f7.html","b116fdc1f5df46f909a8477fefff96a2"],["posts/96dca6de.html","5c586c25610476dfc49cd219c341ae4a"],["posts/9eb6681d.html","5b9e26d1ba373f5cd268d4b866c290aa"],["posts/a0808890.html","3cafa3f9953c46febd21471a7bd529fc"],["posts/bae4ff13.html","7c2630ee103707543cf87a4a608bf6cc"],["posts/c352a0f3.html","cc45412adda848e1d8e306f10690193d"],["posts/c8ced817.html","7cb1752665d16a616cfccd32bde684e7"],["posts/ca4da212.html","745901f74481a463564684a734ac7d17"],["posts/d62ead0.html","c4b761284d532f58498be6038e708062"],["posts/d98c058a.html","021c19f58caa45b42ab47a7e0baf3240"],["posts/df083c4d.html","57413279493ccac8a21c0913f31484e0"],["posts/f79db71a.html","673d054c6df97ba0cb929a41a0bef1ff"],["posts/f7ede91d.html","c5edc7e5e7a42d2c837d792fc54cfca8"],["tags/Docker/index.html","09e0fd3f727042ca18fa84e2462c3f7c"],["tags/Fegin/index.html","c8b80b58f15299c4b7e8e4db685cf4e9"],["tags/JDK/index.html","5185c52c855b4e356fc3c980fd3aa7dc"],["tags/MySQL/index.html","7ead4398c79d56eb706bd5fbaa93f7b0"],["tags/Netty/index.html","aa1a84593b804d1c797b9daee309a07e"],["tags/Spring/index.html","8c4e569c0d55f45fac279fc13d657637"],["tags/git/index.html","ebf796560f7d4b98184006875611b3c5"],["tags/index.html","78419842788485ee32c77f2621265ee9"],["tags/事件/index.html","b8e6466ce45a7a3b9fe7511bb092ed64"],["tags/优化/index.html","f4dbd2e59bcdf7f461d59180d2b8623c"],["tags/使用/index.html","b4dcaef2630a91b065a8eff103d05b60"],["tags/命令/index.html","b7cf0c34bdc4cdefefdbdc4b50f329d9"],["tags/基础知识/index.html","556cdccb2ee413803cac5b3da94aa6fa"],["tags/并发编程/index.html","aba6104e9ac1f78d3db1ce784ff6a53e"],["tags/快捷键/index.html","4adb530619a4a1481a39b565e3a82dbb"],["tags/模板/index.html","c2160d2e67b57eec7f34cf4104734180"],["tags/知识点/index.html","72cfb37da45993af0ab00aaa50f8a24a"],["tags/课程设计/index.html","759dc50cf1fb877ea3956cbea6772f64"],["tags/配置/index.html","ea1c9c6ace196d6c13f8e32021e6b3d1"],["tags/集合/index.html","3bff9081be390133c5034cec4639597b"]];
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







