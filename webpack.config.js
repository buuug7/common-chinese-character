const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const PUBLIC_PATH = "/common-chinese-character/";

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    publicPath: PUBLIC_PATH,
  },
  devServer: {
    contentBase: [path.resolve(__dirname, "docs")],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      publicPath: PUBLIC_PATH,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "docs"),
        },
      ],
    }),
    new VueLoaderPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-syntax-dynamic-import"],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
