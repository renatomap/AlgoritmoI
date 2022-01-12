var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines[0].split(' ');
var N1 = Number(linha1[0]);
var N2 = Number(linha1[1]);
var N3 = Number(linha1[2]);
var N4 = Number(linha1[3]);

var media = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) / 10;

console.log('Media: '+media.toFixed(1));

if(media >= 7.0){
    console.log('Aluno aprovado.');
}else
if(media < 5.0){
    console.log('Aluno reprovado.');
}else
if(media >= 5.0 && media <= 6.9){
    console.log('Aluno em exame.');
    var linha2 = lines[1];
    console.log('Nota do exame: '+linha2)
    var mf = (parseFloat(linha2) + parseFloat(media)) / 2;
    (mf >= 5.0);
    console.log('Aluno aprovado.');
    console.log('Media final: '+mf.toFixed(1));
}else
if(mf <= 4.9){
    console.log('Aluno reprovado.');
    console.log('Media final: '+mf.toFixed(1));
}
