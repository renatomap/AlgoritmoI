var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
/*A = 3.5
B = 7.5 */ 
var A = Number(lines[0]);
var B = Number(lines[1]);

var X = (A*3.5 + B*7.5)/11;

console.log("MEDIA = "+X.toFixed(5));