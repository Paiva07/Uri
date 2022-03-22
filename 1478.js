var input = require('fs').readFileSync('1478', 'utf8');
var lines = input.split('\r\n');

function criarMatriz(n) {
  if (n == 1) {
    const mat = Array(n).fill(n);
    return mat;
  }
  if (n > 1) {
    const mat = Array(n).fill(n);
    for (const i in mat) {
      mat[i] = Array(n).fill(n);
    }
    return mat;
  }
}

for (i = 0; i < lines.length; i++) {
  const a = criarMatriz(i);
  console.log(a);
}
