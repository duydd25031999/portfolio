const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        title: "Do Duc Duy Portfolio",
        filename: "index.html",
        template: "./src/templates/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ],
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: 'single',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].bundle.css"
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", //2. Turn css into commonjs
          "sass-loader" //1. Turn sass into css
        ]
      }
    ]
  }
});