var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var contador = 1;

do{
    console.log(contador);
    contador = contador + 2;

}while (contador <= 100) {
    
}