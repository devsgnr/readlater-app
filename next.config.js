/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 86400 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
    ],
  },
  webpack: (config) => {
    config.ignoreWarnings = [{ module: /jsx-email/ }];
    return config;
  },
};

module.exports = nextConfig;
