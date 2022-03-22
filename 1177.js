var input = require('fs').readFileSync('1177', 'utf8');
var lines = input.split('\n');
var info = lines.shift();

let n = 0;

for (i = 0; i < 1000; i++) {
  if (n == info) {
    n = 0;
  }
  console.log(`N[${i}] = ${n}`);
  n++;
}
