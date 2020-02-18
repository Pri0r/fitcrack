"use strict";var precacheConfig=[["index.html","2f2dff7ecb00d6a3c79b6612d79189a8"],["service-worker.js","6e033aa7c97d4d39910d3b57f7c4458d"],["static/configuration.js","9cec3b516ef4631f7d3af53e7bfb34fa"],["static/css/app.b7b8b076c880fd046c9c97b9b5bb0d8e.css","d09cabfd238f5382ef5c53dfe985b61b"],["static/js/0.cc2eb69fde5289987c74.js","7e670ef2e68adbc4d822830368ee458f"],["static/js/1.99d3836150719ea7bce6.js","3e193adf0307242590f9cf910ca93a68"],["static/js/10.02e2f7bf989c9d4698f8.js","eeee1b92442a0a5a8c65ec58b60df384"],["static/js/11.35c7d49647991cc78fc2.js","f2683c64fb29d495393fc3c0f3ee9dcb"],["static/js/12.9674f663e130faffaad6.js","f809eef7b64d56e61919950ef0d1aefb"],["static/js/13.507616732a61faeec8a5.js","c301eb4f7d57540d71fa7dde77a669ef"],["static/js/14.d5c79a15a89ace8a9c74.js","e35822adfbbefe7fdb82ffe3a31bc186"],["static/js/15.e283e39a69baf86cb4f4.js","6c762d977fed85af4d52d69a3778979e"],["static/js/16.61c70813233fd88fb254.js","b2c6d5ee879fbb292f5e8adee05fe0df"],["static/js/17.e351cfb30761d7383117.js","2fa6b7cfd3661aef7b4d887561e0d0e3"],["static/js/18.d75c63456030e1266839.js","33d8ca01b74b4226a6e5bcdae7252e4e"],["static/js/19.bf556b034ac2a7ca6e56.js","18a0aa82de76e939570a49ae37a64d5d"],["static/js/2.496797288dad9ef027ee.js","8e16c93a2fea6da23f336b8da5fc6b20"],["static/js/20.7aaa60efa1d7c9c0210e.js","095c8076d24f1d686055df9879e98c62"],["static/js/21.36191669de08d9d1c04a.js","4a664bc37e00f8f64ff3ebb8ca6c1584"],["static/js/22.14b5d4a86b512bcbc5c0.js","5107e258c11ae2dd686b7d4fded9de4b"],["static/js/23.f057b99fa5b7333abbf4.js","187e492438c8c665229b9b558225b8af"],["static/js/24.4fb9cc002125993c0dc5.js","ad9f5396e619fb38fcaa3523dbf571e7"],["static/js/25.9396beb76c3ac1b05812.js","177d8c8241dc12e61f875abefd8d5162"],["static/js/26.5382399d6e215cb9fcc3.js","cc1eb5c22419cbea9325fb7430b39907"],["static/js/3.a1249a65070ac0f73c25.js","5523e26ac9bbc67965f88a753410db26"],["static/js/4.ee5c96dbce9d99932958.js","5747a4d1c17f5d4f7e121d7477d5f6c6"],["static/js/5.f937460fc21bc35e37e0.js","158c22ee3042887d4b8f5d9e9e97067a"],["static/js/6.d67f6d0bbae21c8b9b69.js","a3502628c9f5d2570c15c50050175aa5"],["static/js/7.7adbc399ad84b02da821.js","1009600b5f4b68551e6a6400b091ba3c"],["static/js/8.cc1d5f68cbef6f81ed7d.js","f718b08c5cf8fd24d415315e715f8cd3"],["static/js/9.27c97706898cfb050412.js","4233c67773bba63d62decec849432bd0"],["static/js/app.77cfd22263e3cf065672.js","d6b6781efe020818f74e0616ed1df83f"],["static/js/manifest.39e6ec25a8009f4a6b6b.js","ea8beed64ffec3ce1c97fe6991cc9dfe"],["static/js/vendor.1085c30912f160301d15.js","5a001eafebf6549153778df9c4c76dd1"]],cacheName="sw-precache-v3-Fitcrack-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=c),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(c){return new Response(c,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,c,a,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return c.every(function(c){return!c.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],a=e[1],t=new URL(c,self.location),s=createCacheKey(t,hashParamName,a,!1);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var t=new Request(a,{credentials:"same-origin"});return fetch(t).then(function(c){if(!c.ok)throw new Error("Request for "+a+" returned a response with status "+c.status);return cleanResponse(c).then(function(c){return e.put(a,c)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!c.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var c,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(c=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),c=urlsToCacheKeys.has(a));0,c&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(c){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,c),fetch(e.request)}))}});