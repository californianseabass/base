import fs from 'fs'
import { mergeWithRules } from 'webpack-merge'
import common from './webpack.common.mjs'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

const babelOptions = JSON.parse(fs.readFileSync('./babel.config.json'))

export default mergeWithRules(
  {
    module: {
      rules: {
        test: 'match',
        use: {
          loader: 'match',
          options: 'replace'
        }
      }
    }
  }
)(
  common,
  {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                ...babelOptions,
                plugins: ['react-refresh/babel']
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new ReactRefreshWebpackPlugin()
    ],
    devServer: {
      historyApiFallback: true,
      hot: true
    }
  }
)
