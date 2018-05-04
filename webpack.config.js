const webpack = require('webpack')
const path = require('path')

const DIST_DIR = path.resolve(__dirname, './dist')
const SRC_DIR = path.resolve(__dirname, './src/client')

const config = {
  mode: 'development',
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

  }

}

module.exports = config
