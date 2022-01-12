var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var X = Number(lines[0]);
var impar;
impar < 0;

while (impar < 6) {
    
    if(X % 2 !== 0){
        console.log(X)
        impar++;
    }
    X++
}