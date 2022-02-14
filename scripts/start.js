const rewire = require('rewire')
const defaults = rewire('react-scripts/scripts/start.js')
const webpackConfig = require('react-scripts/config/webpack.config')

defaults.__set__('configFactory', webpackEnv => {
  const config = webpackConfig(webpackEnv)

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

  return config
})
