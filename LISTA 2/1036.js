var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//ENTRADA
var linha1 = lines[0].split(' ');
var A = Number(linha1[0]);
var B = Number(linha1[1]);
var C = Number(linha1[2]);

//PROCESSO
var Delta = B * B - 4 * A * C; 

//SAÍDA
if (Delta < 0 | A === 0){
    console.log('Impossivel calcular');
}else{
    var R1 = (-B + Math.sqrt(Delta)) / (2 * A);
    var R2 = (-B - Math.sqrt(Delta)) / (2 * A);
    console.log('R1 = '+R1.toFixed(5));
    console.log('R2 = '+R2.toFixed(5));
}
