var input = require('fs').readFileSync('/dev/stdin','utf8');
var lines = input.split('\n');

var valor = parseFloat(input);

if(valor >= 0 && valor <= 25.0000){ 
    console.log("Intervalo [0,25]");
}else 
    if(valor >= 25.00001 && valor <= 50.0000000){ 
    console.log("Intervalo (25,50]");
}else 
    if(valor >= 50.00001 && valor <= 75.0000000){ 
    console.log("Intervalo (50,75)");
}else
    if(valor >= 75.00001 && valor <= 100.0000000){
    console.log("Intervalo (75,100]");
}else{ 
    console.log("Fora de intervalo");
}