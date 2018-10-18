/**
 * cmd: npm install -g webpack
 * cmd: webpack ./app/app.js --output ./public/bundle.js --mode development
 */

document.write("I am in app.js");

var greet = require('./comps/hello.js');
greet();