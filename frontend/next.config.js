module.exports = {
  publicRuntimeConfig: {
    backendURL: process.env.BACKEND_URL,
  },
  images: {
    domains: ['cms.wunderundfitzig.de'],
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
}
