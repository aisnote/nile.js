// webpack.config.js
const webpack = require('webpack')
const path = require('path')
const glob = require('glob')

module.exports = {
  entry: path.resolve(__dirname, 'client/module/broadcaster.js'),
  // entry: {
  //   js: glob.sync(path.resolve(__dirname, 'client/module/*.js'))
  // },
  target: 'node',
  output: {
    publicPath: 'dist',
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'nile-bundle.js',
    libraryTarget: 'umd',
    library: 'Broadcaster',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // exclude: /node_modules/,
        options: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }
    ]
  }
}
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         include: path.resolve(__dirname, 'client'),
//         loader: 'babel-loader',
//       },
//       { test: /\.css$/, include: path.resolve(__dirname, 'client'), loader: 'style-loader!css-loader' },
//     ]
//   }
// }

