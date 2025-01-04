const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

console.log(mode + ' mode')

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: '[name].[contenthash].html',
    },
    mode: mode,
    entry: './src/js/main_page_index.js',
    output: {
        filename: mode === 'development' ? '[name].bundle.js' : '[name].[contenthash].js',
        assetModuleFilename: mode === 'development' ? 'assets/[name][ext][query]' : 'assets/[hash][ext][query]',
        path: mode === 'development' ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'build'),
        clean: true,
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            filename: '[name].[contenthash].html',
            template: path.resolve('./src/main_page.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(c|sc|sa)ss$/i,
                use: [
                    mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
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
                test: /\.(png|svg|jpg|gif|webp)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
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
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
}
