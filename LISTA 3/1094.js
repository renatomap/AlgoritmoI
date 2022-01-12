var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var qntdCasosTestes = Number(lines[0]);

var coelhos = 0;
var sapos = 0;
var ratos = 0;

var TestesRealizados = 0;
while (TestesRealizados < qntdCasosTestes) {
    ++TestesRealizados;
    var linha = lines[TestesRealizados].split(' ');
    var qntddeCobaias = Number(linha[0]);
    var tipodeCobaia = linha[1];
    if(tipodeCobaia === 'R') 
    ratos += qntddeCobaias;
    if(tipodeCobaia === 'C') 
    coelhos += qntddeCobaias;
    if(tipodeCobaia === 'S') 
    sapos += qntddeCobaias;
}
var total = ratos + coelhos + sapos;
var Percentualdecoelhos = (coelhos / total * 100).toFixed(2);
var Percentualderatos = (ratos / total * 100).toFixed(2);
var Percentualdesapos = (sapos / total * 100).toFixed(2);

console.log('Total: '+total+' cobaias');
console.log('Total de coelhos: '+coelhos);
console.log('Total de ratos: '+ratos);
console.log('Total de sapos: '+sapos);
console.log('Percentual de coelhos: '+Percentualdecoelhos+' %');
console.log('Percentual de ratos: '+Percentualderatos+' %');
console.log('Percentual de sapos: '+Percentualdesapos+' %');