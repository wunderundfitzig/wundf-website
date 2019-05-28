const routes = require('next-routes')

module.exports = routes()
  .add('workStory', '/work/:storySlug')
