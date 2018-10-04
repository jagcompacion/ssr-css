const path    = require('path'),
      webpack = require('webpack');

config = {
  entry: {
    client: './src/client/client.js',
    bundle: './src/client/bundle.js'
  },
  output: {
    path: path.resolve(__dirname, '..' ,'assets'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.scss$|\.css$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader?url=false", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
      }
    ]
 },

 plugins: [
   new webpack.DefinePlugin({
    SSR: JSON.stringify(false)
   })
 ]

}

// Disable for production builds
if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'cheap-module-eval-source-map'
}

module.exports = config;
