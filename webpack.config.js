const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      // Rule对象
      // {
      //   test: /\.js$/i,
      //   use: {
      //     loader: "my-loader01",
      //     options: {
      //       name: "camus",
      //       age: "18"
      //     }
      //   }
      // },
      // {
      //   test: /\.js$/i,
      //   use: "my-loader02",
      //   enforce: "pre"
      // },
      // {
      //   test: /\.js$/i,
      //   use: "my-loader03"
      // },
      {
        test: /\.js$/i,
        use: {
          loader: "my-babel-loader",
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        }
      },
      {
        test: /\.md$/i,
        use: [
          // "html-loader",
          "my-md-loader"
        ]
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  resolveLoader: {
    modules: ["node_modules", "./my-loaders"]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}


