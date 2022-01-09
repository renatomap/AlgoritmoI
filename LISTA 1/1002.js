var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var n = 3.14159;
//entrada = raio
var raio = Number(lines[0]);
//calculo da area = n * raio * raio
var area = n * raio * raio;
//Imprimir a saída
console.log("A="+area.toFixed(4));