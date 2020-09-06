const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

const path = require("path");

module.exports = {
	entry: './public/src/init.js',
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
	},
	watch : true,
	  module: {
	    rules: [
	      {
	        test: /\.(js|jsx)$/,
	        exclude: /node_modules/,
	        use: {
	          loader: "babel-loader"
	        }
	      },
	      {
	        test: /\.html$/,
	        use: [
	          {
	            loader: "html-loader"
	          }
	        ]
	      }
	    ]
	  },
	  plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
		})
	  ]
};