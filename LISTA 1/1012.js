var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var lines1 = lines[0].split(' ');

var A = Number(lines1[0]);
var B = Number(lines1[1]);
var C = Number(lines1[2]);

var TRIANGULO = (A * C)/2;
var CIRCULO = 3.14159 * C * C;
var TRAPEZIO = ((A + B) * C)/2;
var QUADRADO = B * B;
var RETANGULO = A * B;

console.log('TRIANGULO: '+TRIANGULO.toFixed(3));
console.log('CIRCULO: '+CIRCULO.toFixed(3));
console.log('TRAPEZIO: '+TRAPEZIO.toFixed(3));
console.log('QUADRADO: '+QUADRADO.toFixed(3));
console.log('RETANGULO: '+RETANGULO.toFixed(3));