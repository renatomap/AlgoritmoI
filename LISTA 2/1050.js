var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha = Number(lines[0]);

if(linha == 61){
    console.log('Brasilia');
}else
if(linha == 71){
    console.log('Salvador');
}else
if(linha == 11){
    console.log('Sao Paulo');
}else
if(linha == 21){
    console.log('Rio de Janeiro');
}else
if(linha == 32){
    console.log('Juiz de Fora');
}else
if(linha == 19){
    console.log('Campinas');
}else
if(linha == 27){
    console.log('Vitoria');
}else
if(linha == 31){
    console.log('Belo Horizonte');
}else{
    console.log('DDD nao cadastrado');
}