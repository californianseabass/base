import common from './webpack.common.mjs'
import { merge } from 'webpack-merge'

export default merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  devtool: 'source-map',
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single'
  }
})
