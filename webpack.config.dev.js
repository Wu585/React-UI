const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...base,
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "W-UI",
      template: "index.html"
    })
  ],
};
