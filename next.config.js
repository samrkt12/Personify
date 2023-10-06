/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

const withPWA = require("@imbios/next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  exclude: [
    ({ asset, compilation }) => {
      if (
        asset.name.startsWith("server/") ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true;
      }
      if (isDev && !asset.name.startsWith("static/runtime/")) {
        return true;
      }
      return false;
    },
  ],
});

module.exports = withPWA({
  // next.js config
});
