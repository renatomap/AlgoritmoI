var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

for(let i = 0; i < 5; i++){
    let num = lines[i]; //ou +lines[]
    if(num % 2 === 0){
        par++;
    }else{ 
        impar++;
    }
    if(num > 0){
        positivo++;
    }else{
        if(num < 0)
        negativo++;
    }

}
console.log(par+' valor(es) par(es)');
console.log(impar+' valor(es) impar(es)');
console.log(positivo+' valor(es) positivo(s)');
console.log(negativo+' valor(es) negativo(s)');