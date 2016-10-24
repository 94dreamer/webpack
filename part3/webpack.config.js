/**
 * Created by zz on 2016/9/23.
 */
// 這邊使用 HtmlWebpackPlugin，將 bundle 好的 <script> 插入到 body ${__dirname} 為 ES6 語法對應到 __dirname
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js'//入口文件
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    chunkFilename: 'chunk[id].js?ver' + new Date().getTime(),
    publicPath: 'http://res2.esf.leju.com/Tel_React_SPA/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  module: {
    // loaders 則是放欲使用的 loaders，
    // 在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（
    // 排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 JavaScript。preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: `${__dirname}/src`,
        exclude: /bundle\.js$/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },// expose-loader将需要的变量从依赖包中暴露出来
      {test: require.resolve("jquery"), loader: "expose?$! expose?jQuery"}
    ]
  },
  // plugins 放置所使用的外掛
  plugins: [
    /*new webpack.optimize.UglifyJsPlugin({//压缩
     compressor:{
     warnings:false
     }
     }),*/
    /*new webpack.DefinePlugin({//生产环境
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),*/
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};