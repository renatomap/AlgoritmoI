var input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
var lines = input.split('\n');

var X, Y, maior, menor, soma;

var X = parseInt(lines[0]);
var Y = parseInt(lines[1]);

if(X > Y){
    menor = Y;
    maior = X;
}else {
    menor = X;
    maior = Y;
}
soma = 0;
for(var i = menor + 1; i < maior; i++){
    if(i % 2 !== 0){
        soma = soma + i;
    }
}
console.log(soma)