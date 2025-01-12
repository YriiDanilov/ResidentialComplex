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
    entry: {
        main_page: './src/js/main_page_index.js',
        common_layout: './src/layout_pages_js/layout_pages.js',
        common_interior: './src/js/interior_index.js',
    },
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
            filename: 'main_page.html',
            template: path.resolve('./src/main_page.html'),
            chunks: ['main_page'],
        }),
        new HtmlWebpackPlugin({
            filename: 'sky.html',
            template: path.resolve('./src/sky.html'),
            chunks: ['common_layout'],
        }),
        new HtmlWebpackPlugin({
            filename: 'floor_layout_silence.html',
            template: path.resolve('./src/floor_layout_silence.html'),
            chunks: ['common_layout'],
        }),
        new HtmlWebpackPlugin({
            filename: 'floor_layout_rocks.html',
            template: path.resolve('./src/floor_layout_rocks.html'),
            chunks: ['common_layout'],
        }),
        new HtmlWebpackPlugin({
            filename: 'floor_layout_alpine_dreams.html',
            template: path.resolve('./src/floor_layout_alpine_dreams.html'),
            chunks: ['common_layout'],
        }),
        new HtmlWebpackPlugin({
            filename: 'select.html',
            template: path.resolve('./src/select.html'),
            chunks: ['common_interior'],
        }),
        new HtmlWebpackPlugin({
            filename: 'purchase.html',
            template: path.resolve('./src/purchase.html'),
            chunks: ['common_interior'],
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
