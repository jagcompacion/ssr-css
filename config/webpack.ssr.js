const path          = require('path'),
      webpack       = require('webpack'),
      nodeExternals = require('webpack-node-externals');

config = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    index: './src/server/index.js'
  },
  output: {
    path: path.resolve(__dirname, '..' ,'views/server'),
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
 },

 plugins: [
   new webpack.DefinePlugin({
    // Definitions...
    SSR: true
   })
 ]

}

// Disable for production builds
if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'cheap-module-eval-source-map'
}

module.exports = config;
