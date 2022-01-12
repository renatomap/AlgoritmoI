var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = Number(lines[0]);
var imposto =   0; 
var diferenca;

if(salario > 4500){
    imposto = (1000 * 0.08) + (1500 * 0.18);
    diferenca = salario - 4500;
    imposto = imposto + diferenca * 0.28;
}else if(salario >= 3000.01){
    imposto = 1000 * 0.08;
    diferenca = salario - 3000;
    imposto = imposto + diferenca * 0.18;
}else if(salario >= 2000.01){
    diferenca = salario - 2000;
    imposto = diferenca * 0.08;
}if(imposto > 0){
    console.log('R$ '+ imposto.toFixed(2))
}else{
    console.log('Isento');
}
