var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0].split(' ');
var hi = Number(valores[0]);
var mi = Number(valores[1]);
var hf = Number(valores[2]);
var mf = Number(valores[3]);
// 1h == 60 min
// 24h == 1440 min
ht = hf - hi;

if(hi === hf){
    hora = 24;
    (mi === mf)
    minuto = mf - mi;
}else
if(hi < hf && mi > mf){
    hora = hf - hi;
    (mi < mf)
    minuto = 60 - hora;
}else
if(hi < hf && mi < mf){
    hora =  hf - hi;
    (mi < mf)
    minuto = mf - mi;  
}
console.log('O JOGO DUROU '+hora+' HORA(S) E '+minuto+' MINUTO(S)');