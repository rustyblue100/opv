/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

module.exports = {
  images: {
    domains: [
      "images.rawpixel.com",
      "media.istockphoto.com",
      "fastly.4sqi.net",
      "www.seekpng.com",
      "cdn.sanity.io",
      "png.pngtree.com",
    ],
  },
  i18n,
  async rewrites() {
    return [
      {
        source: "/fr-CA/a-propos",
        destination: "/fr-CA/about",
        locale: false, // Use `locale: false` so that the prefix matches the desired locale correctly
      },
      {
        source: "/en-CA/about",
        destination: "/en-CA/about",
        locale: false,
      },
    ];
  },
};
