/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/saola-website',
  images: { unoptimized: true },
  trailingSlash: true,
}
module.exports = nextConfig
