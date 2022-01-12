var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var N = Number(lines[0]);
var i = 1;
/*for(i = 1; i <= 10000; i++){
    if(i % N === 2){
        console.log(i);
    }
}
*/
while (i <= 10000) {
    if(i % N === 2)
    console.log(i)
    i++;
}