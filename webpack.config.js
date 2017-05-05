const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var webpackOpts = {

  entry: {
    main: './src/js/index'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'assets', 'js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'es2016']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        // this assumes you vender imports exists in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    // CommonChunksPlugin will now extract all the common
    // modules from vendor and main bundles
    new webpack.optimize.CommonsChunkPlugin({
      // But since there are no more common modules between them we end up
      // with just the runtime code included in the manifest file
      name: 'manifest'
    }),
    new ExtractTextPlugin({
      filename: '../css/vendor.css'
    })
  ]

}

var watchOpts = {
  aggregateTimeout: 300,
  poll: 1000
}

var compiler = webpack(webpackOpts)

compiler.watch(watchOpts, (err, stats) => {
  if (err) {
    console.error(err)
  }
  console.log(stats.toString({ minimal: true, colors: true }))
})
