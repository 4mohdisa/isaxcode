/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    experimental: {
      serverActions: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'mir-s3-cdn-cf.behance.net',
          port: '',
          pathname: '/project_modules/1400/**',
        },
      ],
    },
  }
