// Modules - Encaplated code (only share minimum)
// CommonJS, Every file module (by default)
const names = require('./04-name');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
require('./07-mind-grenade')
console.log(data);
sayHi('susan');
sayHi(names.john)
sayHi(names.peter)