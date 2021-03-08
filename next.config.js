const withImages = require('next-images')
module.exports = withImages({
  publicRuntimeConfig: {
    backendURL: process.env.BACKEND_URL,
  },
  images: {
    domains: ['backend.wunderundfitzig.de'],
  },
})
