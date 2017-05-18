const path = require('path');
const webpack = require('webpack');
const packageJSON = require('./package.json');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./config.js');

module.exports = {
  context: path.resolve('src'),

  devtool: 'source-map',
  debug: true,

  entry: {
    app: './index.js',
  },

  loader: {
    appSettings: {
      env: 'development' // string, default to 'development'
    }
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: './flavor.js',
    library: 'flavor-js',
    libraryTarget: 'umd',
  },

  plugins: [
    new CleanWebpackPlugin(['dist', 'build']),
    //new webpack.IgnorePlugin(/lodash/),
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
    new webpack.optimize.OccurrenceOrderPlugin,
    // // Uglify debug
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: false,
    //   minimize: true,
    //   sourceMap: true,
    //   compress: true,
    //   output: {
    //     comments: false,
    //   },
    // }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      },
      sourceMap: true
    }),
  ],

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules|bower_components/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel-loader',
        'query': {
          'presets': [['env', {
            'modules': false,
            'targets': {'node': 4}
          }]]
        }
      },
    ],
  },

  externals: packageJSON.peerDependencies ? Object.keys(packageJSON.peerDependencies) : [],

  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'bower_components'],
  },

  eslint: {
    configFile: '.eslintrc',
  },

};
