const fetch = require('isomorphic-unfetch')

const BACKEND_URL = 'https://backend.wunderundfitzig.de'

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: 'file-loader',
      options: {
        name: 'static/images/[name].[ext]',
        publicPath: '/_next/'
      }
    })
    return config
  },
  exportPathMap: async function (defaultPathMap) {
    const res = await fetch(`${BACKEND_URL}/api/collections/get/work`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: { title_slug: 1 }
      })
    })

    const stories = await res.json()
    const storyURLS = stories.entries.reduce((obj, story) => {
      obj[`work/${story.title_slug}`] = {
        page: '/workStory',
        query: { storySlug: story.title_slug }
      }
      return obj
    }, {})

    return {
      ...defaultPathMap,
      ...storyURLS
    }
  },
  publicRuntimeConfig: {
    backendURL: BACKEND_URL
  }
}
