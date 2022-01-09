var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var KM = Number(lines[0]);
var L = Number(lines[1]);

cm = KM/L; 

console.log(cm.toFixed(3)+' km/l');