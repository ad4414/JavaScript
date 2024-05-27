const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname,'src/login/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './login/index.js',
    clean:true//生成打包后内容之前，清空内容目录
  },
  plugins:[
    new HtmlWebpackPlugin({
         template:path.resolve(__dirname,'public/11.案例_登录.html'),//模板文件
        filename: path.resolve(__dirname,'dist/login/login.html')//输出文件
      })
  ],
   
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  
};