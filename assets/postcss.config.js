/**
 * Post css configuration.
 *
 * @type {Object}
 */

const env = process.env.NODE_ENV;

module.exports = {

	plugins: {
		'autoprefixer': {},

		'postcss-pxtorem': {
			rootValue: 16,
			unitPrecision: 5,
			propList: [ '*' ],
			selectorBlackList: [],
			replace: true,
			mediaQuery: false,
			minPixelValue: 2
		},

		'cssnano': env === 'production'
	}
};
