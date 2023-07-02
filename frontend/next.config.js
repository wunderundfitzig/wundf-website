const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  output: 'standalone',
  reactStrictMode: true,
  images: {
    // unoptimized: true,
    domains: ['cms.wunderundfitzig.de'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/work/:story',
        destination: '/stories/:story',
        permanent: true,
      },
      {
        source: '/work',
        destination: '/',
        permanent: false,
      },
    ]
  },
})
