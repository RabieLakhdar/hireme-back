module.exports = {
	root: true,
	plugins: ['import'],
	settings: {
		'import/resolver': {
			node: {
				paths: ['api'],
				alias: {
					_api: './api',
					_router: './api/router',
				},
			},
		},
	},
};