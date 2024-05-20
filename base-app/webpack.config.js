const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV;
console.log(mode);

module.exports = {
  mode,
  entry: './src/index.tsx',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
      publicPath: '/'
    },
    port: 8002,
    compress: true,
    historyApiFallback: true,
    hot: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
      template: path.resolve(__dirname, 'public', 'index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ]
};