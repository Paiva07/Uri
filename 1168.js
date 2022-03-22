var input = require('fs').readFileSync('1168', 'utf8');
var lines = input.split('\n');
var info = lines.shift();

let dados = info.split('');
let soma = 0;

for (i = 0; i < dados.length; i++) {
  if (dados[i] == '1') {
    soma += 2;
  } else if (dados[i] == '2') {
    soma += 5;
  } else if (dados[i] == '3') {
    soma += 5;
  } else if (dados[i] == '4') {
    soma += 4;
  } else if (dados[i] == '5') {
    soma += 5;
  } else if (dados[i] == '6') {
    soma += 6;
  } else if (dados[i] == '7') {
    soma += 3;
  } else if (dados[i] == '8') {
    soma += 7;
  } else if (dados[i] == '9') {
    soma += 6;
  } else if (dados[i] == '0') {
    soma += 6;
  }
}

console.log(`${soma} leds`);
