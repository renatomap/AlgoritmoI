var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var notas = Number(lines[0]); 

var notas, n1, n2;
n1 = 0;
n2 = 0;
var cin;
while (true) {
    cin >> notas;
    if(notas < 0 || notas > 10){
        console.log('nota invalida');
    }else if(n2 === 0){
        n1 = notas;
        n2 = 1;
    }else{
        var media = (n1+notas)/ 2;
        console.log('media = '+media);
        break;
    }
}
