var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//ENTRADA
var linha1 = lines[0].split(' ');
var A = Number(linha1[0]);
var B = Number(linha1[1]);
var C = Number(linha1[2]);
var D = Number(linha1[3]);

//PROCESSO
if(B > C && D > A && C+D > A+B && C > 0 && D > 0 && A%2 === 0){
    console.log('Valores aceitos');
} else{
    console.log('Valores nao aceitos');
}