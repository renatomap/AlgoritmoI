var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = Number(lines[0]);

var TestesRealizados = 0;
while (X !== 0 && Y !== 0) {
    
    var valores = lines[TestesRealizados].split(' ');
    var X = Number(valores[0]);
    var Y = Number(valores[1]);
    if(X > 0 && Y > 0){
        console.log('primeiro');
        ++TestesRealizados;
    }else 
    if(X > 0 && Y < 0){
        console.log('quarto');
        ++TestesRealizados;
    }else 
    if(X < 0 && Y < 0){
        console.log('terceiro');
        ++TestesRealizados;
    }else 
    if(X < 0 && Y > 0){
        console.log('segundo');
        ++TestesRealizados;
    }
}