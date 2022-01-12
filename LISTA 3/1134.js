var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var codigodecombustivel = lines[0];

Álcool = 1;
Gasolina = 2;
Diesel = 3;
Fim = 4;
soma = 0;

var contador = 0;
while (contador < codigodecombustivel) {
    ++contador;
    var linha = lines[contador];
    var Álcool = Number(linha[0]);
    
    if(Álcool === 1){
        var soma = Álcool;
        console.log('Álcool: '+soma);
        ++Álcool;
    }else
    if(Gasolina === 2){
        var Gasolina = Number(linha[0]);
        var soma = Gasolina;
        console.log('Gasolina: '+soma);
        ++Gasolina;
    }else
    if(Diesel === 3){
        var Diesel = Number(linha[0]);
        var soma = Diesel;
        console.log('Diesel: '+soma);
        ++Diesel;
    }else{
        (contador === 4)
        break;
    }
    
}