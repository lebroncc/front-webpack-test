const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
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
        // webpack先用css-loader加载器去解析这个文件，遇到“@import”等语句就将相应样式文件引入
        // 如果没有css-loader，就没法解析这类语句
        // 然后用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里
        // loader是有顺序的，webpack肯定是先将所有css模块依赖解析完得到计算结果再创建style标签
        // 把style-loader放在css-loader的前面（webpack loader的执行顺序是从右到左）。
        use: ['style-loader', 'css-loader'] // 注意排列顺序，执行顺序与排列顺序相反
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}