/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',   // ✅ required for static export
  basePath: '/kiran-portfolio',  // ✅ repo name
  assetPrefix: '/kiran-portfolio/',
}

export default nextConfig
