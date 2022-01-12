var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valoresLidos;
var primeiroValor;
var segundoValor;
var maior;
var menor;
var soma;
var impressao;

for (;;) {

    valoresLidos = lines.shift().split(' ');
    primeiroValor = parseInt(valoresLidos.shift());
    segundoValor = parseInt(valoresLidos.shift());

    if ((primeiroValor <= 0) || (segundoValor <= 0)) {
        break;
    }

    if (primeiroValor >= segundoValor) {
        maior = primeiroValor;
        menor = segundoValor;
    }else{
        maior = segundoValor;
        menor = primeiroValor;
    }

    soma = 0;
    impressao = '';
    for( ; menor <= maior ; menor++){
        impressao = impressao.concat(menor + " ");
        soma += menor;
    }
    impressao = impressao.concat('Sum=' + soma);
    console.log(impressao);
}