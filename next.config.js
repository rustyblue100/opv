/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      "images.rawpixel.com",
      "media.istockphoto.com",
      "fastly.4sqi.net",
    ],
  },
  i18n: {
    locales: ["en-CA", "fr-CA"],
    defaultLocale: "fr-CA",
  },
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
