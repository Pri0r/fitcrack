"use strict";var precacheConfig=[["index.html","ef7faae0072f03c331b82af7aa9b7672"],["service-worker.js","81437cade2a6e11b761347aa52847664"],["static/configuration.js","576483399c1d91ff476c0a09f1275313"],["static/css/app.653efa95f7f4a078c26ed7e407e26172.css","aa25af0fbbb571e734e8484f15a895f0"],["static/js/0.15d962d19154e4c8d851.js","56310d0ae89626c7dc5c2ed1733ec3d3"],["static/js/1.7f3fd900bd0a2294ade8.js","e7333bf26e98341d5c9bd383ca400426"],["static/js/10.d7fe999c4fad214fc7c1.js","754f20356baa718e2885efaa97894b3b"],["static/js/11.4db191ac9f0f48ee2f12.js","f6e4ead974a3ef94dbbf0c732da8daa6"],["static/js/12.72e58751572098840d48.js","54ca8bdc4c580562cd1c51d2a062f789"],["static/js/13.2fb6f7ae9e0b98c1b4fb.js","b7d61a8b12ede47dbddaeb4d263b960b"],["static/js/14.875372f7efce20db5e28.js","353908dcd1f1cb49242ff7162c578e66"],["static/js/15.75c7afd899ed22db0746.js","95e4706eb47c503157eab548fd365da7"],["static/js/16.5705ea0747c6ff91d428.js","16eb5910490a06afad3e3f02a4419441"],["static/js/17.02c019d5ffddff2ffada.js","97b61d895eb9e989bee5a5396c47ef64"],["static/js/18.e71732a16f096125e16a.js","3fa5155267fbe46c01634be75d0608cc"],["static/js/19.eba385dcea54e2912f8e.js","8b913ba96844e03113083c867ef38176"],["static/js/2.2de8726b5c4111168f04.js","d39c449b9619a50bd78021e5c14f3ec7"],["static/js/20.79addd0739fd431c1b57.js","6d6776b6e6c2d0936576a6d79f644efb"],["static/js/21.a9fe4bf5d519fabd1f2f.js","c9cf400130d78f5653a407138c8dfb35"],["static/js/22.a80980acb8143d97e84b.js","9b84456a86ebf6e2bf35765708b737a4"],["static/js/23.69190c3c92abdb60cfe1.js","326f5debd4a4571785617d0df216593f"],["static/js/24.96bffe956fb11299dad1.js","be85c5cee66ce4add5cd88771f8a72cf"],["static/js/25.d712efac177064943a25.js","f572fa915eebee4ba0c0e3d10ef9ec8d"],["static/js/26.ea0ae821817a4d90e4a1.js","9b4fa5e886352d3f278c735ea757c0fb"],["static/js/27.737253897dddbb290e9b.js","26a0c4be4178f58e090af503cf410ff9"],["static/js/28.cb785acccce052194ecf.js","2ffad305c941775911c94a5afe4a4156"],["static/js/29.cfb763d07099c041eec4.js","00d76e294314f03b183a10219196300f"],["static/js/3.1a8f58ed62ba63964abf.js","03196f638d2a9bc0baaca8b58e88fc0a"],["static/js/30.775299f007d8d6f9beeb.js","596c5df4a9db0c0140bc7ed3092aa054"],["static/js/31.90d002c820f2cc7be482.js","d0143850361744d591a5072ea325ea36"],["static/js/4.a4e66152736baf34e7b1.js","b733267e5912aec505dc546ec995cc44"],["static/js/5.3f1abb50a33c189c14ff.js","255fcdfb3b8b7eb31557b7348663ebd4"],["static/js/6.379d6955078bff59e81e.js","90fbd4dd78180b282e86ddf3f0a54153"],["static/js/7.1389cf66d013584b8b23.js","f7016ccf35e421ff33a1ed9d6cbf1305"],["static/js/8.7bd5358bef90b7d29225.js","cde63dfa7749d7e1941a0df51a03b341"],["static/js/9.f8ca53ed00aa0c43ced8.js","745f4ea03ac07f899800fce62a2222c8"],["static/js/app.a3e603c4304f147ad488.js","80c4593646306be8e1480ca0398787e1"],["static/js/manifest.7e69cc3c240aeaf0c97c.js","2c112174b6ac8e36048a52cfaaeedead"],["static/js/vendor.225581580a18c85684aa.js","9f484b73127083b6899ec4c968da8b95"]],cacheName="sw-precache-v3-Fitcrack-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,!1);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});