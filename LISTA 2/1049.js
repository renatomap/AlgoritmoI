var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = lines[0];
var B = lines[1];
var C = lines[2];

//var A = [vertebrado, invertebrado];
//var B = [ave, mamifero, inseto, analideo];
//var C = [carnivoro, onivoro, herbivoro, hematofago];
if(A === 'vertebrado' && B === 'ave' && C === 'carnivoro'){
    console.log('aguia');
}else
if(A === 'vertebrado' && B === 'ave' && C === 'onivoro'){
    console.log('pomba');
}else
if(A === 'vertebrado' && B === 'mamifero' && C === 'onivoro'){
    console.log('homem');
}else
if(A === 'vertebrado' && B === 'mamifero' && C === 'herbivoro'){
    console.log('vaca');
}else
if(A === 'invertebrado' && B === 'inseto' && C === 'hematofago'){
    console.log('pulga');
}else
if(A === 'invertebrado' && B === 'inseto' && C === 'herbivoro'){
    console.log('lagarta');
}else
if(A === 'invertebrado' && B === 'anelideo' && C === 'hematofago'){
    console.log('sanguessuga');
}else
if(A === 'invertebrado' && B === 'anelideo' && C === 'onivoro'){
    console.log('minhoca');
}
