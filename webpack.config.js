const webpack = require('webpack')
const path = require('path')
const LiveReloadPlugin = require('webpack-livereload-plugin')

const DIST_DIR = path.resolve(__dirname, './dist')
const SRC_DIR = path.resolve(__dirname, './src/client')

const liveReloadOptions = {}

const config = {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  entry: {
     main: SRC_DIR + '/index.js'
   },
   output: {
     filename: 'bundle.js',
     path: DIST_DIR,
   },
   module: {
    rules: [
     {
       test: /(\.css|.scss)$/,
       use: [{
           loader: "style-loader" // creates style nodes from JS strings
       }, {
           loader: "css-loader" // translates CSS into CommonJS
       }, {
           loader: "sass-loader" // compiles Sass to CSS
       }]
     },
     {
       test: /\.(jsx|js)?$/,
       use: [{
         loader: "babel-loader",
         options: {
           cacheDirectory: true,
           presets: ['react', 'env'] // Transpiles JSX and ES6
         }
       }]
     }
    ],
  },
  plugins: [new LiveReloadPlugin(liveReloadOptions)]
}

module.exports = config
