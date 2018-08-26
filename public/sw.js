/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app.3e0a38efad0e3b6d2b36.js",
    "revision": "037884d9065d1092b76f366498e5c60e"
  },
  {
    "url": "css/app.3e0a38efad0e3b6d2b36.css",
    "revision": "b1a7fcb80199cd806c722e02077d060f"
  },
  {
    "url": "fonts/geosanslight.woff",
    "revision": "03025f1ca4b9a48cdc5d5260244c76d3"
  },
  {
    "url": "fonts/geosanslight.woff2",
    "revision": "d90383514a4a5bd3556ad527ee6092b7"
  },
  {
    "url": "fonts/rounded_elegance.woff",
    "revision": "1d5230da9ce1c60352068340a5fd4a9b"
  },
  {
    "url": "fonts/rounded_elegance.woff2",
    "revision": "05c1672c90045863e6ea0d4a134560b1"
  },
  {
    "url": "images/calcgoogleplus.png",
    "revision": "e8cb07e44fd45cc1d690015632956ce0"
  },
  {
    "url": "images/calctwitter.png",
    "revision": "8ae967c9aab6e2c9854e0f490d05188c"
  },
  {
    "url": "images/favicons/android-chrome-192x192.png",
    "revision": "0d3cf22b0f6e9ebf50b47f82ee3d068d"
  },
  {
    "url": "images/favicons/android-chrome-512x512.png",
    "revision": "c59aec5e034ea0eac556a6d98e99c7f9"
  },
  {
    "url": "images/favicons/apple-touch-icon-120x120.png",
    "revision": "85c93618b07c81d67b6436c5b92843d4"
  },
  {
    "url": "images/favicons/apple-touch-icon-152x152.png",
    "revision": "bee7f9b3020c8e1b6c9be0783e51ba6d"
  },
  {
    "url": "images/favicons/apple-touch-icon-180x180.png",
    "revision": "a23f6ea15efc50c232de274d7e1e1137"
  },
  {
    "url": "images/favicons/apple-touch-icon-60x60.png",
    "revision": "70782d4f5b86231efe1961c76082e88f"
  },
  {
    "url": "images/favicons/apple-touch-icon-76x76.png",
    "revision": "36bab0918b72610fe232e48659700d2b"
  },
  {
    "url": "images/favicons/apple-touch-icon.png",
    "revision": "a23f6ea15efc50c232de274d7e1e1137"
  },
  {
    "url": "images/favicons/favicon-16x16.png",
    "revision": "8dede73e0b8d12d20a9f56c6c6cafaef"
  },
  {
    "url": "images/favicons/favicon-32x32.png",
    "revision": "f1e3f1c3e6010559d46bc18ad6923ac2"
  },
  {
    "url": "images/favicons/mstile-144x144.png",
    "revision": "d8fee62fbfc6f25042c76fcad17a2f67"
  },
  {
    "url": "images/favicons/mstile-150x150.png",
    "revision": "279dee2dead9329f0ec9fb4bad331a80"
  },
  {
    "url": "images/favicons/safari-pinned-tab.svg",
    "revision": "1367476a5723a9ad56297c288bc6b1fb"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "e374ca8977d27eeefc547ca3a4808dda"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "84e52c9e933af4c3a744f809a137e5e2"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "efa68c78d814eeac3ef19bae2260e73a"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "866b474cc2c349cac9162c7722e5bcb1"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "bc187a844d8b7007f84973db047a3a53"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "1f441bca0677a6997f39370e8454c0fd"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "df783b4a9ec0da3ef1df0d9b3a2a44a3"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "87e78fa00b378a6f472d7f9ce280c30c"
  },
  {
    "url": "images/speaker.svg",
    "revision": "e22d55cd4edb9fda5acbb140507b4ab1"
  },
  {
    "url": "index.html",
    "revision": "f2a6d70f3197fd4f9ebaa6885cb0f84d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
