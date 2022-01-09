var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
//ENTRADA
var dias = parseInt(input);
var anos, meses;

//PROCESSAMENTO
var anos = parseInt(dias / 365);
dias = dias % 365;

var meses = parseInt(dias / 30);
dias = dias % 30;
//SAIDA
console.log(anos+' ano(s)');
console.log(meses+' mes(es)');
console.log(dias+' dia(s)');