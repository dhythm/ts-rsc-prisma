"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactServerWebpackPlugin = require("react-server-dom-webpack/plugin");
const rimraf = require("rimraf");
const webpack = require("webpack");

const isProduction = process.env.NODE_ENV === "production";
rimraf.sync(path.resolve(__dirname, "../dist"));
webpack(
  {
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "source-map" : "cheap-module-source-map",
    entry: [path.resolve(__dirname, "../src/index.client.tsx")],
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "main.js",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: "babel-loader",
          exclude: /node_modules/,
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
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, "../public/index.html"),
      }),
      new ReactServerWebpackPlugin({ isServer: false }),
    ],
  },
  (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      process.exit(1);
      return;
    }
    const info = stats.toJson();
    if (stats.hasErrors()) {
      console.log("Finished running webpack with errors.");
      info.errors.forEach((e) => console.error(e));
      process.exit(1);
    } else {
      console.log("Finished running webpack.");
    }
  }
);
