
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/tour-and-travel-web',
  assetPrefix: '/tour-and-travel-web/',

}

export default nextConfig
