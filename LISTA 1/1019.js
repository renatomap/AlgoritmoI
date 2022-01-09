var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
//ENSTRADA
var segundos = Number(lines[0]);
var segundos = parseInt(input);

//PROCESSAMENTO
var horas = parseInt(segundos / 3600);
segundos = segundos % 3600; 

var minutos = parseInt(segundos / 60);
segundos = segundos % 60; 

//SAIDA
console.log(`${horas}:${minutos}:${segundos}`);