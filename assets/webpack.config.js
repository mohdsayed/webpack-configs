const path = require( 'path' );

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' ); // https://webpack.js.org/plugins/mini-css-extract-plugin/
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const env = process.env.NODE_ENV;

module.exports = {
	entry: {
		main: './js/index.js',
	},
	output: {
		path: path.resolve( __dirname, 'build' ),
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_module/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
				]
			},
			{
				test: /\.(png|jpg|svg|jpeg|gif|ico)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							publicPath: '../' // Added in the beginning, example ../images/img.png
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: 'production' !== env
						}
					}
				]
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin( {
			filename: 'css/[name].css',
		} ),
		new BundleAnalyzerPlugin( {
			openAnalyzer: 'analyse' === env
		} )
	]
};
