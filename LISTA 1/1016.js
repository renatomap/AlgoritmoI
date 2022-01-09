var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
//car X = 60 Km/h
//car Y = 90 Km/h
var km = Number(lines[0]);

var X = km * 2;

console.log(X +' minutos');