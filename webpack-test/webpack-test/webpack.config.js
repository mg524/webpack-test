const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");//引入 plugin 对象
// 实例化plugin 对象
const plugin1 = new htmlWebpackPlugin({
    template: "./src/index.html",// 指定要用到的模板文件
    filename: "index.html"// 指定生成的文件名称，此文件只存在于内存中，不会进行显示本地存储
})
const vueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: "development",
    entry: path.join(__dirname, "./src/index.js"),//入口文件
    output: {// 出口配置
        path: path.join(__dirname, "dist"),
        filename: "newIndex.js"
    },
    plugins: [plugin1, new  vueLoaderPlugin()],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.jpg|png|gif|svg$/, use: 'url-loader?limit=184,843' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/,loader: "vue-loader"}
        ]
    }
}