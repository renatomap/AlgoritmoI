var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c] = (lines[0].split(' ').map(item => parseInt(item)));

/*var a = Number(lines[0]);
var b = Number(lines[0]);
var c = Number(lines[0]);*/

var MaiorAB = (a + b + Math.abs(a - b)) /2;
var MaiorX = (c + MaiorAB + Math.abs(c - MaiorAB)) /2;

console.log(MaiorX+' eh o maior');