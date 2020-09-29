const path = require( 'path' );

module.exports = {
	mode: 'development',
	entry: {
		'main': './src/index.ts',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
				options: {
					configFile: 'config/typescript/base.tsconfig.json'
				}
			},
		]
	},
	resolve: {
		extensions: [ '.ts', '.js' ],
	},
	// externals: {
	// 	'foo': 'FOO'
	// },
};
