const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');
// import path from 'path';
// import baseConfig from './webpack.base';
// import webpackMerge from 'webpack-merge';

const mainConfig = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'), // 定义入口文件为 /app/main/electron.js
  target: 'electron-main', // 从浏览器到 Node，运行在不同环境下的 JS 代码存在一些差异。target 配置项可以让 Webpack 构建出不同运行环境的代码
  output: {
    // 打包出来的文件目录为 dist，文件名为 electron.js
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  mode: 'development',
};

module.exports = webpackMerge.merge(baseConfig, mainConfig);
