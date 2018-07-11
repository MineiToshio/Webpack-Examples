const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    precios: path.resolve(__dirname, "src/js/precios.js"),
    contacto: path.resolve(__dirname, "src/js/contacto.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        //Aquí van los loaders
        //test: que tipo de archivo quiero reconocer
        //use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    //aquí van los plugins
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    })
  ]
}