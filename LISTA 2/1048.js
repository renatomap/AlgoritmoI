var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = Number(lines[0]);
var novosalario
var reajuste

if(salario <= 400.00){
    novosalario = salario * 1.15;
    console.log('Novo salario: '+novosalario.toFixed(2));
    reajuste = novosalario - salario;
    console.log('Reajuste ganho: '+reajuste.toFixed(2));
    console.log('Em percentual: 15 %');
}else
if(salario <= 800.00){
    novosalario = salario * 1.12;
    console.log('Novo salario: '+novosalario.toFixed(2));
    reajuste = novosalario - salario;
    console.log('Reajuste ganho: '+reajuste.toFixed(2));
    console.log('Em percentual: 12 %');
}else
if(salario <= 1200.00){
    novosalario = salario * 1.10;
    console.log('Novo salario: '+novosalario.toFixed(2));
    reajuste = novosalario - salario;
    console.log('Reajuste ganho: '+reajuste.toFixed(2));
    console.log('Em percentual: 10 %');
}else
if(salario <= 2000.00){
    novosalario = salario * 1.07;
    console.log('Novo salario: '+novosalario.toFixed(2));
    reajuste = novosalario - salario;
    console.log('Reajuste ganho: '+reajuste.toFixed(2));
    console.log('Em percentual: 7 %');
}else
if(salario > 2000.00){
    novosalario = salario * 1.04;
    console.log('Novo salario: '+novosalario.toFixed(2));
    reajuste = novosalario - salario;
    console.log('Reajuste ganho: '+reajuste.toFixed(2));
    console.log('Em percentual: 4 %');
}