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
<<<<<<< HEAD
  output: 'export',   // ✅ required for static export
  basePath: '/kiran-portfolio',  // ✅ repo name
  assetPrefix: '/kiran-portfolio/',
=======
>>>>>>> 11133029cdd7347483fc44290849ac0c4bd07fd4
}

export default nextConfig
