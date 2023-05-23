/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['avatars.githubusercontent.com', '192.168.15.101'],
    remotePatterns: [
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'localhost' },
      { hostname: '192.168.15.101' },
    ],
  },
}

module.exports = nextConfig
