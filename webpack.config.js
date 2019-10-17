const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isEnvProduction = process.env.NODE_ENV === 'production';

module.exports={
  mode: isEnvProduction ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
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
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    // MiniCssExtractPlugin不支持热更新，可以设置环境变量，让开发环境不使用这个plugin
    new MiniCssExtractPlugin({
      // 输出路径
      filename: isEnvProduction ? './style/[name].css' : './style/[name].[hash].css',
      chunkFilename: isEnvProduction ? '[id].css' : '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}