var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines[0].split(' ');
var linha2 = lines[1].split(' ');

var cp1 = Number(linha1[0]);
var np1 = Number(linha1[1]);
var vp1 = Number(linha1[2]);

var cp2 = Number(linha2[0]);
var np2 = Number(linha2[1]);
var vp2 = Number(linha2[2]);

var pagar = (np1 * vp1) + (np2 * vp2);

console.log('VALOR A PAGAR: R$ '+pagar.toFixed(2));