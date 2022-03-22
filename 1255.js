var input = require('fs').readFileSync('1255', 'utf8');
var lines = input.split('\r\n');
var info = lines.shift();

let dados = info.toLowerCase();

let letra = '';
let final = 0;

for (let i = 0; i < dados.length; i++) {
  letra = dados.charAt(i);
  console.log(letra);
  for (let z = 0; z < dados.length; z++) {
    if (letra == dados[z]) {
      final++;
    }
  }
}
console.log(final);
