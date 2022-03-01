const rewire = require('rewire')
const defaults = rewire('react-scripts/scripts/build.js')
const config = defaults.__get__('config')

config.module.rules.push({
  test: /iconsauce\.css$/,
  use: [
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          config: false,
          ident: 'postcss',
          plugins: [
            'postcss-iconsauce',
            'postcss-flexbugs-fixes',
            [
              'postcss-preset-env',
              {
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
              },
            ],
          ],
        },
      },
    },
  ],
})

module.exports = config