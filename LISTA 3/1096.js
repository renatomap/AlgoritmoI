var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var i = 1;

while (i <= 9) {
    for(var j = 7; j > 4; j--){
        console.log('I='+i+' J='+j);
    }
    i+=2;
}