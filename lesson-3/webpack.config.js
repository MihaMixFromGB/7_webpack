const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    entry: "/src/main.js",
    output: {
        path: resolve(__dirname, "build"),
        filename: "main.[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|mp3|mp4)$/i,
                loader: 'file-loader',
                options: { name: '[path][name].[ext]' }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, "index.html") }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
    ],
    optimization: {
        minimizer: [
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                  ["gifsicle", { interlaced: true }],
                  ["jpegtran", { progressive: true }],
                ],
              },
            },
          }),
        ],
    },
    devServer: {
        port: 3000,
        watchFiles: ['./*']
    }
}