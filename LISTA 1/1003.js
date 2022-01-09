var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
//entrada
var A = Number(lines[0]);
var B = Number(lines[1]);
//2 valores ineriros
var SOMA = A + B
//Saída SOMA = A + B
console.log("SOMA = "+SOMA);