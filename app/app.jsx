/**
 * cmd: npm install -g webpack
 * cmd: webpack ./app/app.js --output ./public/bundle.js --mode development
 * 2nd way: 
 * create file webpack.config.js
 * and cmd : webpack
 * 
 * to automatically run wewbpack 
 * open new cmd tab/window, webpack -w
 */

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
	<a href="google.com">Hello world !</a>,
	document.getElementById('root')
)