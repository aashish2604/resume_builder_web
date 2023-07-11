'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f92e3fd5de0b57b26ff6a2fed3c65928",
".git/config": "cc4bc11fc34b49836529411f39db1301",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b30d6eba43ba41165c9ea5c65f0b62db",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "18722bb8b0bfc023bdebfcd829e3b47a",
".git/logs/refs/heads/main": "142c88608376e8ba4f2be0d8a7ef981e",
".git/logs/refs/remotes/origin/main": "b5cf67c447f2c6f64ee990a7df5c0d6e",
".git/objects/00/e6a92f704d8a04fda6234bd180d30685294bae": "1607d4838bc9c150b3ff812257398342",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/ea1db3c6b1e6c251db3db392c9b9b1da38bc23": "38be53730528d7902bada5bfd7d905f7",
".git/objects/0a/9ff22df73e2861c4379cbb2713f233a5719326": "ba278db2b92cb5289541fd740f3efb35",
".git/objects/0b/28823fe3dd49f8a9c7fc92d16c4c2e9518f528": "c804c14dd015945ffb5abeb9ee81eb15",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0f/03f681413a5f40df3d6dafc88fc9de59db2fac": "87bf5c28684370de28177897f493f7d3",
".git/objects/12/da5862bfa65b530e1d2ec0ee95bf5efa969074": "37eb2d4301fa0567c572c853a685af36",
".git/objects/1a/b667811ff2d51d1a74ff625eacf4f5c071846b": "e35256e04da8957e43e60838885ce278",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/25/2e0d4df58f663fbaec2bffb14de4c56ac379d8": "d471e8bfd6a249a234c3a4ab3c33cf01",
".git/objects/27/3deeb8654aaf5b1a331b8b590b3202eaff22f7": "d38e3bfdeb616cedf3f0a457063b97ce",
".git/objects/28/a8e9e011e76f0d0d5494e31c3b46a21fff4bf1": "3597ce6ade73394b83e53f6059dcc95d",
".git/objects/28/bd2404ee6b9d4bef1aca4d08d211af974de3a5": "9edbf59522e3eaf40d7dffe16d07a5bc",
".git/objects/2e/1eead25693a926b1333223472a8d66dea1878f": "63cb99dcad966ce9e921fc6789b38e2a",
".git/objects/30/d285f801a64718c7378d78ffa7f4ecf5d493d0": "14eb72af8c8fc17acab49516209058e7",
".git/objects/35/6a8cab10c9bac2cfd94e6110d45ff6d8f3c051": "6dc5a995253870e578d60c3c4f1e9370",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/ad86bb71010f86156133a30f06a45f2e920c93": "11603074110f59ee124dd9d2e4574c56",
".git/objects/42/82f5ebc37570ef9cac2e16677c2098fe5ace5a": "a523825503dd46e84a7f6f2514ec0473",
".git/objects/44/91bb10224322d787c6841ae7ed1c22b3e9a93d": "fe82fdbc01ee65179fd0bbbb071a1a77",
".git/objects/44/c22fd4b7ee2dbe6b059e3c4597a20833a15232": "ce91a1476008ded20e6783abfafebf34",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/6867e86ea3eb249b6ed6a139e72633861c923f": "8b5cc554a8ad2a18f5c3916c6b2d4cda",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/67/a6324166fa2e58546e0de9ed673edccb2ad1b7": "715a9c9b40d67853343baac389968ae9",
".git/objects/69/c536b89b0d7b79d9dcdf6706d5e1099958e9cd": "33e8a62e0569a130e2316a9f5daa0c75",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6b/a9cd03d78a07cf27451d9fe7ae306acb751604": "7c03bdd01dda0f722714ba4532c7ae8e",
".git/objects/6f/84b0bf43a9c869230f01403ddd95b5727a268e": "a96a589d418c561781baa8e9fd0f66e5",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/76/d463544e48ce0923cd2bb8d46d8ac37ea1cb79": "20ef4bd3e7d3457eb76aea65c9ad0c8a",
".git/objects/78/13eefac54de2aa8661d40fb968dad04e5f83cf": "729d7f9958e8aba946078ca58d8666aa",
".git/objects/7a/dd4eae1494874fba84b5b68e727dcd8ba2f41e": "005b2499b3f62c2ee27f7c82f833f771",
".git/objects/7d/ea6a8a068bde78a57da8b219055386198e8f8e": "b3681df9788d3b9fe98d629da76cdefb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/6db356363323072722d87f10576dfdbe98258c": "e6e3c5c3316747f127e9be42f8d227d3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/52b95600d6859b051051ac4fab6d63a38cec87": "66812f2bf77da84e4e2e1922ec14667d",
".git/objects/a0/ff45b1953094c9818843071b8d9b216255c6e9": "52495f0d5b19871d8011a1400e0e0649",
".git/objects/a7/6bc3c2792eaad87c95dabac273e22f28516e4e": "e097d45ebbc430f2a1e55c05953f06f5",
".git/objects/a9/49077338a169ac190860ba3ac1adc8011dbe9b": "8620e3b4548fc210eb87177c8ebe8de3",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/3fe1b761800a1a4191813c8ab4343078fbe5c8": "ac53cfa6593cc952524c3c63c183d131",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/fc0f2b6c0e76331adc1f59f8ebb60d0459b315": "4468032ded5d891fe1ceda66103b9ba5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/ce/2d3280e6b8c5737965bbaad31e284503e19f04": "78a3267357bba1a33425e42f3cbee95f",
".git/objects/d3/7d23ababed6ce6c5b9f6b15ce673b1512e1764": "3c5bbb6f71ebaa5f7d97a361627dcbe4",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/db8381b9c873de535c79cbaaa830e093dc6a2f": "94cb5c5874f121eb4b412ffafa29df94",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/6ad3ffc6db571e251d19e32e9e3b179c992f83": "40ef1d7fc897dc0e74406eba8f0274a0",
".git/objects/e1/b6221cabe77754c702221583b35408c815fcff": "df02f656f11cb26ddfdd7e66ffc68f7d",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/1adba46b40bf8cbf46eef6d2f2bd6b41719799": "03cd5795d85ec707ac70cbfb58a21343",
".git/objects/f8/ce4573b7bafed9400ae365a2a983a5de2091b4": "89fb82c4e2923a12385bf3c01c007eb8",
".git/objects/fc/75c75103bdab8e512d2d457d039454eb2dd62f": "6271140a7529ca3e0f0597bda7db8080",
".git/objects/ff/b78bd91f30cc426786d4bcb1fe855a1f97d92a": "adb1beab818dc3efbf5419a4205ac5a0",
".git/refs/heads/main": "c47663cca39bee0dfb65e5d3c40e95f7",
".git/refs/remotes/origin/main": "c47663cca39bee0dfb65e5d3c40e95f7",
"assets/AssetManifest.bin": "9dde731abdccdc3adbf6f06ee938f875",
"assets/AssetManifest.json": "8e384442941dd29626178ec6dc5b5f57",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a14f4f8329a33950eac2c8284293320b",
"assets/local_assets/BasicTemplate_img.JPG": "8f395786ae24c12cd45b461b1ed01b2c",
"assets/local_assets/ImageTemplate_img.JPG": "57383b08c01d015a824d8165a8703f0b",
"assets/local_assets/LinkTemplate_img.JPG": "562f0591a90eb2c2fd1d45215136100b",
"assets/NOTICES": "ea7c2f6c00b9b92c3ca12fe4f7d251c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8778568a2551b438525e199320a33271",
"/": "8778568a2551b438525e199320a33271",
"main.dart.js": "cefe53d1eda1af2e235497a10848bfea",
"manifest.json": "3a6324b14a28cfec88b655eb9f58182c",
"version.json": "ab206c43279bfb770377c9c64420a8f2"};
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
