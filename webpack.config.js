// webpack.config.js
let path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename:'./index.html'
})

module.exports = {
    entry: './src/index.js',  //输入文件
    output: {
    	path: path.join(__dirname, 'dist'),
    	publicPath: '/dist/', 
    	filename: 'bundle.js'
    },
    mode: "development",
    plugins: [htmlPlugin]
}

