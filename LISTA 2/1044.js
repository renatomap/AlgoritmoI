var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0].split(' ');
var A = Number(valores[0]);
var B = Number(valores[1]);


if(A%B == 0 || B%A == 0){
    console.log('Sao Multiplos');
}else{
    console.log('Nao sao Multiplos');
}
