var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


int = X, Y;

var linha1 = lines[0].split(' ');
var X = parseInt(linha1[0]);
var Y = parseInt(linha1[1]);

while (X !== Y) {
    if(X < Y){
        console.log('Crescente');
        
    }else{
        console.log('Decrescente');
        
    }
    X++
}