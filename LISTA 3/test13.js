var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let contador = 0;

for(let i = 0; i <= 6; i++){
    let num = lines[i]; //ou +lines[]
    if(num > 0){
        contador++;
    }
}
console.log(contador+' valores positivos');