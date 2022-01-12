var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0].split(' ');
var A = Number(valores[0]);
var B = Number(valores[1]);
var C = Number(valores[2]);

if((A + B) > C && (A + C) > B && (B + C) > A){
    //a = ((A + B) * C) / 2;
    console.log('Perimetro = '+(A + B + C).toFixed(1));
}else{
    //p = A + B + C;
    console.log('Area = '+(((A + B) * C)/2).toFixed(1));
}