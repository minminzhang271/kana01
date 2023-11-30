
## 一、安装vue

npm i vue

## 二、安装依赖

### 安装打包工具 webpack

npm i -D webpack webpack-cli webpack-dev-server


### 处理es6 安装babel 把代码从高版本 转为低版本


npm i -D babel-loader @babel/core @babel/preset-env



### 处理其他类型的资源文件


npm i -D 
vue-loader   vue的单文件组件，浏览器不能识别

css-loader vue-template-compiler  css部分
vue-style-loader 
html-webpack-plugin  把源文件的html和js等资源文件合并





这么多依赖 
总的来说就是把各种文件 整合成浏览器能识别的合成文件


 




## 三、配置webpack 

### 配置webpack.config.js
### 配置babel
.babelrc.js




## 四、配置打包命令

修改 package.json  的 scripts:{}


## 五、版本管理 （补充）

git init