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
      '@root': path.resolve(__dirname, '../src'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@providers': path.resolve(__dirname, '../src/providers'),
      '@machines': path.resolve(__dirname, '../src/machines'),
      '@services': path.resolve(__dirname, '../src/services'),
      '@sections': path.resolve(__dirname, '../src/sections'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@third-party': path.resolve(__dirname, '../src/third-party'),
      '@routing': path.resolve(__dirname, '../src/routing'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_module/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env',
                  { targets: { browsers: 'last 2 versions' } }, // or whatever your project requires
                ],
                '@babel/preset-typescript',
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                    useBuiltIns: true,
                    development: process.env.NODE_ENV === 'development',
                    importSource: '@welldone-software/why-did-you-render',
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
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
