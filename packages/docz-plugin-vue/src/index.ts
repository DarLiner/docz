import { createPlugin } from 'docz-core'
import { VueLoaderPlugin } from 'vue-loader'
import webpack from 'webpack'

export const vue = () =>
  createPlugin({
    modifyBundlerConfig: config => {
      config.module.rules.push({
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/,
      })

      config.module.rules.push({
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
        exclude: /node_modules/,
      })

      config.plugins.push(new VueLoaderPlugin())

      config.plugins.push(
        new webpack.ProvidePlugin({
          VueWrapper: ['vuera', 'VueWrapper'],
        })
      )

      return config
    },
  })
