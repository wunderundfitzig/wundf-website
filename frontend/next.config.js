module.exports = {
  publicRuntimeConfig: {
    backendURL: process.env.BACKEND_URL,
  },
  images: {
    domains: ['cms.wunderundfitzig.de'],
  },
  experimental: {
    appDir: true,
    scrollRestoration: true,
    appDir: true,
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
}
