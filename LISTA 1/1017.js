var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
//CM do carro 12 KM/L.
var h = Number(lines[0]);
var km = Number(lines[1]);

var X = (h * km) / 12;

console.log(X.toFixed(3));