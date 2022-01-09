var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines[0]);
var B = Number(lines[1]);

var X = A = B;

console.log("PROD = "+X);