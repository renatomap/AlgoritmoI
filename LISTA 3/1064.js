var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n1;
var total = 0; var media = 0; var NumTotal = 0;
contador = 1;
var contador = 0;

while (contador <= 6) {
    n1 = parseFloat(lines.shift());
    if(n1 > 0){
        total += n1;
        NumTotal ++;
    }
    contador++;
}
media = total / NumTotal;
console.log(NumTotal+' valores positivos');
console.log(media.toFixed(1));
