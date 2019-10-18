### webpack搭建react开发环境

##### 使用yarn管理依赖包
+ 使用yarn add安装管理包相比npm更快
+ yarn add 包名，添加到dependencies
+ yarn add --dev 报名，添加到devDependencies

##### 初始化package.json
npm init

##### 安装项目依赖包
+ yarn add react react-dom
+ yarn add --dev webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader
> style-loader插件，webpack将把css合并到js，然后js通过命令插入到html
本地安装webpack，可通过配置package.json，script执行webpack命令
全局安装webpack，才能在cmd控制台使用webpack命令
+ yarn add --dev @babel/core @babel/preset-env @babel/preset-react babel-loader
安装完成后，package.json依赖如下
```json
  "dependencies": {
    "react": "^16.10.2",
    "react-dom": "^16.10.2"
  },
  "devDependencies": {
    "@babel/core": "^7.6.4",
    "@babel/preset-env": "^7.6.3",
    "@babel/preset-react": "^7.6.3",
    "babel-loader": "^8.0.6",
    "css-loader": "^3.2.0", // 解析css，在css内部遇到@import即引入
    "html-webpack-plugin": "^3.2.0",
    "style-loader": "^1.0.0", // 插入css到index.html的head标签内
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
```

##### 构建webpack编译react项目
1. 添加.babelrc，编译转换es6，以及react语法
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```
2. 添加webpack配置文件webpack.config.js
+ webpack.config.v1.js初始版配置文件，将js，css统一编译为一个bundle.js文件
+ webpack.config.v2.js，将js，css独立打包
> 安装css独立打包插件
> yarn add --dev extract-text-webpack-plugin

>> 出现警告：warning extract-text-webpack-plugin@3.0.2: Deprecated. Please use https://github.com/webpack-contrib/mini-css-extract-plugin
>> yarn remove mini-css-extract-plugin
>> extract-text-webpack-plugin插件提取单独打包css文件时，报错，插件依赖webpack3的版本

> webpack4得使用mini-css-extract-plugin这个插件来单独打包css
> yarn add --dev mini-css-extract-plugin
> MiniCssExtractPlugin不支持热更新，可以设置环境变量，让开发环境不使用这个plugin

3. 添加webpack执行命令
在package.json添加命令
```javascript
"scripts": {
  "start": "webpack-dev-server --mode development --open --hot",
  -"build": "webpack --mode production",
  +"build": "cross-env NODE_ENV=production webpack --mode production"
}
```

##### webpack其他插件配置
1. 清理旧的编译文件
> yarn add --dev clean-webpack-plugin

2. 配置webpack.config.js所需编译的环境
> ```javascript
> const isEnvProduction = process.env.NODE_ENV === 'production';
> ```
> + 需要yarn add --dev cross-env，
> + 在package.json的scripts执行命令前 添加 cross-env NODE_ENV=production
> ```javascript
> "build": "cross-env NODE_ENV=production webpack --mode production",
> ```

##### 参考
1. [使用webpack构建react项目](https://mp.weixin.qq.com/s/eTQbgX8C3pFOTpbpHoWkHQ)
2. [webpack4.x详细配置](https://www.jianshu.com/p/6712e4e4b8fe)
3. [webpack4.x独立打包js，css](https://www.jianshu.com/p/7b9b86b9366b)

+ webpack4.x独立打包css
[mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)

