const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    contact: path.resolve(__dirname, "src/js/contact.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].js",
    publicPath: path.resolve(__dirname, "dist") + "/",
    chunkFilename: "js/[id].[chunkhash].js"
  },
  module: {
    rules: [
      //Aquí van los loaders
      //test: que tipo de archivo quiero reconocer
      //use: que loader se va a encargar del archivo
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"],
            plugins: ["syntax-dynamic-import"]
          }
        }
      },
      {
        test: /\.json$/,
        /*use: {
          loader: "json-loader"
        }*/
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit:100000, //Hasta qué limite de bytes va a hacer una transfortmación a base64
            name: "images/[name].[ext]"
          }
        }
      },
      {
        test: /\.(woff|eot|ttf|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit:100000, //Hasta qué limite de bytes va a hacer una transfortmación a base64
            name: "fonts/[name].[ext]"
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [
                require("nib"),
                require("rupture")
              ],
              import: [
                "~nib/lib/nib/index.styl",
                "~rupture/rupture/index.styl"
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              noIeCompat: true
            }
          }
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
      //chunkFilename: "[id].css"
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./modules-manifest.json")
    })
  ]
}