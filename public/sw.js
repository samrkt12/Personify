if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"5920fdb282cd962904bb48373bd5d019"},{url:"/_next/static/YMTCET0592EXxbEpG94Lj/_buildManifest.js",revision:"ae9eef61ecb4f32528f2e03fce5305d0"},{url:"/_next/static/YMTCET0592EXxbEpG94Lj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/128-61a3c086ec62bf7a.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/653-ff0451edd5c56af4.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/724-8ba1bc5da78e5935.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/815-8796b51de783bd3f.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/864-cd55b7f599333fff.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/870fdd6f-59ce2c2d9c6cb23e.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/app/_not-found-826eef137cbffa96.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/app/add/page-29af2bc85ed4f1d9.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/app/layout-0742e3a836acc716.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/app/list/%5BpersonId%5D/page-9407be163d7644eb.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/app/list/page-4209797b5630776b.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/app/page-cc3a170cfad5eae9.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/c15bf2b0-69d41aa00fd7e843.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/fd9d1056-b49804a1e6f1a9b7.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/main-app-6c5e9a4f8d8aad73.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/main-c7c6ca285f290b42.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/pages/_app-27277a117f49dcf1.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/pages/_error-91a5938854a6f402.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-bcc56473555f172e.js",revision:"YMTCET0592EXxbEpG94Lj"},{url:"/_next/static/css/c208a850736a8612.css",revision:"c208a850736a8612"},{url:"/_next/static/media/370d1cc320ec5619-s.woff2",revision:"a6ff41d10fa89e7f8fec937c243d7428"},{url:"/_next/static/media/591327bf3b62a611-s.woff2",revision:"0ed299a4bb5262e17e2145783b2c18f1"},{url:"/_next/static/media/7777133e901cd5ed-s.p.woff2",revision:"a09f2fccfee35b7247b08a1a266f0328"},{url:"/_next/static/media/839135d04a097cea-s.woff2",revision:"79e6e81d255edac7e8627c7e16baccf5"},{url:"/_next/static/media/87c72f23c47212b9-s.woff2",revision:"790d0c8dbcd491d29d58f1369c199d40"},{url:"/_next/static/media/916d3686010a8de2-s.p.woff2",revision:"9212f6f9860f9fc6c69b02fedf6db8c3"},{url:"/icon-192x192.png",revision:"93dd099e993ab25730cd4ce50aaf3c9e"},{url:"/icon-256x256.png",revision:"18ddf9949660430752990cd59601ed42"},{url:"/icon-384x384.png",revision:"78702d1a6dfc2a2029af911dd1476c04"},{url:"/icon-512x512.png",revision:"e4333d07af27c40efb51f741de87e3b6"},{url:"/manifest.json",revision:"bc9ea5640aa0be056fc44c9dc8f10edf"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
