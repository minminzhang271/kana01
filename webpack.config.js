const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * VueLoaderPlugin是一个解析Vue.js 的插件，
 * 于在webpack 构建过程中解析和转换. vue 单文件组件。 
 * 的作用是将.vue 文件中的模板、样式和脚本进行编译，并将其转换为JavaScript 模块，以供Webpack打包使用
*/
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader'},
      { test: /\.vue$/, use: 'vue-loader'},
      { test: /\.css$/, use: ['vue-style-loader','css-loader']}
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new VueLoaderPlugin()
  ]
}
