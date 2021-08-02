// Modules - Encaplated code (only share minimum)
// CommonJS, Every file module (by default)
const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade')
console.log(data);
sayHi('susan');
sayHi(names.john)
sayHi(names.peter)