/**
 * @desc 基础公共配置
 */

const path = require('path');
// import path from 'path';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 在导入语句中没带文件后缀时，Webpack 会自动带上后缀去尝试访问文件是否存在。会先寻找 A.js、找不到就去找 A.jsx，按照规则找，最后还是找不到，就会报错
    alias: {
      '@src': path.join(__dirname, '../', 'app/renderer'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
