var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'./src/index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel-loader'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
			{ test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml' },
			{ test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff' },
			{ test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2' },
			{ test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream' },
			{ test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject' },
			{ test: /\.(png|jpg|gif|cur)$/, loader: 'url-loader?limit=8192' }
		]
	}
};
