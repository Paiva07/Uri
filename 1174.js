var input = require('fs').readFileSync('1174', 'utf8');
var lines = input.split('\n');

for (i = 0; i < lines.length; i++) {
  let dados = +lines[i];
  if (dados <= 10) {
    console.log(`A[${i}] = ${dados.toFixed(1)}`);
  }
}
