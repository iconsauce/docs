const rewire = require('rewire')
const defaults = rewire('react-scripts/scripts/build.js')
const config = defaults.__get__('config')

config.module.rules.push({
  test: /\.css$/,
  use: [
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            'postcss-iconsauce',
          ],
        },
      },
    },
  ],
})

module.exports = config
