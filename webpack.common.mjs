import { createRequire } from 'module'
import fs from 'fs'
import path from 'path'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'

const babelOptions = JSON.parse(fs.readFileSync('./babel.config.json'))
const postcssOptions = createRequire(import.meta.url)('./postcss.config.cjs')
const __dirname = path.dirname(new URL(import.meta.url).pathname)

export default {
  entry: {
    index: './src/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              ...babelOptions
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html' }),
    new ForkTsCheckerWebpackPlugin()
  ],
  output: {
    clean: true
  }
}
