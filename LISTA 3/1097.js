var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var i = 1;

while (i <= 1) {
    for(var j = 7; j >= 5; j--){
        console.log('I='+i+' J='+j);
        
    }
    i += 2;
}while (i <= 3) {
    for(var j = 9; j >= 7; j--){
        console.log('I='+i+' J='+j);
    }
    i += 2;
}while (i <= 5) {
    for(var j = 11; j >= 9; j--){
        console.log('I='+i+' J='+j);
    }
    i += 2;
}while (i <= 7) {
    for(var j = 13; j >= 11; j--){
        console.log('I='+i+' J='+j);
    }
    i += 2;
}while (i <= 9) {
    for(var j = 15; j >= 13; j--){
        console.log('I='+i+' J='+j);
    }
    i += 2;
}