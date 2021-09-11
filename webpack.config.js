const path = require("path");
const htmlWebpackPlugin = "html-webpack-plugin";
plugins: [
  new htmlWebpackPlugin({
    template: "./index.html",
  }),
],
  require("path-register");

module.exports = {
  entry: ["@babel/polyfill", "./src/app.js"],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ["babel-loader"],
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  mood: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    contentBase: "./dist",
  },
};
