var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


senha = 2002;
cont = 1;
while(cont > 0){
    var senha = parseInt(lines.shift());
    if(senha === 2002){
        console.log("Acesso Permitido");
        break;
    }else{
        console.log("Senha Invalida");
    }
}