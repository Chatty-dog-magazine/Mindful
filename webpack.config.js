const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// where is the entry file
module.exports = {

  mode: 'development',
  entry: {
    content: './src/app.js',
    background: './src/app-2.js'
  }, 
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
    // might change this
  },




  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }

      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]

      },

      // web worker

      // {
      //   test: /\.worker\.js$/,
      //   use: {
      //     loader: 'worker-loader',
      //     options: { inline: true }
      //     // options: {
      //     //   inline: true
      //     // }
      //   }
      // },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },

  plugins: [
    new CopyPlugin([
      {from: 'public', to: 'public'}, 
      {from: 'manifest.json', to: 'manifest.json'}, 
      {from: 'src/content.css', to: 'content.css'}, 
      // {from: 'progressbar.min.js', to: 'progressbar.min.js'}
    ]),
    // new CleanWebpackPlugin()
    // new CopyWebpackPlugin(), 
    // new HtmlWebPackPlugin({
    //     template: "./index.html",

    //   })





    // new ErrorOverlayPlugin()
  ],

  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts'],

  }
};