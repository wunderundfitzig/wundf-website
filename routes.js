const routes = require('next-routes')

module.exports = routes()
  .add('work', '/work/:projectName')
