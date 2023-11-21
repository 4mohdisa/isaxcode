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
          hostname: 'mir-s3-cdn-cf.behance.net'
        },
        {
          protocol: 'https',
          hostname: 'miro.medium.com'
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com'
        },
      ],
    },
  }
