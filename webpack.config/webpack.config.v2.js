const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //引入清除文件插件

const isEnvProduction = process.env.NODE_ENV === 'production';
// console.log(isEnvProduction); //为添加命令cross-env，输出undefined
const baseConfig={
  // 指定mode，在src/*.js文件中内部使用process.env.NODE_ENV时，可获取初始值而不是undefined
  mode: isEnvProduction ? 'production' : 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    // path: path.resolve(process.cwd(), 'build'),
    filename: './js/bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          isEnvProduction?MiniCssExtractPlugin.loader:"style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: { // 对index.html压缩
        collapseWhitespace: isEnvProduction, // 去掉index.html的空格
        removeAttributeQuotes: isEnvProduction // 去掉引号
      },
      hash: true // 去掉上次浏览器的缓存（使浏览器每次获取到的是最新的html
    })
  ]
}

// 发布环境
if(isEnvProduction){
  // MiniCssExtractPlugin不支持热更新，需要手动刷新，设置环境变量，development不使用这个plugin
  baseConfig.plugins.push(
    new MiniCssExtractPlugin({
      // 输出路径
      filename: isEnvProduction ? './style/[name].[hash].css' : '[name].css'
    })
  );
  // 每次打包之前清理打包目
  baseConfig.plugins.push(new CleanWebpackPlugin())
}

module.exports=baseConfig;