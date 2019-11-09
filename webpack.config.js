const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = require('knex')
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }
    // {
    //   test: /\.css$/,
    //   user: ['style-loader', 'css-loader'],
    //   exclude: /node_modules/
    // },
    // {
    //   test: /\.html$/,
    //   user: {
    //     loader: 'html-loader'
    //   },
    //   exclude: /node_modules/
    // }
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: '/index.html'
  //   })
  // ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    compress: true,
    hot: true
  },
  devtool: 'source-map',
  externals: {
    sqlite3: 'commonjs sqlite3',
    knex: 'commonjs knex'
  }
}
