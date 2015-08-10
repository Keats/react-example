var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var isProd = process.env.NODE_ENV === "production";
var outputFolder = isProd ? "dist" : "build";

module.exports = {
  devtool: "eval",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/app/index"
  ],
  output: {
    path: path.join(__dirname, outputFolder),
    filename: "app.js",
    publicPath: "/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ["react-hot", "babel?optional[]=runtime&stage=1"],
        exclude: /node_modules/
      }
    ]
  }
};
