const staticCache = "site-static-two";
const dynamicCache = "site-dynamic-updated-version";
const assets = [
  "/",
  "index.html",
  "app.js",
  "Form.js",
  "Api.js",
  "Otp.js",
  "style.css",
  "static/js/bundle.js",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
  "manifest.json",
  "%PUBLIC_URL%/logo192.png",
  "%PUBLIC_URL%/favicon.ico",
  "https://mui.com/",
  "favicon.ico",
];

//install sw
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCache).then((cache) => {
      cache.addAll(assets);
    })
  );
  console.log("Service  worker installed");
});
//activate sw
self.addEventListener("activate", (event) => {
  console.log("Service worker activated");

  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCache && key !== dynamicCache)
          .map((key) => caches.delete(key))
      );
    })
  );
});

//fetch sw 
self.addEventListener("fetch", (event) => {

  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(event.request).then((fetchRes) => {
          return caches.open(dynamicCache).then((cache) => {
            cache.put(event.request.url, fetchRes.clone());
            limitCacheSize(dynamicCache, 15);
            return fetchRes;
          });
        })
      );
    })
    .catch(() => {
      if (event.request.url.indexOf(".html") > -1) {
        return caches.match("/index.html");
      }
    })
  );

  console.log("Service worker fetching", event);
});
//