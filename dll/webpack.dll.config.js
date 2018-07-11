const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: {
    modules: [
      "react",
      "react-dom"
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].js",
    library: "[name]", //exporta una variable global con ese nombre
    publicPath: "./dist"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "name",
      path: path.join(__dirname, "[name]-manifest.json")
    })
  ]
}