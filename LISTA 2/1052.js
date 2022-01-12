var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha = Number(lines[0]);
//var mes = January, February, March, April, May, June, July, August, September, October, November, December;

if(linha == 1){
    console.log('January');
}else
if(linha == 2){
    console.log('February');
}else
if(linha == 3){
    console.log('March');
}else
if(linha == 4){
    console.log('April');
}else
if(linha == 5){
    console.log('May');
}else
if(linha == 6){
    console.log('June');
}else
if(linha == 7){
    console.log('July');
}else
if(linha == 8){
    console.log('August');
}else
if(linha == 9){
    console.log('September');
}else
if(linha == 10){
    console.log('October');
}else
if(linha == 11){
    console.log('November');
}else
if(linha == 12){
    console.log('December');
}