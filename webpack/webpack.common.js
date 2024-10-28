const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@components': path.resolve(__dirname, '../src/components'),
      '@root/*': path.resolve(__dirname, '../src'),
      '@styles/*': path.resolve(__dirname, '../src/styles'),
      '@pages/*': path.resolve(__dirname, '../src/pages'),
      '@providers/*': path.resolve(__dirname, '../src/providers'),
      '@machines/*': path.resolve(__dirname, '../src/machines'),
      '@services/*': path.resolve(__dirname, '../src/services'),
      '@sections/*': path.resolve(__dirname, '../src/sections'),
      '@assets/*': path.resolve(__dirname, '../src/assets'),
      '@utils/*': path.resolve(__dirname, '../src/utils'),
      '@routing/*': path.resolve(__dirname, '../src/routing'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new dotenv(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  devServer: {
    static: './dist',
  },
};
