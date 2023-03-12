const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactServerWebpackPlugin = require("react-server-dom-webpack/plugin");
const rimraf = require("rimraf");

rimraf.sync(path.resolve(__dirname, "../dist"));

module.exports = {
  entry: path.resolve(__dirname, "./src/index.client.tsx"),
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new ReactServerWebpackPlugin({ isServer: false }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
};
