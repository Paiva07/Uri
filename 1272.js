var input = require('fs').readFileSync('1272', 'utf8');
var lines = input.split('\r\n');
var info = lines.shift();
var dados = info.split('·');

var cod = '';

dados.map((e) => (cod += e.charAt(0)));

console.log(cod);
