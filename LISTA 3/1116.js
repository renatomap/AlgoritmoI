var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var qntdCasosTestes = Number(lines[0]);

var TestesRealizados = 0;
while (TestesRealizados < qntdCasosTestes) {
    ++TestesRealizados;
    var linha = lines[TestesRealizados].split(' ');
    var dividendo = Number(linha[0]);
    var divisor = Number(linha[1]);
    if(divisor === 0){
        console.log('divisao impossivel');
    }else{
        var quociente = dividendo/divisor;
        console.log(quociente.toFixed(1));
    }
}
