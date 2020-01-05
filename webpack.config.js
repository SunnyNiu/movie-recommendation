const path = require('path')
module.exports = require('knex')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }
    ]
  },
  resolve: {
    extensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    modules: [path.resolve('src'), path.resolve('server'), path.resolve('node_modules')],
  },
  devServer: {
    compress: true,
    hot: true,
    contentBase: './server/public',
    proxy: {
      '/movie/*': {
        target: 'http://localhost:3000',
        secure: false
      },

      '/recommendation/*': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  },
  devtool: 'source-map',
  externals: {
    sqlite3: 'commonjs sqlite3',
    knex: 'commonjs knex'
  }
}
