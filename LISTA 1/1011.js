var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = Number(lines[0]);
//1.33333333
var X = (4/3) * 3.14159 * (raio * raio * raio);

console.log('VOLUME = '+X.toFixed(3));