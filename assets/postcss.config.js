/**
 * Post css configuration.
 *
 * @type {Object}
 */

module.exports = {

	plugins: {
		'autoprefixer': {},

		// 'postcss-assets': {
		// 	loadPaths: [ 'img/', 'fonts/' ],
		// 	relative: true
		// },

		'postcss-pxtorem': {
			rootValue: 16,
			unitPrecision: 5,
			propList: [ '*' ],
			selectorBlackList: [],
			replace: true,
			mediaQuery: false,
			minPixelValue: 2
		},
	}
};
