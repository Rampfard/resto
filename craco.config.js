const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@utils': path.resolve(__dirname, 'src/utils'),
		},
	},
};