const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

console.log(mode + ' mode')

module.exports = {
    mode: mode,
    entry: './src/js/main_page_index.js',
    output: {
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/main_page.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader', //html загрузчик
            },
            {
                test: /\.(c|sc|sa)ss$/i,
                use: [
                    mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, // css загрузчик
                    'css-loader',
                    {
                        loader: 'postcss-loader', // vendored prefix
                        options: {
                            postcssOptions: {
                                plugins: ['postcss-preset-env'],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|webp)$/i, // img
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i, //fonts
                type: 'asset/resource',
            },
            // {
            //     test: /.\pug$/i,
            //     loader: 'pug-loader',
            //     exclude: /(node_modules|bower_components)/,
            // },
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
}
