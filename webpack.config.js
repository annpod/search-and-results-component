const path = require('path')
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "$",
    libraryTarget: "umd",
  },
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  resolve: {
      extensions: [".tsx", ".ts", ".js"],
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
}
