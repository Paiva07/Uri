var input = require('fs').readFileSync('1323', 'utf8');
var lines = input.split('\n');

let dados = [0];
let result = [];
let num;

do {
  for (i = 0; i < lines.length; i++) {
    num = lines[i];
    for (let i = 1; i < 101; i++) {
      let add = i * i + dados[i - 1];
      dados.push(add);
      if (num == i) {
        result.push(add);
      }
    }
  }
} while (num !== '0');

// console.log(result);
result.map((e) => console.log(e));
