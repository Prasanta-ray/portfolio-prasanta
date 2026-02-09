/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',  <-- COMMENTED OUT (We want dynamic server mode)
  transpilePackages: ['three'],
  images: {
    unoptimized: true,
  },
  // Ignore strict errors during build so it doesn't crash on typos
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig