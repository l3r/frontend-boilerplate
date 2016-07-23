var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: './index',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify("production") } }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss$|\.css$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?progressive=true' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.eot$|\.wav$|\.mp3$/, loader: "file" }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./style")]
  }
}