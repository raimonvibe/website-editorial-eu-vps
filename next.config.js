/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    // Disable RSC payload files for static export
    clientRouterFilter: false,
  }
}

module.exports = nextConfig
