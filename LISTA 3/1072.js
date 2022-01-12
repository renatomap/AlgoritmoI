var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var qtd, N, dentro, fora, i;
dentro = 0;
fora = 0;
var qtd = parseInt(lines[0]);

for(i = 0; i < qtd; i++){
    var N = lines[i];
    if(N >= 10 && N <= 20){
        dentro++;
    }else{
        fora++;
    }
    
}
console.log(dentro+' in');
console.log(fora+' out');