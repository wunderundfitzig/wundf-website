const fetch = require('isomorphic-unfetch')

const BACKEND_URL = 'https://wfback.uber.space/'

module.exports = {
  webpack: config => {
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
  exportPathMap: async function(defaultPathMap) {
    const res = await fetch(`${BACKEND_URL}/work`)

    const stories = await res.json()
    const storyURLS = stories.reduce((obj, story) => {
      obj[`work/${story.slug}`] = {
        page: '/workStory',
        query: { storySlug: story.slug }
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
