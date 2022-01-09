var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//ENTRADA
var x1, y1, x2, y2;
var linhaum = lines[0].split(' ');
x1 = Number(linhaum[0]);
y1 = Number(linhaum[1]);

var linhadois = lines[1].split(' ');
x2 = Number(linhadois[0]);
y2 = Number(linhadois[1]);

//PROCESSAMENTO
var a = x2 - x1;
var b = y2 - y1;
var c = a **2;
var d = b **2;
var distancia = Math.sqrt(c + d);

//SAIDA
console.log('distancia'.toFixed(4));