var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = Number(lines[0]);
var Y = Number(lines[1]);

var soma = 0;

if(X > Y){
    for(var i = Y; i <= X; i++){
        if(i % 13 !== 0) 
        soma += i;
    }
}else{
    for(var i = X; i <= Y; i++){
        if(i % 13 !== 0) 
        soma += i;
    }
}
console.log(soma);