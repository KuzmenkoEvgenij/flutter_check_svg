'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6f29ab888ac17be6437496761451ac41",
"index.html": "4764079564e26905d3f31fa8ddaea54c",
"/": "4764079564e26905d3f31fa8ddaea54c",
"main.dart.js": "2bcf993201bd0889b1e5bef388c8cf24",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f4266934268c70ccee7122482ab19e60",
".git/config": "6d4d4a1de99368df11c832ee6c9bea5a",
".git/objects/32/d1fb84be04841cdf070b1ce416e2a7dfbdb90b": "a018bfd46284d3340103dcfe12b9913c",
".git/objects/35/6eebfc01f460add89c501a93a6b4d6b6d6e09b": "5a4a0576edea196e7541c73bb5a3848d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/5a/1ea2fb6406fe354a994d66f8e8e3850e11731b": "83f186aff65f20d30aeedb7def823cd1",
".git/objects/5f/0ba6743dbf60a952f7ab6a3e443f8f98eac411": "47d65f961f38bc15a53870ba13af0843",
".git/objects/05/f16c4470afba8dbce8db8c1f6be03ceac837d4": "ad14bc84464ca66757e001cc59ee5b1e",
".git/objects/9c/a8c14b9932ccc665aaf52f4052ed2b75ee5a34": "af49c4d6c2bc21c5c346a937815f072e",
".git/objects/02/c639f10e504e631e81a139798640838a785094": "c930d0a61336b7784f216311994bdceb",
".git/objects/b2/6bfc59f13e8f3d0fe13065e11a3213a0bd4e5f": "42131558fdc628f99909e95a6a3ba501",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/ce8c1acbafa59a1a9af8647a820f7a7ce830a9": "d11adad3d6005d04d8a999f22e1895cd",
".git/objects/f3/29766faf9cd7dfc863a7b49f6cdc940feb958a": "88694863791939f3626b3a84db64e170",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/c8/02212854df9604fed435f72934d8ba5b7af8fc": "d331bda8f94d6d66e9c4fbb5dd81a659",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/18/1b8bfbba2b2b2fff438e920d5c0c88024a7534": "4a091e889853fefe925fcd103bfa668e",
".git/objects/4b/02957266c89053474578052f2a4fbe21751d68": "df8ddae34d6f9052dec22674b67de89e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/89c260332381b501ea09cf0f1ca8279a69374c": "2331edc14850eae30e8c7126ceb66355",
".git/objects/80/acb7046298fed29b1b5861e45e2c8fc309e155": "4ba1f669e7e8bf901871ceb257411454",
".git/objects/8a/00abd0a1aab5ca0a02c876f16a2e49931c1f12": "d9fa539dc26d1b15829c4c948dae791f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/7e/1d5d2e9b3b87c30f4999f0198ebafc5f59bb51": "e2649b27a31c83238116bcfe9b85e79c",
".git/objects/10/518995cc3b0f95e614078feeb0cd8d452f6dea": "f0ed3c209f1a8dfef9bb8089d28d06e9",
".git/objects/10/c7abb0b60e4ba58f57ee3fa00679fc472202d3": "f069fb5795f617b77deb19e8a9594160",
".git/objects/4c/13be1dbacb3b85841588270376f9d6523c4944": "14fb99de87ee914d33db08b4d9f2b3c2",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/44/cacb5e25a43edac09cbcd0f51e777c995e1e44": "0da29d64a19d4cf86a03865b4d7d271b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/1b9761fd00bf49762d2c5ae231d275bbe017fd": "9f715ce48c552140f9f84d78c56d735e",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/49a7d69fee3a03bd319252498cba6f3c7c45e1": "26a31b0e3210a772d93281bbc78001b2",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/52/2605f79ff06a96a2d87f632ce76228e818856a": "7fc03f3f9b23e0925c8db0ccf63408bd",
".git/objects/52/f0ea1f8bb5f169afac72593eefb6fd75b7b926": "24e02ab0f918be9fc7151ae5fe51e585",
".git/objects/63/165fad2185b44223aa013556e14e065bd6e096": "29e3e331d0b08a53635fccf53a27415d",
".git/objects/0a/7fed6c10b1ee9749f73685a597b4747e28e224": "03597039110321b03403b8e2490b381d",
".git/objects/64/f7d4f436e06620bc21fa43b7e43d49e853698f": "e50004d44f75ef8eab14d1c73ef54ec3",
".git/objects/bf/7181a7e4af6a4461229363df75376f196445d7": "f6defab36b874a53035c41a8ecf8fd55",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a7/77ecd80778041dde94e544641a554e25ac2819": "8f17c2bf9d79f87abd393cd73f52958f",
".git/objects/dc/7069b711d6942b3b3a278e7a843dc3e4e943fa": "2c0e2b43c030ba7743cb952fd3458e46",
".git/objects/b6/800962a6b067594ab7f957fdce19e2529a1ca8": "6deea17f9ccc3256c4b0af0a4fa5d91f",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/da2d51da50a703e7673dfd11a6e6797f22656b": "d8885b652d447d66d2fff495d1a532e1",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/e14ae47423374f39e03b7dd567f3e1b88ddef0": "e0ad87d8a917b49069e70137e5b00f4c",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/0f78a4348cdcd592e245261d4bc5f6564bd799": "73e77aa26cd177660251901d3d7cdf2e",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/ff/dd326cba27b2009dd852767a4073911a875c0c": "db70557c688d05ac9ac21a5be43cbdee",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9ac210b44357e2645d0f4afdb6a9a9a972ece0": "f78f0388d34752a791607fbaa8a8c8d3",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/15/4a505d676561659e91015fcdd2d0a34149d7a9": "cb1c33435582235ad3ca938d00cc8503",
".git/objects/12/1d5a482e023f473bc575668356bfc0915dddfb": "56110d3aca7e88020c02098ba595f2bb",
".git/objects/40/c7fd92adcd9d318d490935d315c6f572b66d36": "182eb0a98d655bde594f5c3bfb0b99aa",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d3c916043c2ff716e15b4fa207366b93",
".git/logs/refs/heads/main": "541134aec3106dedff2d0a1d275164a6",
".git/logs/refs/remotes/origin/main": "1204e323380dac8480acb32454f3f45a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b59225d0f8dddef46a18aaf1c2eb5a24",
".git/refs/remotes/origin/main": "b59225d0f8dddef46a18aaf1c2eb5a24",
".git/index": "101fb5e53bacc091f4433332d3c4829a",
".git/COMMIT_EDITMSG": "d85b335dcfed1b9ecf678a18fac46b52",
"assets/AssetManifest.json": "234e97ec85aca77de43d67c931e1c382",
"assets/NOTICES": "a4ddf07511df136b2a8cac6f9caf1547",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c8a2dc48f8a958217568ff0be227689a",
"assets/fonts/MaterialIcons-Regular.otf": "beef5ba83f87f2880e5befedee876e7a",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
