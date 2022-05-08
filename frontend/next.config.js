module.exports = {
  publicRuntimeConfig: {
    backendURL: process.env.BACKEND_URL,
  },
  images: {
    domains: ['cms.wunderundfitzig.de'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/work',
        permanent: true,
      },
    ]
  },
}
