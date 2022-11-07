const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry:path.join(__dirname,"src","index.js"),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
        publicPath: '/',
    },
    module:{
        rules:[
            {
                test:/\.?js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env","@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ["file-loader"],
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,"src","index.html")
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: true,
        hot: true,
    },
}