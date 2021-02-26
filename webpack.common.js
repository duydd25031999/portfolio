const Webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.tsx",
    vendor: "./src/vendor.ts"
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      images: path.join(__dirname, 'src/images'),
      fonts: path.join(__dirname, 'src/fonts')
    },
    extensions: ['.js', '.jsx', 'ts', 'tsx'],
  },
  plugins: [
    // new Webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery"
    // })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          "html-loader" //3. Inject html into DOM
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
            esModule: false
          }
        }
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  }
};