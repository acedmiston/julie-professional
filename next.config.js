/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photos.psychologytoday.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
