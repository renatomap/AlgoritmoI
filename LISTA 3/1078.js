var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);
var contador = 0;
//var X; 
for(var i = 0; i < 10; i++){
    if(N > 2 && N < 1000){
        contador++
        console.log(contador+' x '+N+ ' = '+contador * N)
    }
}