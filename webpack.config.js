const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index"
  },
  output: {
    filename: "[name].bundle.js"
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    progress: true
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({ title: "OutputManagement" }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js/,
        include: /src/,
        loader: ["babel-loader"]
      }
    ]
  }
};
