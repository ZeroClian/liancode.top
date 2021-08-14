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

var precacheConfig = [["archives/2020/01/index.html","b829754a3eb8ce5675d73ac3407780a6"],["archives/2020/05/index.html","4df171b58e266b44af0a1316550ad965"],["archives/2020/12/index.html","41e2cdea74f7e35c22bea5288085319c"],["archives/2020/index.html","0480bd8fecf2aa0cae83a07c308ec701"],["archives/2021/01/index.html","d845b5f1ffedf0f395d872d9fdb48283"],["archives/2021/03/index.html","6dd35dc1114458753cce561df1e3cd52"],["archives/2021/04/index.html","1fdb13e34f3be9973aecb917ba5c436b"],["archives/2021/05/index.html","26cd5503a0412ecb102e7b63b73b4fe2"],["archives/2021/06/index.html","ce45ddd7cdf1fbf049b379b402559e35"],["archives/2021/07/index.html","f93472cfe55faeafd4e316a16900504a"],["archives/2021/index.html","9944095085d7c2b38ff97f83fcc9df46"],["archives/2021/page/2/index.html","53190c0ce27ddaa9eda7fdd7f98dcf45"],["archives/index.html","b266a71b0f58822fa11521becc6a7135"],["archives/page/2/index.html","cffe229fb72d90e3ba6842575a58c73b"],["archives/page/3/index.html","e82ddc3606e52c55b9509656177525f3"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Hexo/index.html","1c8e661df789984f02a70f5b45854c24"],["categories/IDEA/index.html","f3435e96f784923f31e7c612405cafba"],["categories/Netty/index.html","fcbc185051d5f87084197976c0aabc4f"],["categories/Redis/index.html","48d48d8ecd22b657eb579c97d1d9ffdb"],["categories/index.html","4a8fb9a04403e8fd15c0b3644fa488ec"],["categories/vscode/index.html","4642f42e7e0782824d6e9b0534800c92"],["categories/容器/index.html","d354b0f4f5dfda5766cf7353014938bd"],["categories/工作/index.html","1da8dafc8a62f5656fe8940ed285c767"],["categories/生活/index.html","421d3f885e13f805473a730b8e9eb986"],["categories/面试必备/Java基础/index.html","7c5b8de664e745fee6f13e711e133937"],["categories/面试必备/MySQL/index.html","0a0b7adc15cec8966d3ed59a472ee0b0"],["categories/面试必备/Spring/index.html","b4f71dc083d710258f0283fb37454fca"],["categories/面试必备/index.html","9aef9927b1e894384b475609367edfdf"],["categories/面试必备/page/2/index.html","c67c654764a8f2650ac849cd48aced47"],["categories/面试必备/多线程/index.html","e70340103bbadfdd3ccaecf0155d1790"],["categories/项目/Android/index.html","8428e765824d6a87b38537362133e865"],["categories/项目/index.html","6e4a1ca693a7a0d8b654efe93651864d"],["css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["css/index.css","44bacf810fed2654641b90a8dff2aa81"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["index.html","769971a3801512b32606863980dc1301"],["js/main.js","daa594fa296eadb9c43910113c5f8341"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","8483b6bc575454d1012e7849af19c8cf"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","fd384bc8f69a2d61179c3dd880545d71"],["page/3/index.html","3a61a0e823c547ec8d05396c9dc7017a"],["page/4/index.html","122350d68a94c61e995a479a9d0b4add"],["posts/1e489958.html","d3f42a8b5b2a7676da493cc3a603b882"],["posts/277c18f1.html","4f670f0aab3db7d57fd59f5cbf17fce1"],["posts/34fea2ea.html","49c07ad5af8e1ba2aeb89c74bf2f7ab9"],["posts/4a17b156.html","62cdb9aa618cb73c16814a4508d55635"],["posts/566321e7.html","596ea0353836e2a56c9e0b3c5ff8b708"],["posts/5fb5b514.html","fa11ad3b48b63ad2701f1e4d093fcd82"],["posts/5fddb0d.html","5040536dbd1493b709321111e45137a5"],["posts/632b531d.html","2078b3889e7a92d73a61c30d85ea8e87"],["posts/64cd635.html","fe854c22ed81a7b17ec1e8d62999fcd7"],["posts/681a2204.html","efc17048d7d2578d61068c8b6b940395"],["posts/77c4a9ef.html","af0f87070b7f058cf76dc6ea1b2b2f1a"],["posts/7981371.html","4ab987503d8bca3a80b290d427972ec8"],["posts/90cf43cc.html","56788a722648d42f5730b894e9287306"],["posts/9683a4f7.html","ee07550bc0d59b4bd16253d9984dd57f"],["posts/97d452a7.html","5200160bdadb2e69440cf72ba1e88660"],["posts/a0808890.html","261a5b3b8806d344aef5f8010b211d17"],["posts/bae4ff13.html","b8306cea99b70cb77858ed5a987b9459"],["posts/c352a0f3.html","8a9f86800fe9717b102016a558c97762"],["posts/c8ced817.html","15dc9909338894c3902651425355d1f9"],["posts/ca4da212.html","36fc6a62ed52a04453f48582dcf92191"],["posts/d62ead0.html","fc3695f8be1973c227fac2abd92b5591"],["posts/d98c058a.html","e05fe6731807a0ee7f123ec3452a7fc9"],["posts/df083c4d.html","09cf077973c13dd8a54f6caa10d5d329"],["posts/f7ede91d.html","130ac8461ef88aadc95be066d8de8323"],["tags/Docker/index.html","eea040b7d38eca5ba24d45150a48e21e"],["tags/MySQL/index.html","f372b6fccc8c92b4e20792afe51af5fc"],["tags/Netty/index.html","8d51eae6fa97f65883dd74a6c4e44e4a"],["tags/Spring/index.html","e66ef597002a8113db94e56b20f1a43d"],["tags/index.html","6a2711382a6cabc4b43cb303152af209"],["tags/优化/index.html","42c9a46615baaa27333b0c9456c35731"],["tags/命令/index.html","d89b94e69e85d3e157cf04ee4e0b9d5b"],["tags/基础知识/index.html","858da072ed043bc1a2869fd2555b0823"],["tags/并发编程/index.html","9d83a11e0b41f791ef4274d4fb9fd918"],["tags/快捷键/index.html","367a993c151c5218be8c40ac570f7e72"],["tags/总结/index.html","6e813c4c071b0e4d84769669b8f43519"],["tags/模板/index.html","09ddec83e17de077ec98fff12e74c223"],["tags/知识点/index.html","d1c247d5585a3b819d524d26fd66c743"],["tags/课程设计/index.html","8f4208a8f858a6de0a39effb9e808b76"],["tags/配置/index.html","dbc3dd6b75409edf7362be1426cafbb5"],["tags/集合/index.html","6563af594b57b50ecd2616ff20873f92"]];
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







