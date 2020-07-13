const path = require('path')
const webpack = require('webpack')
const html = require('html-webpack-plugin')
const { VueLoaderPlugin }= require('vue-loader')


module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new html({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        // new html({
        //     template: path.join(__dirname,'./src/demo1.html'),
        //     filename: 'demo1.html'
        // }),
        // new html({
        //     template: path.join(__dirname,'./src/demo2.html'),
        //     filename: 'demo.html'
        // }),
        new VueLoaderPlugin(),

    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7632&name=[name].[ext]'},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            {test: /\.js$/, use: 'babel-loader',exclude: /node_modules/},
            {test: /\.vue$/, loader: 'vue-loader'},
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
}
