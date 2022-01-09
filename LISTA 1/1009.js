var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);

var X = (C*0.15) + B;
console.log('TOTAL = R$ '+ X.toFixed(2));