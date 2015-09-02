var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./app/app.js'],
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
      loaders: [
        {
            test: /\.js?$/, // cible tous les fichiers en .jsx
            exclude: /node_modules/, // on exclut le répertoire node_modules
            loader: 'babel?optional[]=runtime' // et on précise quelques options
        }, {
          test: /\.css$/,
          // Reference: https://github.com/webpack/extract-text-webpack-plugin
          // Extract css files in production builds
          //
          // Reference: https://github.com/webpack/style-loader
          // Use style-loader in development for hot-loading
          loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
        }, {
          // ASSET LOADER
          // Reference: https://github.com/webpack/file-loader
          // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
          // Rename the file using the asset hash
          // Pass along the updated reference to your code
          // You can add here any file extension you want to get copied to your output
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
          loader: 'file'
        }, {
          // HTML LOADER
          // Reference: https://github.com/webpack/raw-loader
          // Allow loading html through js
          test: /\.html$/,
          loader: 'raw'
        }
      ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};
