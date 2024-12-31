const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

console.log(mode + ' mode')

module.exports = {
<<<<<<< HEAD
    entry: './src/interior_js/index.interior_js',  // Точка входа (главный файл проекта)
    output: {
        filename: 'bundle.interior_js',  // Выходной файл для JS
        path: path.resolve(__dirname, 'dist'),  // Папка для выходных файлов
=======
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: 'main_page.[contenthash].html',
>>>>>>> feat/main_page
    },
    mode: mode,
    entry: './src/js/main_page_index.js',
    output: {
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main_page.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'main_page.[contenthash].html',
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
<<<<<<< HEAD
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/interior_index.html',  // Шаблон для генерации HTML
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',  // Название файла для сгенерированного CSS
        }),
    ],
    optimization: {
        minimize: true,  // Включаем минимизацию
        minimizer: [
            new CssMinimizerPlugin(),  // Плагин для минимизации CSS
        ],
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};
=======
}
>>>>>>> feat/main_page
