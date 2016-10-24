# 初学教程2部分- 使用Webpack来搭建ES6模块

在上一篇中我们已经学习了基础的webpack使用方式，在某些新项目中，我们总想试一试ES6，但是大部分浏览器是不支持的，我们这个时候要学会利用babel进行转换编译。

如果我们写过ES6，因为他的简捷和方便的用法，我们便不会再去想回去写ES5甚至ES3。如果你还没有机会使用ES6，很大一部分原因就是因为不了解如何构建开发环境和使用设定配置来帮助我们撰写WS6。

这些配置总是让初学者沮丧，包括我自己，所以我尽可能让这些过程看起来朴实易懂。

## 必要条件

1.如果你还没有看过第一部分，你应该确认自己对webpack基础部分的了解。

2.有关ES6的学习和描述，[ECMAScript 6入门](http://es6.ruanyifeng.com/)是个很好的资源，或者是[es6-cheatsheet](https://github.com/DrkSephy/es6-cheatsheet)。

## 目录

* [Babel](#Babel)
  * [Babel是做什么的](#Babel是做什么的)
  * [如何设定Babel](#如何设定Babel)
* [Webpack](#Webpack)
  * [一个新的Loader](#一个新的Loader)
* [我们完成了？](#我们完成了？)
  * [引入ES6的模块](#引入ES6的模块)
* [额外的补充](#额外的补充)
  * [production环境参数](#production环境参数)
  * [加入Lint](#加入Lint)
* [结论](#结论)

## Babel

如果你想要有更深入的了解和更多详细，甚至可以说是繁杂的关于babel的手册，请跳转到[Babel官网](http://babeljs.cn/)，在此我只做一些简单的描述。

### Babel是做什么的

简单来说，babel让我们可以更完整地使用javascript的ES6特性，因为目前大部分的浏览器和环境都不支持ES6的绝大数新特性，所以我们利用babel将它转换成ES5，让我们的ES6写法的代码可以被广泛运行。

这个ES6的程式，目前只有最新的浏览器支持。

    const square = n => n * n;

它会被转换成大概这个样：

    var square = function(n){
        return n * n
    };

这样就能在普通的javascript环境运行了。


### 安装

想使用Webpack大多数的功能只需要我们全局安装一下：

    npm install -g webpack

然而Webpack的一些功能，比如优化插件，需要我们把它安装到本地。在这种情况下我们需要：

    npm install --save-dev webpack

### 命令行

运行Webpack只需要下面一行命令：

    webpack

如果想要Webpack在我们改变文件的同时监听改变并重新构建：

    webpack --watch

如果想要使用自定义名称的Webpack的配置文件:

    webpack --config myconfig.js

### 如何设定Babel

在项目的根目录下我们可以新建一个后缀名为.babelrc的文件，这里解释一下为什么是.babelrc呢？

熟悉linux的同学知道，rc结尾的文件通常代表运行时自动加载的文件，配置等等，同样的这里的babelrc会在webpack打包时运行babel访问这个配置文件，如果不想分离，可以把babelrc的设置放到package.json中也可。

    .babelrc

我们的babelrc里面的字符量非常少，

    {
        "presets": ["es2015", "stage-0"]
    }

这个"presets"代表了启动怎样的预设转码，es2015代表启动es6语法，而后面的stage则有stage-0、stage-1、stage-2，这里我一般使用stage-0，因为它代表了绝大多数的标准情况。
总之，如果要用到这些预设配置presets，我们就需要用npm安装并依赖他们：

    npm install --save-dev babel-preset-es2015 babel-preset-stage-0



## Webpack

就此，我们可以使用part1部分相同的webpack配置js文件，但是需要加入ES6所需要的功能。

这是我们目前`Webpack`配置的`javascript`文件内容：

```
// webpack.config.dev.js
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
```

和

```
// webpack.config.prod.js
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  }
}
```

### 一个新的Loader

如果我们要将我们包含ES6的代码转换成ES5需要在配置文件中添加一个叫做`babel-loader`的新loader，他和`babel-core`有依赖关系。这个loader访问并读取了我们的`.babelrc`配置项设定的档案来按规则转换我们的代码。
    
    npm install --save-dev babel-loader babel-core

我们在dev和prod这两个配置文件中加入：

```
// 为了节省篇幅只贴出`loaders`部分。

// webpack.config.dev.js 和 webpack.config.prod.js
module: {
  loaders: [{
    test: /\.css$/,
    loaders: ['style', 'css']
  }, {
    test: /\.js$/,
    loaders: ['babel'],
    include: path.join(__dirname, 'src')
  }]
}
```

一件非常重要的事情，请注意`include`属性的用法。当我们运行`webpack`时，因为我们在test中设定了匹配`.js`结尾的文件，webpack将会在每一个文件夹的`.js`文件尝试去执行`babel-loader`。

这样？你也能看到问题了吧，他会无线执行我们不需要编译的任何项目内js，包括`node_modules`，这样缺失的设置，会极端地延长我们的构建过程···so long so long。

`include`可以防止这个问题，loader只会在我们所指定的`src`目录下匹配`.js`文件。

其次，我们还可以这样干！把 `include:path.join(__dirname,'src')` 改成 `exclude:/node_modules/`,这样反排除我们不想要编译的文件夹。

## 我们完成了？

说实话，为了容易的初衷，我让这个教学过程显得有点长了，现在我们就来看看加入了babel之后，我们用ES6语法把我们之前的`index.js`重构成什么样了：

```
// index.js

// 接受 hot module reloading
if (module.hot) {
  module.hot.accept()
}

require('./styles.css') // 網頁現在有了樣式
const Please = require('pleasejs')

const div = document.getElementById('color')
const button = document.getElementById('button')
const changeColor = () => div.style.backgroundColor = Please.make_color()

button.addEventListener('click', changeColor)
```


### 引入ES6的模块

需要提醒的是，我们现在可以使用ES6的module系统。例如

```
const Please = require('pleasejs')
```

我们可以改成import方式：

```
import Please from 'pleasejs'
```

## 额外的补充

有两个其实很重要的主题我并没有太多的篇幅可以去覆盖它们：

### Production环境参数

#### Webpack

如果我们不想要在`production`执行部分的代码，我们可以使用 `DefinePlugin`。

这个`plugin`将会为我们的整个构建来创建一个全局常量，我们可以用任何名字来命名，比如

`DONT_USE_IN_PRODUCTION: true`，但是更多情况下，我们最好这样选择来使用：

`process.env.NODE_ENV: JSON.stringify('production')`

这是因为许多代码可以识别`process.env.NODE_ENV`，并使用额外的功能和优化。

为什么要使用`JSON.stringify`?，根据资料的解释process.env.NODE_ENV的值

> If the value is a string it will be used as a code fragment.

这意味着`'production'`将会是一个错误，如果你不想使用`'production'`，`'“production”'`也是一个选择。

如此，我们的plugins数组会像这样：

```
plugins: [
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,//压缩错误信息
    },
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),//自动优化分配
  new HtmlWebpackPlugin({
    template: './src/index.html'//模版html
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')//设定环境变量
  })
]
```

现在，我怕们可以排除掉一些代码不在我们的生产环境中运行，我们可以写这样判断一条语句：

```
if (process.env.NODE_ENV !== 'production') {
  // not for production
}
```

在我们目前的案例中，如果在production环境下，我们可以排除掉hot reload：

```
// 只在非生产环境中使用热重载
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept()
  }
}
```

#### Babel

定义我们的 production 变量`process.env.NODE_ENV`有其它额外的好处。

根据手册：

> 目前的环境将会优先读取`process.env.BABEL_ENV`。当`BABEL_ENV`没有定义时，它将会降级使用`NODE_ENV`，再如果它也没有被定义的话，默认替代使用为"development"。

它意味着babel环境会匹配我们的webpack环境。

我们能够增加这个预设在我们的`.babelrc`文件中，添加我们的development时也就是开发环境特有的配置：

```
{
  "presets": ["es2015", "stage-2"],
  "env": {
    // 只发发生在 NODE_ENV没有被定义或者是被定义为"development"
    "development": {
      // 当NODE_ENV是production时不运行
  }
}
```

我们会在part3和react的部分重新介绍这一块 关于 `React Transform HMR`。

### 加入Lint

如果你看过其他关于Webpack/React案例的教程or实例，你应该是看过一个同样rc后缀的文件——`.eslintrc`，如果你使用的不是IDE编辑器，而是文本编辑器类似于Sublime之类的，eslint可以提供语法和风格的检查，并检查出我们的语法以及风格上的错误和注意警告。另外，就算我们正在使用IDE，它也能提供更多的功能，来确保整个项目的代码风格统一。

请注意，如果我们想要在编辑器内使用它，需要安装插件，在此我不做赘述。

简单描述一些安装和配置：

```
npm install -g eslint
npm install --save-dev eslint eslint-config-airbnb

```

我们的.eslintrc

```
// .eslintrc
{
  "extends": "airbnb/base" // 'airbnb/base' 因為 'airbnb' 假設使用 react
}
```

我们可以稍微调整这些规则，来适应我们的喜好，比如：

```
// .eslintrc
{
  "extends": "airbnb/base",
  "rules": {
    "comma-dangle": 0,
    "no-console": 0,
    "semi": [2, "never"],
    "func-names": 0,
    "space-before-function-paren": 0,
    "no-multi-spaces": 0
  }
}
```

另外，eslint内置不支持babel语法，为此，我们需要安装两个plugin：

```
npm install --save-dev babel-eslint eslint-plugin-babel
```

再一次调整我们的`.eslintrc`配置文件，加入我们指定的babel规则：

```
// .eslintrc
{
  "extends": "airbnb/base",
  "parser": "babel-eslint",
  "rules": {
    "comma-dangle": 0,
    "no-console": 0,
    "semi": [2, "never"],
    "func-names": 0,
    "space-before-function-paren": 0,
    "no-multi-spaces": 0,
    "babel/generator-star-spacing": 1,
    "babel/new-cap": 1,
    "babel/object-shorthand": 1,
    "babel/arrow-parens": 1,
    "babel/no-await-in-loop": 1
  },
  "plugins": [
    "babel"
  ]
}
```

最后，在我们的`package.json`中加入lint会是个好主意。

```
// package.json
"scripts": {
  "build": "webpack --config webpack.config.prod.js",
  "dev": "webpack-dev-server --config webpack.config.dev.js",
  "lint": "eslint src"
}
```

我们可以随时运行 `npm run lint` 来确保我们的代码没有违反指定的规则。

其实说老实话，这个关于lint的配置具有不匹配个人风格价值的繁琐 :anguished: ，除非我们是团队工作或者是用惯了文本编辑器，才会十分有必要去使用它。

## 结论

我把这一切的最终配置放进 [demo1](https://github.com/94dreamer/webpack/part2/#demo1) .

现在我们可以轻松地撰写ES6特性的javascript代码，我们同时更加了解了webpack，当es6的代码跑起在浏览器中的时候还真是激动。

将来可能的部分：

* Part3 加入React的项目搭建
* Part4 涵盖更多进阶的Webpack功能

如果有误或者更好的建议，请在issue提出，我们来一起讨论。

感谢你的阅读哟。。
