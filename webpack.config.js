const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const PUBLIC_PATH = "/common-chinese-character/";

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    publicPath: PUBLIC_PATH
  },
  devServer: {
    contentBase: [path.resolve(__dirname, "docs")]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      publicPath: PUBLIC_PATH
    }),
    new CopyWebpackPlugin(
      [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "docs")
        }
      ],
      {
        ignore: ["index.html"]
      }
    ),
    new VueLoaderPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.(css|scss)$/,
        loader: ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
