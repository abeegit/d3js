const path = require("path");

module.exports = () => {
	let config = {
		context: path.resolve("src"),
		entry: "./index.js",
		output: {
			filename: "bundle.js",
			path: path.resolve("dist"),
			publicPath: "/dist/"
		},
		devtool: "source-map",
		devServer: {
			//for 404s to fallback to /index.html
			historyApiFallback: true
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ["style-loader", "css-loader"]
				},
				{
					test: /\.jsx?$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: "babel-loader"
					}
				}
			]
		}
	};

	return config;
};
