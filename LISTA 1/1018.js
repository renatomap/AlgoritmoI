var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// ENTRADA
var valor = Number(lines[0]);

// PROCESSAMENTO
var qtdeNotas100 = qtdeNotas50 = qtdeNotas20 = qtdeNotas10 = qtdeNotas5 = qtdeNotas2 = qtdeNotas1 = 0;


qtdeNotas100 = Math.floor(valor/100);
valor = valor %100;
qtdeNotas50 = Math.floor(valor/50);
valor = valor %50;
qtdeNotas20 = Math.floor(valor/20);
valor = valor %20;
qtdeNotas10 = Math.floor(valor/10);
valor = valor %10;
qtdeNotas5 = Math.floor(valor/5);
valor = valor %5;
qtdeNotas2 = Math.floor(valor/2);
valor = valor %2;
qtdeNotas1 = Math.floor(valor/1);
valor = valor %1;

// SAIDA
console.log(valor);
console.log(qtdeNotas100+' nota(s) de R$ 100,00');
console.log(qtdeNotas50+' nota(s) de R$ 50,00');
console.log(qtdeNotas20+' nota(s) de R$ 20,00');
console.log(qtdeNotas10+' nota(s) de R$ 10,00');
console.log(qtdeNotas5+' nota(s) de R$ 5,00');
console.log(qtdeNotas2+' nota(s) de R$ 2,00');
console.log(qtdeNotas1+' nota(s) de R$ 1,00');