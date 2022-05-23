const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      root: __dirname,
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
    client: {
      logging: "verbose",
      overlay: true,
      webSocketURL: "https://ssdev.platform.localhost:29000/",
    },
  },  
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: './public/favicon.ico',
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
  mode: 'development',
};
