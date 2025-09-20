/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 86400 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eu-west-2.graphassets.com",
      },
    ],
  },
  webpack: (config) => {
    config.ignoreWarnings = [{ module: /jsx-email/ }];
    return config;
  },
};

module.exports = nextConfig;
