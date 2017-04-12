var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: ['babel-polyfill', './index.js']
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
         test: /\.js$/,
         exclude: /node_modules/,
         use: 'babel-loader'
       },
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test:/\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    stats: "errors-only",
    open: true,
  }
}
