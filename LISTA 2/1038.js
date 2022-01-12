var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines[0].split(' ');

var codigo = entrada[0];
var quantidade = Number(entrada[1]);
var preco;

if(codigo == 1){
    preco = 4
}else
if(codigo == 2){
    preco = 4.5 
}else
if(codigo == 3){
    preco = 5
}else
if(codigo == 4){
    preco = 2
}else
if(codigo == 5){
    preco = 1.5 
}
var total = preco * quantidade
console.log('Total: R$ '+total.toFixed(2));