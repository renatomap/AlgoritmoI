var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0].split(' ');
var A = Number(valores[0]);
var B = Number(valores[1]);
var C = Number(valores[2]);
var X;

if( A < B){
    X = A;
    A = B;
    B = X;
}
if(A < C){
    X = A;
    A = C;
    C = X;
}
if(B < C){
    X = B;
    B = C;
    C = X;
}  

if(A >= (B + C)){
    console.log('NAO FORMA TRIANGULO');
}else
    if(A*A === (B*B + C*C)){
    console.log('TRIANGULO RETANGULO');
    }else if(A*A > (B*B + C*C)){
    console.log('TRIANGULO OBTUSANGULO');
    }if(A*A < (B*B + C*C)){
    console.log('TRIANGULO ACUTANGULO');
    }if(A === B && A === C && B === C){
    console.log('TRIANGULO EQUILATERO');
    }else if(A === B || A === C || B === C){
    console.log('TRIANGULO ISOSCELES');
}