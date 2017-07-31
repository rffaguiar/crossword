const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
    react: "./src/react.jsx"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"]
          }
        }
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin("styles.css"),
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Output Management"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
