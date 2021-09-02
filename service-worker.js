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

var precacheConfig = [["archives/2020/01/index.html","dfcbba5e8bcd8263df27ed601f06592a"],["archives/2020/05/index.html","36142d4dda47019b4aad045b481a4129"],["archives/2020/12/index.html","01b68269a456c6064a03ddf1d6896cc1"],["archives/2020/index.html","a93eebe1c014a337e25a5e8984cc1e43"],["archives/2021/01/index.html","6051b24c376eb8b4322d2bfd76f8cb2b"],["archives/2021/03/index.html","bae6103ecb16e228576401673061792b"],["archives/2021/04/index.html","c750ff83e1a4f4794c018e30b7bd35d3"],["archives/2021/05/index.html","8e8c80163005ec8e7acfe663358ee7c4"],["archives/2021/06/index.html","052a206b8982868cc3584b1c8e57b0de"],["archives/2021/07/index.html","bde847d92048f917979988e2b61967f1"],["archives/2021/08/index.html","20e7079c71e9adb556c5eb10dd4b376a"],["archives/2021/index.html","0164e3736f95cdf70c1974fefedf3d52"],["archives/2021/page/2/index.html","3f6144d61f330c1f59dff41475264a25"],["archives/2021/page/3/index.html","29775ad8c3f975629da5fbaca71bab23"],["archives/index.html","da6d9bccf915ea75f69389b6b30ba5d8"],["archives/page/2/index.html","18f504061ae1bc6ca956f6d589807c7e"],["archives/page/3/index.html","5c6b2eb82142ae4905fdf8f330c92a60"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Hexo/index.html","c0dd3740c18cff4c650e9d791cb4269d"],["categories/IDEA/index.html","d4831eddd0e43666ed54e1283f5fec15"],["categories/Netty/index.html","c6cfdceb5d5d27d6f1c923c2fb8190df"],["categories/Redis/index.html","e170262a6381e2f5866c1910e3b51125"],["categories/Spring/index.html","3aca27405dc51b0ad9c780df38a6c6c3"],["categories/index.html","631c6a9e0378099901d532c116071c57"],["categories/vscode/index.html","38210ad09c8c4b076ee14c8aefc2b487"],["categories/容器/index.html","1f5cac774a77670d475cd14ae93b34bd"],["categories/工作/index.html","79657a6237d8ee6557707613c09946ae"],["categories/生活/index.html","7012d81197dcf6bcbb203db0aaed4c70"],["categories/面试必备/Java基础/index.html","6ef212af2d79421305725f3cf07b0a2d"],["categories/面试必备/MySQL/index.html","ab31e09bc9fc20364ad3d345f2f3539c"],["categories/面试必备/Spring/index.html","2415f460e15a877855fa4bab45b0f785"],["categories/面试必备/index.html","a5048a80c173cc4efe0786ad0ef2f4d7"],["categories/面试必备/page/2/index.html","e40a88bbfc0494c1eaf5e9a1a3f49ce3"],["categories/面试必备/多线程/index.html","076307a7e9cbc50a13dbe0ac91a12d1c"],["categories/项目/Android/index.html","61d3b64e3f48b48f3d8092c3d2b74b50"],["categories/项目/index.html","380765bd780775380b2c6930bb118292"],["css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["css/index.css","44bacf810fed2654641b90a8dff2aa81"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["index.html","bb5315de78237d00b89b0931d88b38c8"],["js/main.js","daa594fa296eadb9c43910113c5f8341"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","491b73dfedb02d504cf553e69788609e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","6b396f3cb907d5ff59ca604b8d651868"],["page/3/index.html","0b3193470c0e9a0198f6f08ec1de8a36"],["page/4/index.html","982b535acf4d5aaf241c6e1d7a1152c9"],["page/5/index.html","b994848254294e2d791b0b75ac546c1e"],["posts/1e489958.html","4673684e6852f31221ba758d776043be"],["posts/277c18f1.html","81079f095e860c4122996b56c5f70a4e"],["posts/34fea2ea.html","c11122f165cdfc06057a6a6729343405"],["posts/42ed8c3b.html","09f9bb16a68b1bd4a1361559c48a7a5b"],["posts/4446b2a4.html","ad29c292853f8adbfbcbe63d0907b1e3"],["posts/4a17b156.html","079b9fd32f4217d0ea46e4e15062fb28"],["posts/566321e7.html","9f21e32784a8bf55e93837c059317291"],["posts/5697f279.html","4e31122167bef5ffbc445e8ba829776d"],["posts/5fb5b514.html","673deb133bc1e36605564605f1323e92"],["posts/5fddb0d.html","6fe0155e130c0eb546da10dfb965f117"],["posts/632b531d.html","9f90d520f89ab7f2ea61dbf083442299"],["posts/64cd635.html","c580cf0c4df23a08e9dca69eb87f7e16"],["posts/681a2204.html","d50bffdb1fd666115400ae6e2a15d097"],["posts/6e264d21.html","2e789f8422c81230de38cbac14fca381"],["posts/77c4a9ef.html","fb80b1f2da48ed0d29952c0161c91b65"],["posts/7981371.html","56e8d3b2ea6877f9e183f099ecf0e263"],["posts/90cf43cc.html","c6f07e75ed4dbccd9330575461521d59"],["posts/9683a4f7.html","0e17b59893d150c5fc0c94d474f5feca"],["posts/96dca6de.html","0827729f844e447219e15e1dafbe7a2d"],["posts/97d452a7.html","08aad7e4385d5fe540a30f7b95559d61"],["posts/a0808890.html","48509762886e64ad728c219d6b7ee72f"],["posts/bae4ff13.html","7e8c146ed2b0b9c1b0d2f23e33b8c070"],["posts/c352a0f3.html","d015bd5017de88842f5b22d8900c7c12"],["posts/c8ced817.html","7546021896718a669a30a82f42396a23"],["posts/ca4da212.html","6e7b6f9db064fe5dddf1e228e5ac2169"],["posts/d62ead0.html","4856237bee4eae802d83521dbc884cf6"],["posts/d98c058a.html","e5dd2eb4f60ce37e6edeb4d1d77c71d4"],["posts/df083c4d.html","2f6e2bef1771fb1cee353fe1a18b5ddc"],["posts/f79db71a.html","f9c9cba56070c56da20b1e2ffa124022"],["posts/f7ede91d.html","9c49f12125a549745c64e6824fc8ff42"],["tags/Docker/index.html","6a0ce7726932688765d355b87c687474"],["tags/MySQL/index.html","8d76f5300a24291e05f9e3e0ce6edf9d"],["tags/Netty/index.html","219bb3e2e860935bbe63c80df26b63e0"],["tags/Spring/index.html","52af4332c2a100ce9ae34fe456e85443"],["tags/index.html","0636bc68ba065ff59b6eab20d342abac"],["tags/事件/index.html","d23b2285876697352c9f1c05aeaa47c3"],["tags/优化/index.html","26f8ea3ea74c361481cc058b4e46a01b"],["tags/命令/index.html","262abf97ed3613739d82d4e407d200ed"],["tags/基础知识/index.html","a3830e2c3aec3ec4c150409fc737392b"],["tags/并发编程/index.html","db39cbcef07a29bfcba4f2daf11ed219"],["tags/快捷键/index.html","b2babd6ba11628f07bdbba1e5a65d399"],["tags/总结/index.html","5c5004fe07850038c4f89d8fbe4915ad"],["tags/模板/index.html","c0df3311de717b227e61951dd4277d7c"],["tags/知识点/index.html","feaf896b0ae55d4b6597f214126e92fe"],["tags/课程设计/index.html","0075c5b500976fad1083e6d5cb04080e"],["tags/配置/index.html","53e625f2d78ff39e4eef927844b44a40"],["tags/集合/index.html","12bf1ffdd85a7ec375127765552acc75"]];
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







