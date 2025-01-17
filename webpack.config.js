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
        index: './src/js/main_page_index.js',
        common_layout: './src/layout_pages_js/layout_pages.js',
        index: './src/js/index.js',
        infrastructura: './src/infrastructure_page.js/infrastructure_page_index.js',
        link_page: './src/link_page.js/link_page_index.js',
        select_page_index: './src/select_page.js/select_page_index.js',
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
            filename: 'index.html',
            template: path.resolve('./src/index.html'),
            chunks: ['index'],
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
            filename: 'select_page.html',
            template: path.resolve('./src/select_page.html'),
            chunks: ['select_page_index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'link_page.html',
            template: path.resolve('./src/link_page.html'),
            chunks: ['link_page'],
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: path.resolve('./src/contact.html'),
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'infrastructure_page.html',
            template: path.resolve('./src/infrastructure_page.html'),
            chunks: ['infrastructura'],
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
