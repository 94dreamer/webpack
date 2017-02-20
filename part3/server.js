/**
 * Created by zhouzhen on 2017/2/20.
 */
var path=require('path');
var express=require('express');
var webpack=require('webpack');
var config=require('./webpack.config.dev');

var app=express();
var compiler=webpack(config);

var webpackDevOptions={
  noInfo:true,
  historyApliFallback:true,
  publicPath:config.output.publicPath,
  headers:{
    'Access-Control-Allow-Origin':'*'
  }
};

app.use(require('webpack-dev-middleware')(compiler,webpackDevOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*',function (req,res) {
  res.sendFile(path.join(__dirname),'index.html');
});

app.listen(8787,'localhost',function (err) {
  if (err){
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8787');
});

