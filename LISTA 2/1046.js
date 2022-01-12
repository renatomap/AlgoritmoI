var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0].split(' ');
var hi = Number(valores[0]);
var hf = Number(valores[1]);

if(hi == hf){
    hora = 24;
}else
if(hi > hf){
    hora = (24 - hi) + hf;
}else
if(hi < hf){
    hora =  hf - hi;  
}
console.log('O JOGO DUROU '+hora+' HORA(S)');