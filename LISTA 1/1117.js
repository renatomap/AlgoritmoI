var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nota1 =0 , media = 0, total = 0, total2 = 0;
var nota = Number(lines[0]);

while (total2 !== 2) {
    nota1 = lines[nota];
    if(nota1 >= 0 && nota1 <= 10){
        total += nota1;
        total2 += 1;
    }else{
        console.log('nota invalida');
        ++nota;
    }
}
media = (total2 + total) / 2;
console.log('media = '+(media).toFixed(2));






/*
var contador = 0;
while (notas) {
    ++contador;
    var notas = Number(lines[0]);
    notas = lines[contador];
    var n2 = Number(lines[1]);
    var n4 = Number(lines[3]);
  
    if(notas <= 0 || notas <= 10){
        console.log('nota invalida');
        //++contador;
    }else{
        var media = (n2+n4) /2;
        console.log('media = '+(media).toFixed(2));
        break;
    }
}
*/