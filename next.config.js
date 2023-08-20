/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //output: "export",
  //distDir: "dist",
  //trailingSlash: true,
  //assetPrefix: ".", // for gh-pages
  //webpack: (config, { isServer }) => {
  //  if (!isServer) {
  //    config.resolve.fallback.fs = false;
  //  }
  //  return config;
  //},
  env: {
    //BASE_URL: "https://example.com",
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
  },
};

module.exports = nextConfig;
