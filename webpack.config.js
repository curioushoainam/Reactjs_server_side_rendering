module.exports = {
	entry: './app/app.js',					// source
	output: {
		path: __dirname,
		filename: './public/bundle.js'		// destination
	},
	mode: 'development'
};