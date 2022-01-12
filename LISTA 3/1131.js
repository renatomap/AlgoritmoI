var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0];
var a, b, c, d, e, f, g, h, i, k, l;
c = 0, d= 0, e = 0, j = 0, k = 0, l = 0;

while (1) {
    a = parseInt(lines.shift());
    b = parseInt(lines.shift());
    if(a > b){ l++;
    }else if(a < b){ k++;
    }else{ j++;
        c+=a;
        d+=b;
        e++;
        console.log('Novo grenal (1-sim 2-nao)');
        f = parseInt(lines.shift());
    }if(f === 1){
        continue;
    }if(f === 2){
        break;
    }
    console.log(e+' grenais');
    console.log('Inter:'+l);
    console.log('Gremio:'+k);
    console.log('Empates:'+j)
    if(l > k){
        console.log('Inter venceu mais')
    }else
    if(l < k){
        console.log('Gremio venceu mais')
    }else{
        console.log('Nao houve vencedor')
    }
}