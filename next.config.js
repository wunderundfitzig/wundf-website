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
  publicRuntimeConfig: {
    backendURL: 'https://wfspace.uber.space'
  }
}
