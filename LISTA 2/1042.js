var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0].split(' ');
//var X, Y, Z;
//var ordem;
var A = Number(valores[0]);
var B = Number(valores[1]);
var C = Number(valores[2]);

X = A;
Y = B;
Z = C;

if(X > Y){
    ordem = X;
    X = Y;
    Y = ordem;
    console.log(X);
    console.log(Y);
    console.log(Z);
}else 
if(X > Z){
    ordem = X;
    X = Z;
    Z = ordem;
    console.log(X);
    console.log(Y);
    console.log(Z);
}else
if(Y > Z){
    ordem = Y;
    Y = Z;
    Z = ordem;
    console.log(X);
    console.log(Y);
    console.log(Z);
}
console.log();
console.log(A);
console.log(B);
console.log(C);