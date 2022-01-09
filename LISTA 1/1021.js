var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
//ENTRADA 576.73
var valor = Number(lines[0])*100;

//PORCESSO
var qtdnotas100 = Math.floor(valor/10000);
var qtdnotas50 = Math.floor(valor%10000/5000);
var qtdnotas20 = Math.floor(valor%10000%5000/2000);
var qtdnotas10 = Math.floor(valor%10000%5000%2000/1000);
var qtdnotas5 = Math.floor(valor%10000%5000%2000%1000/500); 
var qtdnotas2 = Math.floor(valor%10000%5000%2000%1000%500/200); 
var qtdmoedas1 = Math.floor(valor%10000%5000%2000%1000%500%200/100);
var qtdmoedas50cen = Math.floor(valor%10000%5000%2000%1000%500%200%100/50);
var qtdmoedas25cen = Math.floor(valor%10000%5000%2000%1000%500%200%100%50/25);
var qtdmoedas10cen = Math.floor(valor%10000%5000%2000%1000%500%200%100%50%25/10);
var qtdmoedas5cen = Math.floor(valor%10000%5000%2000%1000%500%200%100%50%25%10/5);
var qtdmoedas1cen = Math.floor(valor%10000%5000%2000%1000%500%200%100%50%25%10%5/1);

//SAÍDA
console.log('NOTAS:'); 
console.log(qtdnotas100+' nota(s) de R$ 100.00');
console.log(qtdnotas50+' nota(s) de R$ 50.00');
console.log(qtdnotas20+' nota(s) de R$ 20.00');
console.log(qtdnotas10+' nota(s) de R$ 10.00');
console.log(qtdnotas5+' nota(s) de R$ 5.00');
console.log(qtdnotas2+' nota(s) de R$ 2.00');
console.log('MOEDAS:');
console.log(qtdmoedas1+' moeda(s) de R$ 1.00');
console.log(qtdmoedas50cen+' moeda(s) de R$ 0.50');
console.log(qtdmoedas25cen+' moeda(s) de R$ 0.25');
console.log(qtdmoedas10cen+' moeda(s) de R$ 0.10');
console.log(qtdmoedas5cen+' moeda(s) de R$ 0.05');
console.log(qtdmoedas1cen+' moeda(s) de R$ 0.01');