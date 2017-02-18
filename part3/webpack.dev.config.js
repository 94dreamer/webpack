var path=require('path');
var fs=require('fs');
var webpack=require('webpack');

module.exports={
  devtools:'cheap-module-eval-source-map',
  entry:{
    home:[
      'webpack-hot-middleware/client'
      'webpack/hot/dev-server',
      './src/home.js'
    ],
    vendors:['react','react-dom','react-router']
  },
  output:{
    filename:'[name].js',
    path: `${__dirname}/dist`,
    chunkFilename: 'chunk[id].js?ver' + new Date().getTime(),
    publicPath:'/static/'
  },
  module:{
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: `${__dirname}/src`,
        exclude: /bundle\.js$/
      }
    ],
    loaders:[
      {
        test: /\.js$/,
        include:[
          path.resolve(__dirname,'src')
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      },{
        test:/\.scss$/,
        include:[
          path.resolve(__dirname,'src')
        ],
        loader:'style!css!sass?sourceMap=true&sourceMapContens=true'
      },{
        test: /\.(png|jpg)$/,
        include:[
          path.resolve(__dirname,'src')
        ],
        loader: 'url-loader?limit=8192'
      },
      {// expose-loader将需要的变量从依赖包中暴露出来
        test: require.resolve("jquery"),
        loader: "expose-loader?$!expose-loader?jQuery"
      }，{
        test: require.resolve("jquery"), loader: "expose?$! expose?jQuery"
        }// expose-loader将需要的变量从依赖包中暴露出来
      ]
  },
  resolve:{
    extensions:['','.js','.jsx','.scss','.css']
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV),
      __DEV__:true
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template:'./index.html'
    }),
  ]
}