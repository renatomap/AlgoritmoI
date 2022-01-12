var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0].split(' ');
var X = Number(valores[0]);
var Y = Number(valores[1]);

if(X == 0 && Y == 0){
    console.log('Origem');
}else
if(X > 0 && Y > 0){
    console.log('Q1');
}else
if(X < 0 && Y > 0){
    console.log('Q2');
}else
if(X < 0 && Y < 0){
    console.log('Q3');
}else
if(X > 0 && Y < 0){
    console.log('Q4');
}else
if(X < 0 || X > 0 && Y == 0){
    console.log('Eixo X');
}else
if(Y < 0 || Y > 0 && X == 0){
    console.log('Eixo Y');
}
